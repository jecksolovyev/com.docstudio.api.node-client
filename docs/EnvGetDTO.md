# EnvGetDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalFlowUuid** | **string** | Approval flow UUID | [optional] [default to undefined]
**archived** | **boolean** | Is envelope archived? | [optional] [default to undefined]
**chainUuid** | **string** | Envelope chain UUID | [optional] [default to undefined]
**chainedByMe** | **boolean** | Envelope chained by requested user | [optional] [default to undefined]
**completed** | **number** | Number of participants who completed their processing | [optional] [default to undefined]
**createdAt** | **string** | Envelope creation date | [optional] [default to undefined]
**data** | **string** | Envelope XML | [optional] [default to undefined]
**deleted** | **boolean** | Is envelope in recycle bin? | [optional] [default to undefined]
**labels** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Envelope metadata | [optional] [default to undefined]
**receivedAt** | **string** | Date of receiving the envelope by the mailbox | [optional] [default to undefined]
**savedDocSignatures** | [**Array&lt;ExtEnvelopeDocumentSignaturesDTO&gt;**](ExtEnvelopeDocumentSignaturesDTO.md) |  | [optional] [default to undefined]
**sender** | [**EnvelopeSenderDTO**](EnvelopeSenderDTO.md) | Envelope sender info | [optional] [default to undefined]
**sentAt** | **string** | Envelope sending date | [optional] [default to undefined]
**shared** | **boolean** | Is envelope shared to the mailbox? (if the mailbox is not in the main flow) | [optional] [default to undefined]
**sharedTo** | [**Array&lt;EnvSharedToDTO&gt;**](EnvSharedToDTO.md) | Mailboxes the envelope shared with | [optional] [default to undefined]
**status** | **string** | Calculated status for mailbox | [optional] [default to undefined]
**total** | **number** | Total number of participants | [optional] [default to undefined]
**type** | **string** | Extended envelope type | [optional] [default to undefined]
**uuid** | **string** | UUID of envelope | [optional] [default to undefined]

## Example

```typescript
import { EnvGetDTO } from '@docstudio/api-client';

const instance: EnvGetDTO = {
    approvalFlowUuid,
    archived,
    chainUuid,
    chainedByMe,
    completed,
    createdAt,
    data,
    deleted,
    labels,
    metadata,
    receivedAt,
    savedDocSignatures,
    sender,
    sentAt,
    shared,
    sharedTo,
    status,
    total,
    type,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
