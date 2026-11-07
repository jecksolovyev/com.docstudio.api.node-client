# EnvelopeApprovalHistoryDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | [**Array&lt;ApproverDetailsDTO&gt;**](ApproverDetailsDTO.md) | Approvers with their statuses | [optional] [default to undefined]
**completed** | **boolean** | Is approval flow completed? | [optional] [default to undefined]
**locked** | **boolean** | If true, the document is locked for editing because approval of the current version has started | [optional] [default to undefined]
**mailboxUuid** | **string** | Mailbox UUID of approval initiator | [optional] [default to undefined]
**mandatoryApproval** | **boolean** | If true, every reviewer has to approve the same document version before the review can be finished | [optional] [default to undefined]
**urgent** | **boolean** | Is approval flow urgent? | [optional] [default to undefined]
**uuid** | **string** | Approval flow UUID | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeApprovalHistoryDTO } from '@docstudio/api-client';

const instance: EnvelopeApprovalHistoryDTO = {
    approvers,
    completed,
    locked,
    mailboxUuid,
    mandatoryApproval,
    urgent,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
