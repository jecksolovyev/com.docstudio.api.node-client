# MailboxPatchRequestDTO

Mailbox update data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**Array&lt;AliasNameDTO&gt;**](AliasNameDTO.md) | Mailbox aliases | [optional] [default to undefined]
**archived** | **boolean** | Mailbox archived | [optional] [default to undefined]
**hideNameForAccounts** | **boolean** | Hide mailbox name/aliases from other accounts | [optional] [default to undefined]
**name** | **string** | Mailbox name | [optional] [default to undefined]

## Example

```typescript
import { MailboxPatchRequestDTO } from '@docstudio/api-client';

const instance: MailboxPatchRequestDTO = {
    aliases,
    archived,
    hideNameForAccounts,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
