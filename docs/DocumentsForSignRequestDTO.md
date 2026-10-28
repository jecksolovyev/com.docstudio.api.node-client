# DocumentsForSignRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloudContainers** | **Set&lt;string&gt;** | Containers supported by a cloud-based signing service provider | [optional] [default to undefined]
**documents** | [**Array&lt;DocIdSignatureNameDTO&gt;**](DocIdSignatureNameDTO.md) |  | [optional] [default to undefined]
**signatureAlgorithm** | **string** | Check signature algorithm in advance | [optional] [default to undefined]
**signerInformation** | [**SignerInformation**](SignerInformation.md) | Alternative info about the signer if no certificate | [optional] [default to undefined]
**signingCertificate** | **string** | Certificate which will be used for signing | [optional] [default to undefined]
**tin** | **string** | Check Tax Individual Number in advance | [optional] [default to undefined]

## Example

```typescript
import { DocumentsForSignRequestDTO } from '@docstudio/api-client';

const instance: DocumentsForSignRequestDTO = {
    cloudContainers,
    documents,
    signatureAlgorithm,
    signerInformation,
    signingCertificate,
    tin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
