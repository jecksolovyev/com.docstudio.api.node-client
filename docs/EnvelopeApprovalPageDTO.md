# EnvelopeApprovalPageDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;EnvApprovalSearchResultDTO&gt;**](EnvApprovalSearchResultDTO.md) | Data records | [optional] [default to undefined]
**initiators** | [**Set&lt;EnvelopeSenderDTO&gt;**](EnvelopeSenderDTO.md) | Approval initiators | [optional] [default to undefined]
**numberOfElements** | **number** | Fetched records count | [optional] [default to undefined]
**sizeRequested** | **number** | Requested size | [optional] [default to undefined]
**templates** | [**Set&lt;EnvelopeTemplateInfoDTO&gt;**](EnvelopeTemplateInfoDTO.md) | Templates | [optional] [default to undefined]
**totalElements** | **number** | Total elements by request | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeApprovalPageDTO } from '@docstudio/api-client';

const instance: EnvelopeApprovalPageDTO = {
    data,
    initiators,
    numberOfElements,
    sizeRequested,
    templates,
    totalElements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
