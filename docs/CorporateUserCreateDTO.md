# CorporateUserCreateDTO

New user details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createMailbox** | **boolean** | Create user mailbox | [optional] [default to undefined]
**email** | **string** | E-mail of created user | [default to undefined]
**fields** | **{ [key: string]: any | null; }** | Additional user fields | [optional] [default to undefined]
**firstName** | **string** | First name of created user | [default to undefined]
**fullName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** | Last name of created user | [default to undefined]
**phone** | **string** | Phone number | [optional] [default to undefined]

## Example

```typescript
import { CorporateUserCreateDTO } from '@docstudio/api-client';

const instance: CorporateUserCreateDTO = {
    createMailbox,
    email,
    fields,
    firstName,
    fullName,
    lastName,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
