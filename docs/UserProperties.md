# UserProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowAutoDeposite** | **boolean** | Allow or deny users to set Auto Deposit Mailbox | [optional] [default to undefined]
**allowManageNotification** | **boolean** | Allow or deny users to manage notifications | [optional] [default to undefined]
**allowSelfDeletion** | **boolean** |  | [optional] [default to undefined]
**allowUserApplicationTokens** | **boolean** | Allow or deny user application tokens | [optional] [default to undefined]
**allowUsersToRegister** | **boolean** | Allow or deny users to register | [optional] [default to undefined]
**measurementSystem** | **string** |  | [optional] [default to undefined]
**passwordPolicy** | [**PasswordPolicy**](PasswordPolicy.md) |  | [optional] [default to undefined]
**profileFields** | [**Array&lt;UserField&gt;**](UserField.md) |  | [optional] [default to undefined]
**profilePhoneRequired** | **boolean** |  | [optional] [default to undefined]
**registerCompanyAccountDefault** | **boolean** | Company as default account on registration | [optional] [default to undefined]
**sessionPolicy** | [**SessionPolicy**](SessionPolicy.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserProperties } from '@docstudio/api-client';

const instance: UserProperties = {
    allowAutoDeposite,
    allowManageNotification,
    allowSelfDeletion,
    allowUserApplicationTokens,
    allowUsersToRegister,
    measurementSystem,
    passwordPolicy,
    profileFields,
    profilePhoneRequired,
    registerCompanyAccountDefault,
    sessionPolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
