# FormGet

Form get DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completedEnvelopes** | **number** | Completed envelopes count | [optional] [default to undefined]
**createdAt** | **string** | Create date | [optional] [default to undefined]
**envelopeCreationCallback** | [**CallbackDetailsWithIdDTO**](CallbackDetailsWithIdDTO.md) | Callback on envelope creation | [optional] [default to undefined]
**id** | **string** | Form UUID | [optional] [default to undefined]
**lastUsedAt** | **string** | Last used date | [optional] [default to undefined]
**link** | **string** | Form link | [optional] [default to undefined]
**modifiedAt** | **string** | Update date | [optional] [default to undefined]
**multiUse** | **boolean** | Form multi use (true) or single use (false, default) | [optional] [default to undefined]
**name** | **string** | Form name | [optional] [default to undefined]
**redirectUrl** | **string** | Form custom redirect url | [optional] [default to undefined]
**rejectedEnvelopes** | **number** | Rejected envelopes count | [optional] [default to undefined]
**settings** | [**FormSettings**](FormSettings.md) | Form settings | [optional] [default to undefined]
**template** | [**FormTemplate**](FormTemplate.md) | Form template | [optional] [default to undefined]
**totalEnvelopes** | **number** | Total envelopes count | [optional] [default to undefined]

## Example

```typescript
import { FormGet } from '@docstudio/api-client';

const instance: FormGet = {
    completedEnvelopes,
    createdAt,
    envelopeCreationCallback,
    id,
    lastUsedAt,
    link,
    modifiedAt,
    multiUse,
    name,
    redirectUrl,
    rejectedEnvelopes,
    settings,
    template,
    totalEnvelopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
