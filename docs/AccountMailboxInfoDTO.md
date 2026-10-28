# AccountMailboxInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**Array&lt;AliasNameDTO&gt;**](AliasNameDTO.md) | Mailbox aliases | [optional] [default to undefined]
**groups** | [**Set&lt;NameUuidDTO&gt;**](NameUuidDTO.md) | Mailbox groups | [optional] [default to undefined]
**hideNameForAccounts** | **boolean** | Hide mailbox name/aliases from other accounts | [optional] [default to undefined]
**name** | **string** | Mailbox name | [default to undefined]
**system** | **boolean** |  | [optional] [default to undefined]
**usersCount** | **number** | Mailbox users count | [optional] [default to undefined]
**uuid** | **string** | Mailbox uuid | [default to undefined]

## Example

```typescript
import { AccountMailboxInfoDTO } from '@docstudio/api-client';

const instance: AccountMailboxInfoDTO = {
    aliases,
    groups,
    hideNameForAccounts,
    name,
    system,
    usersCount,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
