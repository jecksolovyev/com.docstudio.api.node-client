# ScenarioDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Scenario access level | [default to undefined]
**addToChain** | **boolean** | Should envelopes be chained? | [optional] [default to undefined]
**description** | **string** | Scenario description | [default to undefined]
**mailboxUuid** | **string** | Scenario mailbox | [optional] [default to undefined]
**name** | **string** | Scenario name | [default to undefined]
**sharedTo** | **Set&lt;string&gt;** | Mailboxes list, which have access to scenario | [optional] [default to undefined]
**steps** | [**Array&lt;ScenarioStepDTO&gt;**](ScenarioStepDTO.md) | Scenario steps | [default to undefined]
**uuid** | **string** | Scenario uuid | [optional] [default to undefined]

## Example

```typescript
import { ScenarioDTO } from '@docstudio/api-client';

const instance: ScenarioDTO = {
    access,
    addToChain,
    description,
    mailboxUuid,
    name,
    sharedTo,
    steps,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
