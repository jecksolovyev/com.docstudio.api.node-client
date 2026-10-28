# EnvelopeToMailboxDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUUID** | **string** | Sender account UUID | [optional] [default to undefined]
**archived** | **boolean** | Is envelope archived? | [optional] [default to undefined]
**chainUuid** | **string** | Envelope chain UUID | [optional] [default to undefined]
**chainedByMe** | **boolean** | Envelope chained by requested user | [optional] [default to undefined]
**completed** | **number** | Number of participants processed | [optional] [default to undefined]
**createdAt** | **string** | Envelope creation date | [optional] [default to undefined]
**deleted** | **boolean** | Is envelope in recycle bin? | [optional] [default to undefined]
**envelopeUuid** | **string** |  | [optional] [default to undefined]
**expiredAfter** | **string** |  | [optional] [default to undefined]
**extraFields** | [**Array&lt;EnvelopeExtraFieldDTO&gt;**](EnvelopeExtraFieldDTO.md) | Data for extra columns | [optional] [default to undefined]
**formId** | **string** | UUID of the form from which the envelope was created | [optional] [default to undefined]
**invitationCode** | **string** | Invitation code, if acceptable | [optional] [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**mailboxName** | **string** | Mailbox name of sender | [optional] [default to undefined]
**mailboxUUID** | **string** | UUID of sender | [optional] [default to undefined]
**message** | **string** | Message of the envelope | [optional] [default to undefined]
**receivedAt** | **string** | Date of receiving the envelope by the mailbox | [optional] [default to undefined]
**seenAt** | **string** | Date-time it was seen by receiver | [optional] [default to undefined]
**sentAt** | **string** | The envelope sending date | [optional] [default to undefined]
**sentByMe** | **boolean** | Flag meaning \&#39;outbox\&#39;. Probably not necessary on UI | [optional] [default to undefined]
**shared** | **boolean** | Is envelope shared to the mailbox? (if the mailbox is not in the main flow) | [optional] [default to undefined]
**sharingForbidden** | **boolean** | Sharing by email is forbidden | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**subject** | **string** | Subject of the envelope | [optional] [default to undefined]
**templateName** | **string** | Envelope template name | [optional] [default to undefined]
**templateUuid** | **string** | Envelope template UUID | [optional] [default to undefined]
**templateVersion** | **string** | Envelope template version | [optional] [default to undefined]
**total** | **number** | Total number of participants | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeToMailboxDTO } from '@docstudio/api-client';

const instance: EnvelopeToMailboxDTO = {
    accountUUID,
    archived,
    chainUuid,
    chainedByMe,
    completed,
    createdAt,
    deleted,
    envelopeUuid,
    expiredAfter,
    extraFields,
    formId,
    invitationCode,
    labels,
    mailboxName,
    mailboxUUID,
    message,
    receivedAt,
    seenAt,
    sentAt,
    sentByMe,
    shared,
    sharingForbidden,
    status,
    subject,
    templateName,
    templateUuid,
    templateVersion,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
