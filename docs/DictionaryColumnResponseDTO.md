# DictionaryColumnResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**longText** | **boolean** | Treat column value as long text, column value character limit will be extended to 5000, search not supported | [optional] [default to undefined]
**name** | **string** | Column name | [default to undefined]
**order** | **number** | Column order | [default to undefined]
**uuid** | **string** | Column uuid | [default to undefined]
**width** | **number** | Column width | [default to undefined]

## Example

```typescript
import { DictionaryColumnResponseDTO } from '@docstudio/api-client';

const instance: DictionaryColumnResponseDTO = {
    longText,
    name,
    order,
    uuid,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
