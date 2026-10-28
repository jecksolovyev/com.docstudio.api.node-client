# DocumentCommentsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | [**Array&lt;CommentThreadDTO&gt;**](CommentThreadDTO.md) | Active comment threads | [optional] [default to undefined]
**documentId** | **string** | Document ID | [optional] [default to undefined]
**resolved** | [**Array&lt;CommentThreadDTO&gt;**](CommentThreadDTO.md) | Resolved comment threads | [optional] [default to undefined]

## Example

```typescript
import { DocumentCommentsDTO } from '@docstudio/api-client';

const instance: DocumentCommentsDTO = {
    active,
    documentId,
    resolved,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
