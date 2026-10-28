# ScenarioStepDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **string** | Scenario condition XSLT map | [optional] [default to undefined]
**destination** | [**ScenarioStepTemplateInfoDTO**](ScenarioStepTemplateInfoDTO.md) | Scenario step destination template info | [default to undefined]
**id** | **string** | Scenario step id | [default to undefined]
**name** | **string** | Scenario step name | [default to undefined]
**sendAfterCreation** | **boolean** | Send envelope right after creation | [optional] [default to undefined]
**source** | [**ScenarioStepTemplateInfoDTO**](ScenarioStepTemplateInfoDTO.md) | Scenario step source template info | [optional] [default to undefined]
**xslt** | **string** | Scenario step XSLT map | [default to undefined]

## Example

```typescript
import { ScenarioStepDTO } from '@docstudio/api-client';

const instance: ScenarioStepDTO = {
    condition,
    destination,
    id,
    name,
    sendAfterCreation,
    source,
    xslt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
