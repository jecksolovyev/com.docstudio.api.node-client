# UserNotificationResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **string** | Account UUID for account-wide notifications | [optional] [default to undefined]
**code** | **number** | Notification code | [default to undefined]
**createdAt** | **string** | Notification date | [default to undefined]
**data** | **any** |  | [default to undefined]
**id** | **string** | Notification uuid | [default to undefined]
**mailboxUuid** | **string** | Mailbox UUID for mailbox-wide notifications | [optional] [default to undefined]
**type** | **string** | Notification type | [default to undefined]

## Example

```typescript
import { UserNotificationResponseDTO } from '@docstudio/api-client';

const instance: UserNotificationResponseDTO = {
    accountUuid,
    code,
    createdAt,
    data,
    id,
    mailboxUuid,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
