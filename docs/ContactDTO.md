# ContactDTO

Contact to save

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | UUID of contact record | [optional] [default to undefined]
**mailboxUuid** | **string** | Contact Mailbox Uuid | [default to undefined]
**name** | **string** | Contact name, from 3 to 255 characters | [default to undefined]

## Example

```typescript
import { ContactDTO } from '@docstudio/api-client';

const instance: ContactDTO = {
    id,
    mailboxUuid,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
