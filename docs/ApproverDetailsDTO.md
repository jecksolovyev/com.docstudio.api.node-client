# ApproverDetailsDTO

Participant of an approval flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canOnlyComment** | **boolean** | True for an editorial review commentator who can only comment the document; false for a reviewer | [optional] [default to undefined]
**comment** | **string** | Comment left with the decision | [optional] [default to undefined]
**completedAt** | **string** | When the participant made a decision | [optional] [default to undefined]
**createdAt** | **string** | When the participant was added to the flow | [optional] [default to undefined]
**email** | **string** | Email the participant was invited by | [optional] [default to undefined]
**mailboxName** | **string** | Current name of the participant mailbox | [optional] [default to undefined]
**mailboxUuid** | **string** | Mailbox id of the participant; null for an invited email without a mailbox yet | [optional] [default to undefined]
**name** | **string** | Display name of the participant within the flow | [optional] [default to undefined]
**order** | **number** | Step order of the participant in the flow | [optional] [default to undefined]
**seenAt** | **string** | When the participant first opened the envelope | [optional] [default to undefined]
**status** | **string** | Decision status of the participant | [optional] [default to undefined]

## Example

```typescript
import { ApproverDetailsDTO } from '@docstudio/api-client';

const instance: ApproverDetailsDTO = {
    canOnlyComment,
    comment,
    completedAt,
    createdAt,
    email,
    mailboxName,
    mailboxUuid,
    name,
    order,
    seenAt,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
