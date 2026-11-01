// 02 - list the mailboxes this user can act in.
//
// Every mailbox-scoped endpoint needs one of these UUIDs, so this is the call that
// follows authentication in any real integration.
import { MailboxControllerApi } from '@docstudio/api-client';
import { authenticated, run } from './lib.mjs';

run(async () => {
    const mailboxes = new MailboxControllerApi(await authenticated());

    // GET /api/v1/mailbox. Paging is offset/limit and the response carries no "next"
    // flag - compare what you have against totalElements.
    const { data: page } = await mailboxes.getAllForUserWithPagination(
        undefined, undefined, undefined, undefined, 0, 25);
    console.log(`${page.numberOfElements} of ${page.totalElements} mailbox(es)`);
    for (const mailbox of page.data ?? []) {
        const flags = [mailbox.pinned && 'pinned', mailbox.invited && 'invited'].filter(Boolean);
        console.log(`  ${mailbox.mailboxUuid}  ${mailbox.name}`
            + `  [${mailbox.accountName}]${flags.length ? ` (${flags.join(', ')})` : ''}`);
    }

    // getMailboxesForUserView is GET /api/v1/mailbox/user-view, which builds the sidebar view
    // rather than listing everything. It answers [] unless mailboxesForAccount says how
    // many to show per account (1-5), so calling it bare looks like an empty account.
    const { data: sidebar } = await mailboxes.getMailboxesForUserView(undefined, 5);
    const { data: bare } = await mailboxes.getMailboxesForUserView();
    console.log(`\nuser-view, mailboxesForAccount=5: ${sidebar.length}`);
    console.log(`user-view, no arguments:          ${bare.length}`);
});
