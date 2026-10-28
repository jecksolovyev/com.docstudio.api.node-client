# InvitedEnvelopeInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **number** | Number of roles completed processing of this envelope | [optional] [default to undefined]
**createdAt** | **string** | Envelope creation date | [optional] [default to undefined]
**expireAfter** | **string** | Envelope expiration date | [optional] [default to undefined]
**flow** | [**Array&lt;EnvelopeFlowInfoDTO&gt;**](EnvelopeFlowInfoDTO.md) | Detailed information about every role | [optional] [default to undefined]
**message** | **string** | Envelope message | [optional] [default to undefined]
**roleId** | **string** | The role user was invited to | [optional] [default to undefined]
**sender** | [**EnvelopeSenderDTO**](EnvelopeSenderDTO.md) | Envelope sender info | [optional] [default to undefined]
**subject** | **string** | Envelope subject | [optional] [default to undefined]
**templateName** | **string** | Name of the template of this envelope | [optional] [default to undefined]
**total** | **number** | Total number of roles assigned for processing of this envelope | [optional] [default to undefined]
**type** | **string** | Invitation type | [optional] [default to undefined]

## Example

```typescript
import { InvitedEnvelopeInfoDTO } from '@docstudio/api-client';

const instance: InvitedEnvelopeInfoDTO = {
    completed,
    createdAt,
    expireAfter,
    flow,
    message,
    roleId,
    sender,
    subject,
    templateName,
    total,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
