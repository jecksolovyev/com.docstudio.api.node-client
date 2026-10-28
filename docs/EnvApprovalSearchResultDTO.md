# EnvApprovalSearchResultDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **string** | Mailbox account UUID of approval initiator | [optional] [default to undefined]
**approvalFlowUuid** | **string** | UUID of approval flow | [optional] [default to undefined]
**completed** | **number** | Number of participants processed | [optional] [default to undefined]
**createdAt** | **string** | The date the approval was created | [optional] [default to undefined]
**envelopeUuid** | **string** | The envelope UUID | [optional] [default to undefined]
**expiredAfter** | **string** | The date the envelope will be expired | [optional] [default to undefined]
**lastUpdatedAt** | **string** | Date and time of the last update | [optional] [default to undefined]
**mailboxName** | **string** | Mailbox name of approval initiator | [optional] [default to undefined]
**mailboxUUID** | **string** | Mailbox UUID of approval initiator | [optional] [default to undefined]
**message** | **string** | The envelope message | [optional] [default to undefined]
**seenAt** | **string** | Date-time it was seen by approver | [optional] [default to undefined]
**status** | **string** | Status of approval | [optional] [default to undefined]
**subject** | **string** | The envelope subject | [optional] [default to undefined]
**templateName** | **string** | Envelope template name | [optional] [default to undefined]
**templateUuid** | **string** | Envelope template UUID | [optional] [default to undefined]
**total** | **number** | Total number of participants | [optional] [default to undefined]
**urgent** | **boolean** | Is approval flow urgent? | [optional] [default to undefined]

## Example

```typescript
import { EnvApprovalSearchResultDTO } from '@docstudio/api-client';

const instance: EnvApprovalSearchResultDTO = {
    accountUuid,
    approvalFlowUuid,
    completed,
    createdAt,
    envelopeUuid,
    expiredAfter,
    lastUpdatedAt,
    mailboxName,
    mailboxUUID,
    message,
    seenAt,
    status,
    subject,
    templateName,
    templateUuid,
    total,
    urgent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
