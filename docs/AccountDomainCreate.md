# AccountDomainCreate

New domain info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Domain name | [default to undefined]
**onlySsoLogin** | **boolean** | Allow only SSO login for this domain | [optional] [default to false]
**ssoIdProviderUuid** | **string** | Single Sign On Identity Provider id | [optional] [default to undefined]

## Example

```typescript
import { AccountDomainCreate } from '@docstudio/api-client';

const instance: AccountDomainCreate = {
    domain,
    onlySsoLogin,
    ssoIdProviderUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
