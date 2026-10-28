# User2MailboxDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountName** | **string** |  | [optional] [default to undefined]
**accountUuid** | **string** |  | [optional] [default to undefined]
**invited** | **boolean** |  | [optional] [default to undefined]
**mailboxUuid** | **string** |  | [optional] [default to undefined]
**name** | **string** | Mailbox name | [optional] [default to undefined]
**permissions** | **Set&lt;number&gt;** | Permissions for current user to mailbox relation | [optional] [default to undefined]
**pinned** | **boolean** |  | [optional] [default to undefined]
**system** | **boolean** |  | [optional] [default to undefined]
**userUuid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { User2MailboxDTO } from '@docstudio/api-client';

const instance: User2MailboxDTO = {
    accountName,
    accountUuid,
    invited,
    mailboxUuid,
    name,
    permissions,
    pinned,
    system,
    userUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
