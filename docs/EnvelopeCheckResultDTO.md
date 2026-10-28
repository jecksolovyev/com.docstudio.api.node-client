# EnvelopeCheckResultDTO

Envelope callback check result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed** | [**FailedEnvelopeCallbackFilterDTO**](FailedEnvelopeCallbackFilterDTO.md) | Envelope properties failed match | [optional] [default to undefined]
**passed** | **boolean** | Check passed | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeCheckResultDTO } from '@docstudio/api-client';

const instance: EnvelopeCheckResultDTO = {
    failed,
    passed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
