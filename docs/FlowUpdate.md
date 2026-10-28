# FlowUpdate

Single role recipient change within a sent envelope flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | Current role addressee (email or mailbox id), used as a stale-state guard | [default to undefined]
**id** | **string** | Role id from the envelope flow | [default to undefined]
**to** | **string** | New role addressee — valid email or mailbox id (UUID) | [default to undefined]

## Example

```typescript
import { FlowUpdate } from '@docstudio/api-client';

const instance: FlowUpdate = {
    from,
    id,
    to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
