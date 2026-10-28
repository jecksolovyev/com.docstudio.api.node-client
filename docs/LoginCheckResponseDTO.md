# LoginCheckResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canLoginWithCode** | **boolean** | User can be logged in by invitation code | [optional] [default to undefined]
**email** | **string** | Invited user email | [optional] [default to undefined]
**existingUser** | **boolean** | Is user already created in the service? | [optional] [default to undefined]

## Example

```typescript
import { LoginCheckResponseDTO } from '@docstudio/api-client';

const instance: LoginCheckResponseDTO = {
    canLoginWithCode,
    email,
    existingUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
