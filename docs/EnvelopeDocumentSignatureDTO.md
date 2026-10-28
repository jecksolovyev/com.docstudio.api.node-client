# EnvelopeDocumentSignatureDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **string** | Optional X.509 certificate in base64 | [optional] [default to undefined]
**data** | **string** | Signature in base64 | [default to undefined]
**source** | **string** | Signature source type | [default to undefined]

## Example

```typescript
import { EnvelopeDocumentSignatureDTO } from '@docstudio/api-client';

const instance: EnvelopeDocumentSignatureDTO = {
    certificate,
    data,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
