# MailboxUpdateRequestDTO

Mailbox update data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**Array&lt;AliasNameDTO&gt;**](AliasNameDTO.md) |  | [default to undefined]
**archived** | **boolean** | Mailbox archived | [default to undefined]
**hideNameForAccounts** | **boolean** | Hide mailbox name/aliases from other accounts | [default to undefined]
**name** | **string** | Mailbox name | [default to undefined]

## Example

```typescript
import { MailboxUpdateRequestDTO } from '@docstudio/api-client';

const instance: MailboxUpdateRequestDTO = {
    aliases,
    archived,
    hideNameForAccounts,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
