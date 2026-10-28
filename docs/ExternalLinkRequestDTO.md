# ExternalLinkRequestDTO

Link info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Link access level, account-wide by default | [optional] [default to undefined]
**mailboxUuid** | **string** | Mailbox allowed to see link | [optional] [default to undefined]
**name** | **string** | Link name | [default to undefined]
**order** | **number** | Link order, last by default | [optional] [default to undefined]
**url** | **string** | Link url | [default to undefined]

## Example

```typescript
import { ExternalLinkRequestDTO } from '@docstudio/api-client';

const instance: ExternalLinkRequestDTO = {
    access,
    mailboxUuid,
    name,
    order,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
