# CallbackDetailsWithIdDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authType** | **string** | Auth type | [optional] [default to undefined]
**id** | **string** | Envelope callback ID | [optional] [default to undefined]
**retries** | **number** | Retries count, 0 &lt; X &lt;&#x3D; 10 | [default to 3]
**successCode** | **number** | Http response success code | [optional] [default to 200]
**timeout** | **number** | Request timeout (ms), 100 &lt; X &lt; 60000 | [default to 5000]
**url** | **string** | Callback url | [default to undefined]

## Example

```typescript
import { CallbackDetailsWithIdDTO } from '@docstudio/api-client';

const instance: CallbackDetailsWithIdDTO = {
    authType,
    id,
    retries,
    successCode,
    timeout,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
