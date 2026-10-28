# DictionaryColumnRequestDTO

New column info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**longText** | **boolean** | Treat column value as long text, column value character limit will be extended to 5000, search not supported | [optional] [default to false]
**name** | **string** | Dictionary column name | [default to undefined]
**order** | **number** | Dictionary column order | [default to undefined]
**width** | **number** | Dictionary column width | [optional] [default to undefined]

## Example

```typescript
import { DictionaryColumnRequestDTO } from '@docstudio/api-client';

const instance: DictionaryColumnRequestDTO = {
    longText,
    name,
    order,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
