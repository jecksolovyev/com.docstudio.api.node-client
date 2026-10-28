# EnvelopeFlowInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **boolean** | Role completion status | [optional] [default to undefined]
**delegatedTo** | **string** | Email of delegate (for invitation) | [optional] [default to undefined]
**mailboxName** | **string** | Name of the mailbox role assigned to | [optional] [default to undefined]
**name** | **string** | Role name | [optional] [default to undefined]
**order** | **number** | Role order as defined in template | [optional] [default to undefined]
**roleId** | **string** | Role id | [optional] [default to undefined]
**type** | **string** | Role type | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeFlowInfoDTO } from '@docstudio/api-client';

const instance: EnvelopeFlowInfoDTO = {
    completed,
    delegatedTo,
    mailboxName,
    name,
    order,
    roleId,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
