// Smoke test against the live API, mirroring the Java client's CommonTest.
// Uses only the public settings endpoint, so it needs no credentials.
import assert from 'node:assert/strict';
import { MiscControllerApi, Configuration } from '../dist/index.js';

const api = new MiscControllerApi(new Configuration({
    basePath: process.env.DOCSTUDIO_API_BASE ?? 'https://api.docstudio.com',
}));

const { data } = await api.appSettings();
assert.equal(data.applicationName, 'DocStudio',
    `unexpected applicationName: ${data.applicationName}`);
console.log(`ok - reached ${data.applicationName}`);
