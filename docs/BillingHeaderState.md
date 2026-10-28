# BillingHeaderState

Account billing top-most counter name and value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counterValue** | **number** | Counter value | [optional] [default to undefined]
**headerName** | **string** | Counter header name, may contain \&#39;{}\&#39; for counter value | [optional] [default to undefined]

## Example

```typescript
import { BillingHeaderState } from '@docstudio/api-client';

const instance: BillingHeaderState = {
    counterValue,
    headerName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
