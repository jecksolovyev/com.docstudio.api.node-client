# ReviewInfo

State of the current review round

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **boolean** | If true, the document is locked for editing because approval of the current version has started | [optional] [default to undefined]
**mandatoryApproval** | **boolean** | If true, every reviewer has to approve the same document version before the review can be finished | [optional] [default to undefined]
**reviewers** | [**Array&lt;ReviewerInfo&gt;**](ReviewerInfo.md) | Reviewers of the current review round with their approval statuses | [optional] [default to undefined]

## Example

```typescript
import { ReviewInfo } from '@docstudio/api-client';

const instance: ReviewInfo = {
    locked,
    mandatoryApproval,
    reviewers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
