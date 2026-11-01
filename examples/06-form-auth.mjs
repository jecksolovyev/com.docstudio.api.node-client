// 06 - the form credential, for the signing surface.
//
// Not runnable: the API issues no form token. One reaches a signer inside the link that
// createNewForm returns (FormGet.link), and the signer's browser presents it. This file
// exists to show the wiring, which differs from the bearer credential in two ways.
import { Configuration } from '@docstudio/api-client';

const basePath = process.env.DOCSTUDIO_BASE_URL ?? 'https://api.docstudio.com';
const formToken = process.env.DOCSTUDIO_FORM_TOKEN ?? '<token from the form link>';

// The prefix is part of the value: the client sends apiKey verbatim as Authorization,
// where accessToken would have had "Bearer " prepended for it.
const form = new Configuration({ basePath, apiKey: `Form ${formToken}` });

// Both credentials travel in the same header, so a Configuration carries one or the other.
const bearer = new Configuration({ basePath, accessToken: '<access token>' });

console.log('form credential   ->', form.apiKey);
console.log('bearer credential ->', 'Bearer <access token>');
console.log(`
Nine operations accept only this credential, all of them on FormControllerApi:
getFormView, sendFormEnvelope, fillFormEnvelope, signFormEnvelope, approveFormEnvelope,
rejectFormEnvelope, getFormDocumentPrintVersion, getFormDocumentsForSign, forSignFile.

Eleven more accept either, among them downloadFinalPdf and signEnvelope, so the same code
serves a signed-in user and a form recipient by swapping the Configuration.`);

void bearer;
