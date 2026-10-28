# AccountPoliciesDTO

Policies map

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationPolicy** | [**AuthenticationPolicy**](AuthenticationPolicy.md) | Authentication policy | [default to undefined]
**passwordPolicy** | [**PasswordPolicy**](PasswordPolicy.md) | Password policy | [default to undefined]
**sessionPolicy** | [**SessionPolicy**](SessionPolicy.md) | Session policy | [default to undefined]

## Example

```typescript
import { AccountPoliciesDTO } from '@docstudio/api-client';

const instance: AccountPoliciesDTO = {
    authenticationPolicy,
    passwordPolicy,
    sessionPolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
