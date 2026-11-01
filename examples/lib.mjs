// Shared setup, so each numbered example contains only the calls it demonstrates.
import {
    AuthenticationControllerApi,
    MailboxControllerApi,
    Configuration,
} from '@docstudio/api-client';

export const DEFAULT_BASE_PATH = 'https://api.docstudio.com';

export function basePath() {
    const value = process.env.DOCSTUDIO_BASE_URL;
    return value ? value.replace(/\/+$/, '') : DEFAULT_BASE_PATH;
}

function required(name, hint) {
    const value = process.env[name];
    if (!value) throw new Error(`${name} is not set - ${hint}`);
    return value;
}

// An application token is what a server-to-server integration should hold; email and
// password are the fallback so the examples run before you have minted one.
export async function accessToken() {
    if (process.env.DOCSTUDIO_TOKEN) return process.env.DOCSTUDIO_TOKEN;

    const login = required('DOCSTUDIO_EMAIL', 'set it, or set DOCSTUDIO_TOKEN instead');
    const password = required('DOCSTUDIO_PASSWORD', 'needed alongside DOCSTUDIO_EMAIL');

    const auth = new AuthenticationControllerApi(new Configuration({ basePath: basePath() }));
    const { data } = await auth.login({ login, password });
    if (!data.token) throw new Error('login succeeded but returned no token');
    return data.token;
}

export async function authenticated() {
    return new Configuration({ basePath: basePath(), accessToken: await accessToken() });
}

// Most endpoints are mailbox-scoped and reject the call without this header.
export async function mailboxUuid(config) {
    if (process.env.DOCSTUDIO_MAILBOX) return process.env.DOCSTUDIO_MAILBOX;

    // GET /api/v1/mailbox, not getMailboxesForUserView: the user-view endpoint behind that call
    // answers [] unless it is given mailboxesForAccount, so a bare call to it reads as
    // an account with no mailboxes at all. Example 02 shows both.
    const { data: page } = await new MailboxControllerApi(config)
        .getAllForUserWithPagination(undefined, undefined, undefined, undefined, 0, 1);
    if (!page.data?.length) throw new Error('this account has no mailboxes');
    return page.data[0].mailboxUuid;
}

// An axios error stringifies to the entire request; the status and body are the useful part.
export function describe(error) {
    const response = error?.response;
    if (!response) return error?.message ?? String(error);
    // An operation declaring a binary body is read as an ArrayBuffer, and that applies to
    // its error bodies too: the JSON arrives as bytes and would print as a Buffer dump.
    const data = response.data instanceof ArrayBuffer || Buffer.isBuffer(response.data)
        ? Buffer.from(response.data).toString('utf8')
        : response.data;
    const body = typeof data === 'string' ? data : JSON.stringify(data);
    return `HTTP ${response.status} - ${body}`;
}

export function run(main) {
    main().catch((error) => {
        console.error(describe(error));
        process.exitCode = 1;
    });
}
