# AccountDomainUpdate

Updated domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onlySsoLogin** | **boolean** | Allow only SSO login for this domain | [optional] [default to false]
**ssoIdProviderUuid** | **string** | Single Sign On Identity Provider id | [optional] [default to undefined]

## Example

```typescript
import { AccountDomainUpdate } from '@docstudio/api-client';

const instance: AccountDomainUpdate = {
    onlySsoLogin,
    ssoIdProviderUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
