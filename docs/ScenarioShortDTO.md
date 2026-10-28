# ScenarioShortDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Scenario access level | [optional] [default to undefined]
**createdAt** | **string** | Scenario created date | [optional] [default to undefined]
**description** | **string** | Scenario description | [optional] [default to undefined]
**editable** | **boolean** | Scenario editable | [optional] [default to undefined]
**favorite** | **boolean** | Scenario marked as favorite | [optional] [default to undefined]
**mailboxUuid** | **string** | Scenario mailbox | [optional] [default to undefined]
**name** | **string** | Scenario name | [optional] [default to undefined]
**steps** | [**Array&lt;ScenarioShortStepDTO&gt;**](ScenarioShortStepDTO.md) | Scenario steps | [optional] [default to undefined]
**updatedAt** | **string** | Scenario update date | [optional] [default to undefined]
**uuid** | **string** | Scenario uuid | [optional] [default to undefined]

## Example

```typescript
import { ScenarioShortDTO } from '@docstudio/api-client';

const instance: ScenarioShortDTO = {
    access,
    createdAt,
    description,
    editable,
    favorite,
    mailboxUuid,
    name,
    steps,
    updatedAt,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
