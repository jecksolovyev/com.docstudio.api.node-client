# CommentPostDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** | Access level (\&#39;official\&#39; is not allowed here) | [default to undefined]
**documentId** | **string** | Document ID to create new comment thread | [default to undefined]
**sharedTo** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**text** | **string** | Text of the message | [default to undefined]
**xpath** | **string** | xPath to find selected area | [optional] [default to undefined]

## Example

```typescript
import { CommentPostDTO } from '@docstudio/api-client';

const instance: CommentPostDTO = {
    accessType,
    documentId,
    sharedTo,
    text,
    xpath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
