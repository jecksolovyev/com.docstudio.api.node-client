# FileLinkInfo

What a one-time file link is for and whether it can still be used

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentType** | **string** | Content type | [optional] [default to undefined]
**direction** | **string** | download or upload | [optional] [default to undefined]
**error** | **string** | Why the file could not be prepared, when the state is failed | [optional] [default to undefined]
**expiresAt** | **string** | When the link stops working | [optional] [default to undefined]
**filename** | **string** | File name | [optional] [default to undefined]
**sizeBytes** | **number** | Size in bytes | [optional] [default to undefined]
**state** | **string** | preparing, ready, uploading, used, failed, expired or not_found | [optional] [default to undefined]
**upload** | [**FileLinkUploadInfo**](FileLinkUploadInfo.md) | What an uploaded file may be, for upload links only | [optional] [default to undefined]

## Example

```typescript
import { FileLinkInfo } from '@docstudio/api-client';

const instance: FileLinkInfo = {
    contentType,
    direction,
    error,
    expiresAt,
    filename,
    sizeBytes,
    state,
    upload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
