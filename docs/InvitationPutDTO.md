# InvitationPutDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**PermissionsWithUuidDTO**](PermissionsWithUuidDTO.md) | Account roles and permissions | [default to undefined]
**firstName** | **string** | First name of invited user | [optional] [default to undefined]
**lastName** | **string** | Last name of invited user | [optional] [default to undefined]
**mailboxes** | [**Array&lt;PermissionsWithUuidDTO&gt;**](PermissionsWithUuidDTO.md) | Mailboxes roles and permissions | [optional] [default to undefined]

## Example

```typescript
import { InvitationPutDTO } from '@docstudio/api-client';

const instance: InvitationPutDTO = {
    account,
    firstName,
    lastName,
    mailboxes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
