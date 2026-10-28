# CommentAccessDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** | Access level (\&#39;official\&#39; is not allowed here) | [default to undefined]
**sharedTo** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**threadUuid** | **string** | UUID of comment thread | [default to undefined]

## Example

```typescript
import { CommentAccessDTO } from '@docstudio/api-client';

const instance: CommentAccessDTO = {
    accessType,
    sharedTo,
    threadUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
