# ProcessStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**Array&lt;EnvelopeProcessingResult&gt;**](EnvelopeProcessingResult.md) | Processing details | [optional] [default to undefined]
**processed** | **number** | Processed envelopes in bulk | [optional] [default to undefined]
**successful** | **number** | Successfully processed envelopes in bulk | [optional] [default to undefined]
**total** | **number** | Total envelopes in bulk | [optional] [default to undefined]

## Example

```typescript
import { ProcessStatus } from '@docstudio/api-client';

const instance: ProcessStatus = {
    details,
    processed,
    successful,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
