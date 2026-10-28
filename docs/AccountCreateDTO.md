# AccountCreateDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreed** | **boolean** | Terms and Conditions agreed | [default to undefined]
**inn** | **string** | Account ITN | [default to undefined]
**mailboxes** | **Array&lt;string&gt;** | Mailboxes names. At least one mailbox name must be set. | [default to undefined]
**name** | **string** | Account name | [default to undefined]

## Example

```typescript
import { AccountCreateDTO } from '@docstudio/api-client';

const instance: AccountCreateDTO = {
    agreed,
    inn,
    mailboxes,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
