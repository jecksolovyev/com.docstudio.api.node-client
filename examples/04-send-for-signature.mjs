// 04 - the full lifecycle: send a PDF for signature, follow it, fetch the result, clean up.
//
// quick-send is the one route that is fully typed in the OpenAPI document: it uploads the
// file and attaches the recipients in a single call, and creates no template to clean up
// afterwards. The alternative route (upload -> template -> envelope -> send) carries the
// document layout as an XML string the document does not describe.
//
// The envelope cannot reach COMPLETED here: signing requires a real cryptographic
// signature from the recipient. The example follows it as far as a sender can.
//
// Note where the documentId comes from. Every authenticated download needs one, and the
// only typed source is getDocumentsForSign - the signer's call, which answers the sender
// 403 "No active role for mailbox". getEnvelopeZip carries no security requirement at
// all, so the client sends it unauthenticated and the server rejects it; it belongs to
// the public access-code flow. What a sender has is envelope.data.
import { readFile, writeFile } from 'node:fs/promises';
import { EnvelopeControllerApi, MiscControllerApi } from '@docstudio/api-client';
import { authenticated, mailboxUuid, run } from './lib.mjs';

const POLL_ATTEMPTS = 5;
const POLL_INTERVAL_MS = 2000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

run(async () => {
    const signer = process.env.DOCSTUDIO_SIGNER_EMAIL;
    if (!signer) throw new Error('DOCSTUDIO_SIGNER_EMAIL is not set - this example emails a real address');

    const config = await authenticated();
    const mailbox = await mailboxUuid(config);
    const envelopes = new EnvelopeControllerApi(config);

    // Which signature a recipient can be asked for belongs to the deployment, not to the
    // account. api.docstudio.com runs the AMERICA region, which has no cryptographic
    // signature providers at all, so asking for `signer` there is answered 422 "No
    // signature provider for digital signing". What a signer draws instead is an eInk
    // signature. A region with providers configured takes the digital route.
    const { data: settings } = await new MiscControllerApi(config).appSettings();
    const crypto = settings.crypto ?? {};
    const digital = (crypto.signatureProviders ?? []).length > 0;
    if (!digital && !crypto.einkSupported) {
        throw new Error(`region ${crypto.region} offers neither a digital nor an eInk signature`);
    }
    console.log(`region ${crypto.region}: asking for ${digital ? 'a digital' : 'an eInk'} signature`);

    // The generated code appends the file with no explicit filename, so the part name comes
    // from File.name. A plain Blob would arrive as "blob". File is global from Node 20.
    const bytes = await readFile(new URL('./example-document.pdf', import.meta.url));
    const document = new File([bytes], 'example-document.pdf', { type: 'application/pdf' });

    const { data: created } = await envelopes.quickSendExternalDocuments(mailbox, {
        subject: `API client example ${new Date().toISOString()}`,
        message: 'Sent by the DocStudio API client example. No action needed.',
        // With neither flag the recipient is only copied in. There is no role enum.
        recipients: [{ recipient: signer, ...(digital ? { signer: true } : { eInkSignature: true }) }],
    }, [document]);

    const envelopeUuid = created.uuid;
    console.log(`sent ${envelopeUuid} to ${signer}`);

    try {
        let status, envelope;
        for (let attempt = 1; attempt <= POLL_ATTEMPTS; attempt += 1) {
            const { data } = await envelopes.getEnvelopeByUuid(envelopeUuid, mailbox);
            envelope = data.envelope;
            status = envelope?.status;
            const done = envelope?.completed ?? 0;
            const total = envelope?.total ?? 0;
            console.log(`  ${attempt}/${POLL_ATTEMPTS}  ${status}  ${done}/${total} participants done`);
            if (status === 'COMPLETED' || status === 'CANCELLED') break;
            if (attempt < POLL_ATTEMPTS) await sleep(POLL_INTERVAL_MS);
        }

        // envelope.data is typed as a plain string, but it is the envelope XML, and the
        // document ids a sender needs are the only place they appear. The OpenAPI
        // document describes nothing inside it, so this is the one spot in these
        // examples that reads an undescribed format.
        const ids = [...(envelope?.data ?? '').matchAll(/<document\s+id="([^"]+)"/g)]
            .map((match) => match[1]);
        console.log(`\n${ids.length} document(s): ${ids.join(', ')}`);

        // The final PDF is assembled when the last participant has signed. Asking a SENT
        // envelope for it is answered 403 "Wrong envelope status", so an envelope nobody
        // has signed yet - which is as far as an example can drive one - has none.
        if (status === 'COMPLETED') {
            // Binary responses resolve to an ArrayBuffer despite the generated File type.
            const { data } = await envelopes.downloadFinalPdf(envelopeUuid, ids[0], mailbox, false);
            const buffer = Buffer.from(data);
            await writeFile('envelope-final.pdf', buffer);
            console.log(`wrote envelope-final.pdf (${buffer.length} bytes)`);
        } else {
            console.log(`no final PDF while the envelope is ${status}: it is built on completion`);
        }
    } finally {
        if (process.env.DOCSTUDIO_KEEP_ENVELOPE) {
            console.log(`\nleaving ${envelopeUuid} in place (DOCSTUDIO_KEEP_ENVELOPE is set)`);
        } else {
            // A sent envelope is voided, not deleted, and the comment is mandatory.
            await envelopes.cancelEnvelopes(mailbox,
                { uuids: [envelopeUuid], comment: 'API client example cleanup' });
            await envelopes.recycleBin(true, mailbox, { uuids: [envelopeUuid] });

            const { data } = await envelopes.getEnvelopeByUuid(envelopeUuid, mailbox);
            console.log(`\ncleaned up: status ${data.envelope?.status}, `
                + `in recycle bin ${data.envelope?.deleted}`);
        }
    }
});
