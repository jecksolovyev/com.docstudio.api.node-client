# MailboxApprovalFlowDTO

Flow to create

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | [**Array&lt;EnvelopeApproverDTO&gt;**](EnvelopeApproverDTO.md) |  | [default to undefined]
**flowType** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**sharedForAccount** | **boolean** |  | [optional] [default to undefined]
**sharedForMailboxes** | **Set&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { MailboxApprovalFlowDTO } from '@docstudio/api-client';

const instance: MailboxApprovalFlowDTO = {
    approvers,
    flowType,
    name,
    sharedForAccount,
    sharedForMailboxes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
