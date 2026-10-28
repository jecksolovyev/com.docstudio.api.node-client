# DocumentForSigningDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binaryFileName** | **string** | Binary file name | [optional] [default to undefined]
**binaryHash** | **string** | Binary file hash for signing | [optional] [default to undefined]
**documentId** | **string** | ID of document | [optional] [default to undefined]
**expectedSignatureContainer** | **string** | Expected signature container for \&#39;sign\&#39; endpoint | [optional] [default to undefined]
**signatureAlgorithm** | **string** | Signature algorithm | [optional] [default to undefined]
**signatureContainer** | **string** | Signature container | [optional] [default to undefined]
**signatures** | [**Array&lt;RequiredSignatureDTO&gt;**](RequiredSignatureDTO.md) | Signatures | [optional] [default to undefined]
**xadesFiles** | [**Array&lt;XadesFile&gt;**](XadesFile.md) | Files to generate XADES | [optional] [default to undefined]
**xmlHash** | **string** | XML hash for signing | [optional] [default to undefined]
**xmlName** | **string** | XML file name | [optional] [default to undefined]

## Example

```typescript
import { DocumentForSigningDTO } from '@docstudio/api-client';

const instance: DocumentForSigningDTO = {
    binaryFileName,
    binaryHash,
    documentId,
    expectedSignatureContainer,
    signatureAlgorithm,
    signatureContainer,
    signatures,
    xadesFiles,
    xmlHash,
    xmlName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
