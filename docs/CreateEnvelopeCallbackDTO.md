# CreateEnvelopeCallbackDTO

Create envelope callback dto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**CallbackEnvelopeFilterDTO**](CallbackEnvelopeFilterDTO.md) | Envelope filter | [default to undefined]
**login** | **string** | Basic auth login | [optional] [default to undefined]
**password** | **string** | Basic auth password | [optional] [default to undefined]
**retries** | **number** | Retries count, 0 &lt; X &lt;&#x3D; 10 | [default to 3]
**successCode** | **number** | Http response success code | [optional] [default to 200]
**timeout** | **number** | Request timeout (ms), 100 &lt; X &lt; 60000 | [default to 5000]
**url** | **string** | Callback url | [default to undefined]

## Example

```typescript
import { CreateEnvelopeCallbackDTO } from '@docstudio/api-client';

const instance: CreateEnvelopeCallbackDTO = {
    filter,
    login,
    password,
    retries,
    successCode,
    timeout,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
