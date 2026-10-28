# DictionaryRecordValuesResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | UUID of dictionary record | [default to undefined]
**values** | **{ [key: string]: string; }** | List of dictionary record values {columnUuid: fieldValue} | [default to undefined]

## Example

```typescript
import { DictionaryRecordValuesResponseDTO } from '@docstudio/api-client';

const instance: DictionaryRecordValuesResponseDTO = {
    uuid,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
