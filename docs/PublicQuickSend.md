# PublicQuickSend

Send PublicQuickSend in BLOB format with Content-Type: application/json

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreed** | **boolean** | Agreed with terms of the service | [optional] [default to undefined]
**signer** | **string** | Email of signer | [default to undefined]
**verificationCode** | **string** | Verification code | [default to undefined]

## Example

```typescript
import { PublicQuickSend } from '@docstudio/api-client';

const instance: PublicQuickSend = {
    agreed,
    signer,
    verificationCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
