# ReviewFlowReviewer

Mailbox invited to a running editorial review

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canOnlyComment** | **boolean** | True for a commentator who can only comment the document; omitted or false for a reviewer who can edit it | [optional] [default to undefined]
**name** | **string** | Display name of the reviewer within the review | [default to undefined]
**recipient** | **string** | Mailbox id or email of the reviewer | [default to undefined]

## Example

```typescript
import { ReviewFlowReviewer } from '@docstudio/api-client';

const instance: ReviewFlowReviewer = {
    canOnlyComment,
    name,
    recipient,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
