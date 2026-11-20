# UsertourToken

Usertour identity verification token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **string** | JWT (HS256) signed with the Usertour environment signing secret, subject is the user id | [optional] [default to undefined]

## Example

```typescript
import { UsertourToken } from '@docstudio/api-client';

const instance: UsertourToken = {
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
