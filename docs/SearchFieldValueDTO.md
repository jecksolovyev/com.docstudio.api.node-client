# SearchFieldValueDTO

Search by field value parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checked** | **boolean** | Field checked or not | [optional] [default to undefined]
**from** | **string** | Field date from value | [optional] [default to undefined]
**name** | **string** | Field name | [default to undefined]
**number** | **number** | Field number value | [optional] [default to undefined]
**to** | **string** | Field date to value | [optional] [default to undefined]
**type** | **string** | Ignored if not \&#39;strict\&#39; | [optional] [default to undefined]
**value** | **string** | Field string value | [optional] [default to undefined]

## Example

```typescript
import { SearchFieldValueDTO } from '@docstudio/api-client';

const instance: SearchFieldValueDTO = {
    checked,
    from,
    name,
    number,
    to,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
