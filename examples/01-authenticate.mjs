// 01 - authenticate and read your own profile.
//
// getProfile takes no parameters and no mailbox, so it is the shortest proof a token works.
import { UserControllerApi } from '@docstudio/api-client';
import { authenticated, basePath, run } from './lib.mjs';

run(async () => {
    console.log(`base path: ${basePath()}`);

    const config = await authenticated();
    const { data: profile } = await new UserControllerApi(config).getProfile();

    console.log(`signed in as ${profile.firstName} ${profile.lastName} <${profile.email}>`);
    console.log(`uuid        ${profile.uuid}`);
    console.log(`locale      ${profile.locale}, timezone ${profile.timezone}`);
    console.log(`accounts    ${profile.accounts?.length ?? 0}`);
});
