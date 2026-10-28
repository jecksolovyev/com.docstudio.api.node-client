# GetEnvelopeInviteInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Email for which invitation was created | [optional] [default to undefined]
**envelopeUuid** | **string** | UUID of envelope | [optional] [default to undefined]
**ssoEnabled** | **boolean** | Is SSO enabled for user | [optional] [default to undefined]
**status** | **string** | User status | [optional] [default to undefined]

## Example

```typescript
import { GetEnvelopeInviteInfoDTO } from '@docstudio/api-client';

const instance: GetEnvelopeInviteInfoDTO = {
    email,
    envelopeUuid,
    ssoEnabled,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
