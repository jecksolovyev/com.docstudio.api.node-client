# EnvelopeSharedArchiveRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **Set&lt;string&gt;** |  | [default to undefined]
**envelopeUuids** | **Set&lt;string&gt;** |  | [default to undefined]
**excludeFiles** | **string** | Mask to exclude some files. с - for signature/processing Certificate, p - for Printable version, a - for Audit trail | [optional] [default to undefined]
**zipStructureName** | **string** | The name of pre-saved zip structure in the template | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeSharedArchiveRequestDTO } from '@docstudio/api-client';

const instance: EnvelopeSharedArchiveRequestDTO = {
    emails,
    envelopeUuids,
    excludeFiles,
    zipStructureName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
