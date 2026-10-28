# PaymentLinkRequest

QR pay field to get the payment link for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Document ID | [default to undefined]
**fieldName** | **string** | QR pay field name; for a field in a dynamic table: tableName/rowIndex/fieldName | [default to undefined]

## Example

```typescript
import { PaymentLinkRequest } from '@docstudio/api-client';

const instance: PaymentLinkRequest = {
    documentId,
    fieldName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
