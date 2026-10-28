# BillingProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedCurrencies** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**defaultCurrency** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**paymentProviders** | [**Array&lt;PaymentProviderInfo&gt;**](PaymentProviderInfo.md) |  | [optional] [default to undefined]
**uiTabs** | **{ [key: string]: boolean; }** |  | [optional] [default to undefined]

## Example

```typescript
import { BillingProperties } from '@docstudio/api-client';

const instance: BillingProperties = {
    allowedCurrencies,
    defaultCurrency,
    enabled,
    paymentProviders,
    uiTabs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
