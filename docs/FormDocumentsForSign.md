# FormDocumentsForSign

For sign data with envelope id and documents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**Array&lt;DocumentForSigningDTO&gt;**](DocumentForSigningDTO.md) | List of data for signing documents | [default to undefined]
**envelopeId** | **string** | Envelope ID | [default to undefined]

## Example

```typescript
import { FormDocumentsForSign } from '@docstudio/api-client';

const instance: FormDocumentsForSign = {
    documents,
    envelopeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
