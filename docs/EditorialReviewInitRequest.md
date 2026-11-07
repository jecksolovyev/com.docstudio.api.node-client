# EditorialReviewInitRequest

Send EditorialReviewInitRequest in BLOB format with Content-Type: application/json

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandatoryApproval** | **boolean** | If true, the review can be finished only after every reviewer approved the same document version, and the document is locked for editing after the first approval | [optional] [default to undefined]
**message** | **string** | Message of envelope | [optional] [default to undefined]
**recipients** | [**Array&lt;EditorialReviewRecipient&gt;**](EditorialReviewRecipient.md) |  | [default to undefined]
**subject** | **string** | Subject of envelope | [default to undefined]

## Example

```typescript
import { EditorialReviewInitRequest } from '@docstudio/api-client';

const instance: EditorialReviewInitRequest = {
    mandatoryApproval,
    message,
    recipients,
    subject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
