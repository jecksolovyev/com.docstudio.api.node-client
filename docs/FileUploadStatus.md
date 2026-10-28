# FileUploadStatus

State of a one-time upload link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachmentId** | **string** | Attachment Id of the stored file, set once the state is used | [optional] [default to undefined]
**filename** | **string** | Stored file name | [optional] [default to undefined]
**sizeBytes** | **number** | Stored size in bytes | [optional] [default to undefined]
**state** | **string** | ready while waiting for the file, used once it is stored, expired when the link timed out | [optional] [default to undefined]

## Example

```typescript
import { FileUploadStatus } from '@docstudio/api-client';

const instance: FileUploadStatus = {
    attachmentId,
    filename,
    sizeBytes,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
