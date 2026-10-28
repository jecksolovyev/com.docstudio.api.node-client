# FormUpdate

Form update request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envelopeCreationCallback** | [**FormUpdateEnvelopeCreationCallback**](FormUpdateEnvelopeCreationCallback.md) |  | [optional] [default to undefined]
**multiUse** | **boolean** | Form multi use (true) or single use (false, default) | [optional] [default to undefined]
**name** | **string** | Form name | [default to undefined]
**redirectUrl** | **string** | Form custom redirect url | [optional] [default to undefined]
**settings** | [**FormSettings**](FormSettings.md) | Form settings | [default to undefined]
**template** | [**FormTemplate**](FormTemplate.md) | Form template | [default to undefined]

## Example

```typescript
import { FormUpdate } from '@docstudio/api-client';

const instance: FormUpdate = {
    envelopeCreationCallback,
    multiUse,
    name,
    redirectUrl,
    settings,
    template,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
