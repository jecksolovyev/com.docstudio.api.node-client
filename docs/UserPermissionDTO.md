# UserPermissionDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**UserAuthorizationDTO**](UserAuthorizationDTO.md) |  | [optional] [default to undefined]
**corporateUser** | **boolean** | Is user corporate | [optional] [default to undefined]
**createdAt** | **string** | User creation date | [optional] [default to undefined]
**email** | **string** | User e-mail | [optional] [default to undefined]
**fields** | **{ [key: string]: any | null; }** | Additional user fields | [optional] [default to undefined]
**firstName** | **string** | First name of user | [optional] [default to undefined]
**lastName** | **string** | Last name of user | [optional] [default to undefined]
**phone** | **string** | Phone number | [optional] [default to undefined]
**status** | **string** | Current status of user | [optional] [default to undefined]
**uuid** | **string** | Unique identifier of user | [optional] [default to undefined]

## Example

```typescript
import { UserPermissionDTO } from '@docstudio/api-client';

const instance: UserPermissionDTO = {
    authorizations,
    corporateUser,
    createdAt,
    email,
    fields,
    firstName,
    lastName,
    phone,
    status,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
