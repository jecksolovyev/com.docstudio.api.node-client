# AccountAddress

Account billing address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | City area | [default to undefined]
**cityName** | **string** | City name | [optional] [default to undefined]
**country** | **string** | Country | [default to undefined]
**countryEn** | **string** | Country EN | [default to undefined]
**countryISO** | **string** | Country ISO code | [optional] [default to undefined]
**formattedAddress** | **string** | Formatted address | [default to undefined]
**houseNumber** | **string** | House number | [optional] [default to undefined]
**region** | **string** | Region | [default to undefined]
**regionEn** | **string** | Region EN | [default to undefined]
**street** | **string** | Street | [default to undefined]
**street2** | **string** | Street | [optional] [default to undefined]
**zip** | **string** | Zip code | [default to undefined]

## Example

```typescript
import { AccountAddress } from '@docstudio/api-client';

const instance: AccountAddress = {
    city,
    cityName,
    country,
    countryEn,
    countryISO,
    formattedAddress,
    houseNumber,
    region,
    regionEn,
    street,
    street2,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
