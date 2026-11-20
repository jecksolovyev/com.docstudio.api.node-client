# CreateAppToken

Create token request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expireAt** | **string** | Token expiration date (yyyy-MM-dd). The token expires at the end of this day (23:59:59 UTC) | [default to undefined]
**name** | **string** | Token name | [default to undefined]

## Example

```typescript
import { CreateAppToken } from '@docstudio/api-client';

const instance: CreateAppToken = {
    expireAt,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
