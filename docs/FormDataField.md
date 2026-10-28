# FormDataField

Form data field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Form data field name | [default to undefined]
**rows** | **Array&lt;Array&lt;FormDataField&gt;&gt;** |  | [optional] [default to undefined]
**value** | **string** | Form data field value | [optional] [default to undefined]
**valueId** | **string** | Field value id (for dictionary or attachments) | [optional] [default to undefined]
**values** | **Set&lt;string&gt;** | Form data field values | [optional] [default to undefined]

## Example

```typescript
import { FormDataField } from '@docstudio/api-client';

const instance: FormDataField = {
    name,
    rows,
    value,
    valueId,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
