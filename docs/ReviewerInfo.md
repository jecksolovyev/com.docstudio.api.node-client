# ReviewerInfo

Reviewer with the approval status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canOnlyComment** | **boolean** | True for a commentator who can only comment the document and does not participate in the mandatory approval; false for a reviewer | [optional] [default to undefined]
**email** | **string** | Reviewer email, if the reviewer was invited by email | [optional] [default to undefined]
**mailboxId** | **string** | Reviewer mailbox ID, null if the reviewer was invited by email and has no mailbox yet | [optional] [default to undefined]
**mailboxName** | **string** | Reviewer mailbox name | [optional] [default to undefined]
**name** | **string** | Reviewer name | [optional] [default to undefined]
**status** | **string** | Approval status of the reviewer | [optional] [default to undefined]

## Example

```typescript
import { ReviewerInfo } from '@docstudio/api-client';

const instance: ReviewerInfo = {
    canOnlyComment,
    email,
    mailboxId,
    mailboxName,
    name,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
