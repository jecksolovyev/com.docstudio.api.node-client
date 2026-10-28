# EnvelopeConfirmInviteDTO

Confirmed invitations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Invitation code | [default to undefined]
**roles** | [**Array&lt;EnvelopeConfirmInviteRoleDTO&gt;**](EnvelopeConfirmInviteRoleDTO.md) | Confirmed mailboxes to roles | [default to undefined]

## Example

```typescript
import { EnvelopeConfirmInviteDTO } from '@docstudio/api-client';

const instance: EnvelopeConfirmInviteDTO = {
    code,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
