// 03 - read what is in a mailbox: templates, labels, envelopes.
//
// All three take the mailbox UUID as their first argument, which the client sends as the
// Mailbox header. Envelope search is a POST because the filter is a body, but it only reads.
import {
    TemplateControllerApi,
    LabelControllerApi,
    EnvelopeSearchControllerApi,
} from '@docstudio/api-client';
import { authenticated, mailboxUuid, run } from './lib.mjs';

run(async () => {
    const config = await authenticated();
    const mailbox = await mailboxUuid(config);
    console.log(`mailbox ${mailbox}\n`);

    const { data: templates } = await new TemplateControllerApi(config)
        .searchTemplates(mailbox, undefined, undefined, undefined, undefined, undefined,
            undefined, 0, 10);
    console.log(`templates: ${templates.numberOfElements} of ${templates.totalElements}`);
    for (const template of templates.data ?? []) {
        console.log(`  ${template.uuid}  ${template.name}`);
    }

    const { data: labels } = await new LabelControllerApi(config).getAllLabels(mailbox);
    console.log(`\nlabels: ${labels.length}`);
    for (const label of labels) {
        console.log(`  ${label.uuid}  ${label.name}`);
    }

    // An empty filter is valid and means "everything this mailbox can see".
    const { data: envelopes } = await new EnvelopeSearchControllerApi(config)
        .searchEnvelopes(mailbox, {}, 0, 10);
    console.log(`\nenvelopes: ${envelopes.numberOfElements} of ${envelopes.totalElements}`);
    for (const envelope of envelopes.data ?? []) {
        console.log(`  ${envelope.envelopeUuid}  ${String(envelope.status).padEnd(11)}`
            + `  ${envelope.completed ?? 0}/${envelope.total ?? 0} done`);
    }
});
