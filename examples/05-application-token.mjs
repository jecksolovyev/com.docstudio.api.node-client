// 05 - mint a long-lived application token, then revoke it.
//
// This is the credential a server-to-server integration should hold: log in with a
// password once, mint a token, and never send the password again. Set the result as
// DOCSTUDIO_TOKEN and the other examples use it.
//
// A tenant may have this feature switched off, in which case every call here answers
// 405 "Method disabled by configuration".
import { ApplicationTokenControllerApi } from '@docstudio/api-client';
import { authenticated, describe, run } from './lib.mjs';

run(async () => {
    const tokens = new ApplicationTokenControllerApi(await authenticated());

    const { data: existing } = await tokens.getUserTokens();
    console.log(`${existing.length} existing token(s)`);
    for (const token of existing) {
        console.log(`  ${token.id}  ${token.name}  expires ${token.expireAt}`
            + `  last used ${token.lastUsedAt ?? 'never'}`);
    }

    const expireAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    let created;
    try {
        ({ data: created } = await tokens.createToken({
            name: `api-client-example ${new Date().toISOString()}`,
            expireAt,
        }));
    } catch (error) {
        console.log(`\ncould not create a token: ${describe(error)}`);
        return;
    }

    // The token value is returned once, at creation, and never again.
    console.log(`\ncreated ${created.id} (${created.name})`);
    console.log(`token    ${String(created.token).slice(0, 8)}... (${String(created.token).length} chars)`);

    await tokens.revokeToken(created.id);
    console.log(`revoked  ${created.id}`);
});
