# ScenarioShortStepDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ScenarioShortStepTemplateInfoDTO**](ScenarioShortStepTemplateInfoDTO.md) | Scenario step destination template info | [optional] [default to undefined]
**id** | **string** | Scenario step id | [default to undefined]
**name** | **string** | Scenario step name | [default to undefined]
**sendAfterCreation** | **boolean** | Send envelope right after creation | [optional] [default to undefined]
**source** | [**ScenarioShortStepTemplateInfoDTO**](ScenarioShortStepTemplateInfoDTO.md) | Scenario step source template info | [optional] [default to undefined]

## Example

```typescript
import { ScenarioShortStepDTO } from '@docstudio/api-client';

const instance: ScenarioShortStepDTO = {
    destination,
    id,
    name,
    sendAfterCreation,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
