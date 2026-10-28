# NumberToTextRequest

Amount, currency and language to spell out

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | ISO currency code; omit/empty to spell a plain number | [optional] [default to undefined]
**language** | **string** | Language code (en, uk, fr, lt, lv, et, es, nl) | [default to undefined]
**value** | **string** | Numeric amount to spell out | [default to undefined]

## Example

```typescript
import { NumberToTextRequest } from '@docstudio/api-client';

const instance: NumberToTextRequest = {
    currency,
    language,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
