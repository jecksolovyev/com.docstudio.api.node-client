# FormUpdateEnvelopeCreationCallback

Callback on envelope creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**login** | **string** | Basic auth login | [optional] [default to undefined]
**password** | **string** | Basic auth password | [optional] [default to undefined]
**retries** | **number** | Retries count, 0 &lt; X &lt;&#x3D; 10 | [default to 3]
**successCode** | **number** | Http response success code | [optional] [default to 200]
**timeout** | **number** | Request timeout (ms), 100 &lt; X &lt; 60000 | [default to 5000]
**url** | **string** | Callback url | [default to undefined]

## Example

```typescript
import { FormUpdateEnvelopeCreationCallback } from '@docstudio/api-client';

const instance: FormUpdateEnvelopeCreationCallback = {
    id,
    login,
    password,
    retries,
    successCode,
    timeout,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
