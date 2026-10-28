# MailboxProfileDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invited** | **boolean** | User added via invitation | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**permissions** | **Set&lt;number&gt;** | Permissions for current user to mailbox relation | [optional] [default to undefined]
**system** | **boolean** |  | [optional] [default to undefined]
**uuid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { MailboxProfileDTO } from '@docstudio/api-client';

const instance: MailboxProfileDTO = {
    invited,
    name,
    permissions,
    system,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
