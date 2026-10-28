# SendEnvByCodeDTO

Envelope to send

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreed** | **boolean** | Agreed with terms of service | [optional] [default to undefined]
**data** | **string** | XML data of envelope | [default to undefined]
**shareCode** | **string** | Shared code of template | [default to undefined]
**verificationCode** | **string** | Verification code | [default to undefined]

## Example

```typescript
import { SendEnvByCodeDTO } from '@docstudio/api-client';

const instance: SendEnvByCodeDTO = {
    agreed,
    data,
    shareCode,
    verificationCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
