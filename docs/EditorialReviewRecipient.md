# EditorialReviewRecipient

Participant of an editorial review

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canOnlyComment** | **boolean** | True for a commentator who can only comment the document; omitted or false for a reviewer who can edit it | [optional] [default to undefined]
**recipient** | **string** | UUID or email of recipient | [default to undefined]

## Example

```typescript
import { EditorialReviewRecipient } from '@docstudio/api-client';

const instance: EditorialReviewRecipient = {
    canOnlyComment,
    recipient,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
