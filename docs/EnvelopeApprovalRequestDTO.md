# EnvelopeApprovalRequestDTO

Fill only flow UUID or list of approvers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | [**Array&lt;EnvelopeApproverDTO&gt;**](EnvelopeApproverDTO.md) | Set of approvers (Flow UUID must not be set) | [optional] [default to undefined]
**flowUuid** | **string** | UUID of saved approval flow (Approvers must not be set) | [optional] [default to undefined]
**urgent** | **boolean** | Is approval urgent? | [optional] [default to undefined]
**uuids** | **Set&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { EnvelopeApprovalRequestDTO } from '@docstudio/api-client';

const instance: EnvelopeApprovalRequestDTO = {
    approvers,
    flowUuid,
    urgent,
    uuids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
