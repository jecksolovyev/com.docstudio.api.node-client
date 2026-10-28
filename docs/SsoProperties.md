# SsoProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to undefined]
**oauth** | [**OAuthProperties**](OAuthProperties.md) |  | [optional] [default to undefined]
**publicCompanies** | [**Array&lt;PublicCompany&gt;**](PublicCompany.md) |  | [optional] [default to undefined]
**saml** | [**SamlSsoProps**](SamlSsoProps.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SsoProperties } from '@docstudio/api-client';

const instance: SsoProperties = {
    enabled,
    oauth,
    publicCompanies,
    saml,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
