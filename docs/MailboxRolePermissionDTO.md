# MailboxRolePermissionDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**permissions** | **Set&lt;number&gt;** | Permissions for current user to mailbox relation | [optional] [default to undefined]
**roles** | **Set&lt;string&gt;** | Roles for current user to mailbox relation | [optional] [default to undefined]
**uuid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { MailboxRolePermissionDTO } from '@docstudio/api-client';

const instance: MailboxRolePermissionDTO = {
    name,
    permissions,
    roles,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
