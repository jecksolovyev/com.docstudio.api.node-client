# QuickSendDTO

Send QuickSendDTO in BLOB format with Content-Type: application/json

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Message of envelope | [optional] [default to undefined]
**recipientExperience** | [**RecipientExperience**](RecipientExperience.md) |  | [optional] [default to undefined]
**recipients** | [**Array&lt;QuickSendRecipientDTO&gt;**](QuickSendRecipientDTO.md) |  | [default to undefined]
**signatureAlgorithm** | **string** | Signature algorithm | [optional] [default to undefined]
**signatureContainer** | **string** | Signature container | [optional] [default to undefined]
**subject** | **string** | Subject of envelope | [default to undefined]

## Example

```typescript
import { QuickSendDTO } from '@docstudio/api-client';

const instance: QuickSendDTO = {
    message,
    recipientExperience,
    recipients,
    signatureAlgorithm,
    signatureContainer,
    subject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
