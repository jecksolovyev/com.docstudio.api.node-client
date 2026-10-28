# FileLinkUploadInfo

Restrictions for the uploaded file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensions** | **Set&lt;string&gt;** | Allowed file extensions | [optional] [default to undefined]
**maxSizeBytes** | **number** | Largest file the link accepts, in bytes | [optional] [default to undefined]
**mimeTypes** | **Set&lt;string&gt;** | Allowed content types | [optional] [default to undefined]

## Example

```typescript
import { FileLinkUploadInfo } from '@docstudio/api-client';

const instance: FileLinkUploadInfo = {
    extensions,
    maxSizeBytes,
    mimeTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
