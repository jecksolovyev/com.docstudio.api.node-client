# ExtEnvelopeDocumentSignaturesDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Envelope document uuid | [default to undefined]
**signatureName** | **string** | Envelope document signature name | [default to undefined]
**signatures** | [**Array&lt;ExtEnvelopeDocumentSignatureDTO&gt;**](ExtEnvelopeDocumentSignatureDTO.md) | Document signatures | [default to undefined]

## Example

```typescript
import { ExtEnvelopeDocumentSignaturesDTO } from '@docstudio/api-client';

const instance: ExtEnvelopeDocumentSignaturesDTO = {
    documentId,
    signatureName,
    signatures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
