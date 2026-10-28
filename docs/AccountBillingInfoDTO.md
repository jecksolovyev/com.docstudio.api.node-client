# AccountBillingInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **number** | Balance | [optional] [default to undefined]
**counters** | [**Array&lt;AccountBillingCounterValueDTO&gt;**](AccountBillingCounterValueDTO.md) | Counters | [optional] [default to undefined]
**currency** | **string** | Currency | [optional] [default to undefined]
**events** | [**Array&lt;AccountBillingEventDTO&gt;**](AccountBillingEventDTO.md) | Events | [optional] [default to undefined]
**tariffs** | [**Array&lt;AccountBillingTariffInfoDTO&gt;**](AccountBillingTariffInfoDTO.md) | Tariffs | [optional] [default to undefined]

## Example

```typescript
import { AccountBillingInfoDTO } from '@docstudio/api-client';

const instance: AccountBillingInfoDTO = {
    balance,
    counters,
    currency,
    events,
    tariffs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
