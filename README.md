# DocStudio API client for Node.js

TypeScript client for the [DocStudio API](https://api.docstudio.com), generated from the
server's OpenAPI document with
[openapi-generator](https://openapi-generator.tech) (`typescript-axios`).

- API version: `R168.18`
    - Generator version: `7.24.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen`

## Requirements

`package.json` and the tsconfigs are hand-maintained; the generator's copies
are discarded.

Node.js 18 or later. `axios` is the only runtime dependency; the package ships CommonJS
and ES module builds plus TypeScript declarations.

## Installation

```shell
npm install @docstudio/api-client
```

## Getting started

```ts
import {
    AuthenticationControllerApi,
    MailboxControllerApi,
    Configuration,
} from '@docstudio/api-client';

const basePath = 'https://api.docstudio.com';

const auth = new AuthenticationControllerApi(new Configuration({ basePath }));
const { data: session } = await auth.login({ login: email, password });

const config = new Configuration({ basePath, accessToken: session.token });
const mailboxes = new MailboxControllerApi(config);

const { data } = await mailboxes.getAllForUser();
```

Most endpoints are scoped to a mailbox and take its UUID as the `mailbox` argument,
which the client sends as the `Mailbox` header.

## Authentication

Set exactly one credential per `Configuration`.

```ts
// user API - bearer token
new Configuration({ basePath, accessToken: token });

// form API - form token, with the prefix included in the value
new Configuration({ basePath, apiKey: `Form ${formToken}` });
```

Both credentials travel in the `Authorization` header. A handful of endpoints accept
either; if both are set the form token is applied last and wins, which is why a
`Configuration` should carry only one.

## Binary responses

Endpoints that return a file resolve to an `ArrayBuffer`. The client sets
`responseType` for them, because axios would otherwise decode the body as UTF-8 text and
corrupt it. Note the generated signature says `File` - that is the generator's label for
a binary body, not the runtime type.

```ts
const { data } = await envelopes.downloadFinalPdf(id, documentId, mailbox);
await writeFile('envelope.pdf', Buffer.from(data as unknown as ArrayBuffer));
```

## Releasing

This package is generated from the DocStudio OpenAPI document; the API version above is
the API release it was generated from. Releases are cut by the DocStudio team from
internal tooling.

## License

MIT
