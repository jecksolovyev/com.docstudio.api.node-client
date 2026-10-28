# ScenarioRecommendationLevel

Scenario recommendations for one access level

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folders** | [**Array&lt;ScenarioRecommendationItem&gt;**](ScenarioRecommendationItem.md) | Recommended root scenario folders ordered by name | [default to undefined]
**scenarios** | [**Array&lt;ScenarioRecommendationItem&gt;**](ScenarioRecommendationItem.md) | Recommended uncategorized scenarios ordered by name | [default to undefined]

## Example

```typescript
import { ScenarioRecommendationLevel } from '@docstudio/api-client';

const instance: ScenarioRecommendationLevel = {
    folders,
    scenarios,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
