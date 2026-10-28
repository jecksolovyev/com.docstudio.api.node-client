# QuickSendRecipientDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver** | **boolean** | Is recipient an approver? (copy by default) | [optional] [default to undefined]
**eInkSignature** | **boolean** | Apply eInk signature on file | [optional] [default to undefined]
**recipient** | **string** | UUID or email of recipient | [default to undefined]
**signer** | **boolean** | Is recipient a signer? (copy by default) | [optional] [default to undefined]

## Example

```typescript
import { QuickSendRecipientDTO } from '@docstudio/api-client';

const instance: QuickSendRecipientDTO = {
    approver,
    eInkSignature,
    recipient,
    signer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
