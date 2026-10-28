# AccountDomainDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **string** | Domain account uuid | [optional] [default to undefined]
**createDate** | **string** | Domain creation date | [optional] [default to undefined]
**domain** | **string** | Domain name | [optional] [default to undefined]
**lastCheckDate** | **string** | Domain last check date | [optional] [default to undefined]
**onlySsoLogin** | **boolean** | Allow only SSO login for this domain | [optional] [default to undefined]
**ssoIdProvider** | [**NameUuidDTO**](NameUuidDTO.md) | SSO Identity Provider for domain | [optional] [default to undefined]
**status** | **string** | Domain status | [optional] [default to undefined]
**uuid** | **string** | Domain UUID | [optional] [default to undefined]
**verificationDate** | **string** | Domain verification date | [optional] [default to undefined]
**verifyInfo** | [**AccountDomainVerifyInfo**](AccountDomainVerifyInfo.md) | Domain verification info | [optional] [default to undefined]
**verifyMethod** | **string** | Domain verification method | [optional] [default to undefined]

## Example

```typescript
import { AccountDomainDTO } from '@docstudio/api-client';

const instance: AccountDomainDTO = {
    accountUuid,
    createDate,
    domain,
    lastCheckDate,
    onlySsoLogin,
    ssoIdProvider,
    status,
    uuid,
    verificationDate,
    verifyInfo,
    verifyMethod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
