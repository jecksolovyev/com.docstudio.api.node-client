# SearchApprovalsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator** | **Set&lt;string&gt;** | Envelope approval initiator uuids | [optional] [default to undefined]
**receiveDateFrom** | **string** | Receive date from | [optional] [default to undefined]
**receiveDateTo** | **string** | Receive date to | [optional] [default to undefined]
**scope** | **string** | Envelope approval scope | [default to undefined]
**sort** | **string** | Sort order, asc or desc | [optional] [default to undefined]
**status** | **Set&lt;string&gt;** | Approval statuses | [optional] [default to undefined]
**subject** | **string** | Envelope subject | [optional] [default to undefined]
**template** | **Set&lt;string&gt;** | Template uuids | [optional] [default to undefined]
**urgent** | **boolean** | Is approval urgent? | [optional] [default to undefined]

## Example

```typescript
import { SearchApprovalsDTO } from '@docstudio/api-client';

const instance: SearchApprovalsDTO = {
    initiator,
    receiveDateFrom,
    receiveDateTo,
    scope,
    sort,
    status,
    subject,
    template,
    urgent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
