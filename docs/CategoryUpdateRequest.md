# CategoryUpdateRequest

Category to save

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Access level | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**parentId** | **string** | Id of parent category | [optional] [default to undefined]
**type** | **string** | Category type | [default to undefined]

## Example

```typescript
import { CategoryUpdateRequest } from '@docstudio/api-client';

const instance: CategoryUpdateRequest = {
    access,
    description,
    name,
    parentId,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
