# CommentPutDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageId** | **number** | Message ID to update (optional) | [optional] [default to undefined]
**text** | **string** | Text of the comment | [default to undefined]
**threadUuid** | **string** | Thread UUID to update | [default to undefined]

## Example

```typescript
import { CommentPutDTO } from '@docstudio/api-client';

const instance: CommentPutDTO = {
    messageId,
    text,
    threadUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
