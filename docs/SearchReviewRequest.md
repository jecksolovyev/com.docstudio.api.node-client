# SearchReviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator** | **Set&lt;string&gt;** | Editorial review initiator uuids | [optional] [default to undefined]
**participant** | **Set&lt;string&gt;** | Editorial review participant uuids | [optional] [default to undefined]
**receiveDateFrom** | **string** | Receive date from | [optional] [default to undefined]
**receiveDateTo** | **string** | Receive date to | [optional] [default to undefined]
**scope** | **Set&lt;string&gt;** | Editorial review scopes | [default to undefined]
**sort** | **string** | Sort order, asc or desc | [optional] [default to undefined]
**status** | **Set&lt;string&gt;** | Envelope statuses | [optional] [default to undefined]
**subject** | **string** | Envelope subject | [optional] [default to undefined]
**template** | **Set&lt;string&gt;** | Template uuids | [optional] [default to undefined]

## Example

```typescript
import { SearchReviewRequest } from '@docstudio/api-client';

const instance: SearchReviewRequest = {
    initiator,
    participant,
    receiveDateFrom,
    receiveDateTo,
    scope,
    sort,
    status,
    subject,
    template,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
