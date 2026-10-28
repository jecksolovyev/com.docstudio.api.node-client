# MailboxApprovalFlowGetDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | [**Array&lt;EnvelopeApproverGetDTO&gt;**](EnvelopeApproverGetDTO.md) |  | [default to undefined]
**flowType** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**sharedForAccount** | **boolean** |  | [optional] [default to undefined]
**sharedForMailboxes** | [**Set&lt;MailboxNameUuidDTO&gt;**](MailboxNameUuidDTO.md) |  | [optional] [default to undefined]
**uuid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { MailboxApprovalFlowGetDTO } from '@docstudio/api-client';

const instance: MailboxApprovalFlowGetDTO = {
    approvers,
    flowType,
    name,
    sharedForAccount,
    sharedForMailboxes,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
