# ArchiveAttachmentInfo

Returns the information about the single file from the archive that can be displayed on UI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **string** |  | [optional] [default to undefined]
**fileName** | **string** |  | [optional] [default to undefined]
**mimeType** | **string** |  | [optional] [default to undefined]
**pdfPageSizes** | [**PdfPageSizes**](PdfPageSizes.md) |  | [optional] [default to undefined]
**signers** | [**Array&lt;ExternalSignerInfo&gt;**](ExternalSignerInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ArchiveAttachmentInfo } from '@docstudio/api-client';

const instance: ArchiveAttachmentInfo = {
    content,
    fileName,
    mimeType,
    pdfPageSizes,
    signers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
