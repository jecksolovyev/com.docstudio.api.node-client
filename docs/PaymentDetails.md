# PaymentDetails

Payment details to show on the checkout page

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Payment amount in UAH | [optional] [default to undefined]
**envelopeId** | **string** | Envelope ID; use it with the access code to download the envelope archive | [optional] [default to undefined]
**expireAt** | **string** | When the payment expires, version 3 only | [optional] [default to undefined]
**_function** | **string** | NBU QR code function, version 3 only | [optional] [default to undefined]
**iban** | **string** | Recipient IBAN | [optional] [default to undefined]
**itn** | **string** | Recipient tax identification number (EDRPOU or ITN) | [optional] [default to undefined]
**purpose** | **string** | Purpose of the payment | [optional] [default to undefined]
**qr** | **string** | QR code image in SVG format | [optional] [default to undefined]
**recipient** | **string** | Payment recipient name | [optional] [default to undefined]
**reference** | **string** | Payment reference, version 3 only | [optional] [default to undefined]
**version** | **number** | NBU QR code format version: 2 or 3 | [optional] [default to undefined]

## Example

```typescript
import { PaymentDetails } from '@docstudio/api-client';

const instance: PaymentDetails = {
    amount,
    envelopeId,
    expireAt,
    _function,
    iban,
    itn,
    purpose,
    qr,
    recipient,
    reference,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
