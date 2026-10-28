# CallbackEnvelopeFilterDTO

Search parameters for callback envelopes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createDateFrom** | **string** | Creation date from | [optional] [default to undefined]
**createDateTo** | **string** | Creation date to | [optional] [default to undefined]
**expireDateFrom** | **string** | Expire date from | [optional] [default to undefined]
**expireDateTo** | **string** | Expire date to | [optional] [default to undefined]
**form** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**label** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**receiveDateFrom** | **string** | Receive date from | [optional] [default to undefined]
**receiveDateTo** | **string** | Receive date to | [optional] [default to undefined]
**sendDateFrom** | **string** | Envelope sending date from | [optional] [default to undefined]
**sendDateTo** | **string** | Envelope sending date to | [optional] [default to undefined]
**sender** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**subject** | **string** | Envelope subject | [optional] [default to undefined]
**template** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**templateVersion** | **Set&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { CallbackEnvelopeFilterDTO } from '@docstudio/api-client';

const instance: CallbackEnvelopeFilterDTO = {
    createDateFrom,
    createDateTo,
    expireDateFrom,
    expireDateTo,
    form,
    label,
    metadata,
    receiveDateFrom,
    receiveDateTo,
    sendDateFrom,
    sendDateTo,
    sender,
    status,
    subject,
    template,
    templateVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
