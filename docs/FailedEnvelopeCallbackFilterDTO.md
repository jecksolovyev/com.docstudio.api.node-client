# FailedEnvelopeCallbackFilterDTO

Envelope properties distinct with filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createDate** | **string** | Creation date | [optional] [default to undefined]
**expireDate** | **string** | Expire date | [optional] [default to undefined]
**labels** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Envelope metadata | [optional] [default to undefined]
**receiveDate** | **string** | Receive date | [optional] [default to undefined]
**recipient** | **string** | Envelope recipient mailbox Id | [optional] [default to undefined]
**sender** | **string** | Envelope sender UUID | [optional] [default to undefined]
**sentDate** | **string** | Sent date | [optional] [default to undefined]
**status** | **string** | Envelope status | [optional] [default to undefined]
**subject** | **string** | Envelope subject | [optional] [default to undefined]
**template** | **string** | Template UUID | [optional] [default to undefined]
**templateVersion** | **string** | Template version Id | [optional] [default to undefined]
**wrongForm** | **boolean** | Form does not match or empty | [optional] [default to undefined]

## Example

```typescript
import { FailedEnvelopeCallbackFilterDTO } from '@docstudio/api-client';

const instance: FailedEnvelopeCallbackFilterDTO = {
    createDate,
    expireDate,
    labels,
    metadata,
    receiveDate,
    recipient,
    sender,
    sentDate,
    status,
    subject,
    template,
    templateVersion,
    wrongForm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
