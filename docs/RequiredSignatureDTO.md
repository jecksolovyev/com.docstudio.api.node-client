# RequiredSignatureDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Signature field name | [optional] [default to undefined]
**qualifiedSignatureRequired** | **boolean** | Is qualified signature required? | [optional] [default to undefined]
**stampRequired** | **boolean** | Is stamp required for signature? | [optional] [default to undefined]
**tin** | **string** | Expected Tax Individual Number | [optional] [default to undefined]
**type** | **string** | Signature type | [optional] [default to undefined]

## Example

```typescript
import { RequiredSignatureDTO } from '@docstudio/api-client';

const instance: RequiredSignatureDTO = {
    name,
    qualifiedSignatureRequired,
    stampRequired,
    tin,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
