# ScenarioRecommendationsResponse

Scenario recommendations grouped by access level

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**ScenarioRecommendationLevel**](ScenarioRecommendationLevel.md) | Recommendations for the account access level | [default to undefined]
**mailbox** | [**ScenarioRecommendationLevel**](ScenarioRecommendationLevel.md) | Recommendations for the mailbox access level | [default to undefined]
**official** | [**ScenarioRecommendationLevel**](ScenarioRecommendationLevel.md) | Recommendations for the official access level | [default to undefined]
**shared** | [**ScenarioRecommendationLevel**](ScenarioRecommendationLevel.md) | Recommendations shared with the mailbox | [default to undefined]

## Example

```typescript
import { ScenarioRecommendationsResponse } from '@docstudio/api-client';

const instance: ScenarioRecommendationsResponse = {
    account,
    mailbox,
    official,
    shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
