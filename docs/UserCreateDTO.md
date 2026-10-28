# UserCreateDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreed** | **boolean** | Agreed with terms of service | [default to undefined]
**companyName** | **string** | Company name | [optional] [default to undefined]
**dateLocale** | **string** | User locale for dates | [optional] [default to undefined]
**email** | **string** | Email | [default to undefined]
**firstName** | **string** | First name | [default to undefined]
**inn** | **string** |  | [optional] [default to undefined]
**lastName** | **string** | Last name | [default to undefined]
**locale** | **string** | User locale | [optional] [default to undefined]
**mailboxes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**password** | **string** | Password | [optional] [default to undefined]
**phone** | **string** | User phone | [optional] [default to undefined]
**timezone** | **string** | User preferred timezone | [optional] [default to undefined]

## Example

```typescript
import { UserCreateDTO } from '@docstudio/api-client';

const instance: UserCreateDTO = {
    agreed,
    companyName,
    dateLocale,
    email,
    firstName,
    inn,
    lastName,
    locale,
    mailboxes,
    password,
    phone,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
