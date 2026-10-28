# MailboxDelegationDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoDelegateFrom** | **string** | Auto delegate from date in \&#39;ISO-8601\&#39; format | [optional] [default to undefined]
**autoDelegateUntil** | **string** | Auto delegate until date in \&#39;ISO-8601\&#39; format | [optional] [default to undefined]
**autoDelegationEnabled** | **boolean** | Auto delegate is enabled | [optional] [default to undefined]
**delegateTo** | **string** | Auto delegate envelopes to mailbox | [optional] [default to undefined]

## Example

```typescript
import { MailboxDelegationDTO } from '@docstudio/api-client';

const instance: MailboxDelegationDTO = {
    autoDelegateFrom,
    autoDelegateUntil,
    autoDelegationEnabled,
    delegateTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
