# CallbackEnvelopeDataDTO

This DTO is sent as a callback payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expireDate** | **string** | The date of the envelope expiration | [optional] [default to undefined]
**label** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**mailbox** | **string** | Mailbox of the envelope | [default to undefined]
**receiveDate** | **string** | The date of the envelope was received | [default to undefined]
**sender** | **string** | Sender of the envelope | [default to undefined]
**status** | **string** | Status of the envelope | [default to undefined]
**subject** | **string** | Subject of the envelope | [default to undefined]
**template** | **string** | Template of the envelope | [default to undefined]
**uuid** | **string** | UUID of the envelope | [default to undefined]

## Example

```typescript
import { CallbackEnvelopeDataDTO } from '@docstudio/api-client';

const instance: CallbackEnvelopeDataDTO = {
    expireDate,
    label,
    mailbox,
    receiveDate,
    sender,
    status,
    subject,
    template,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
