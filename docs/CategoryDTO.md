# CategoryDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Access level | [optional] [default to undefined]
**createdAt** | **string** | Creation date | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**id** | **string** | Identifier. Shouldn\&#39;t be set for creation | [optional] [default to undefined]
**mailboxId** | **string** | Category creator\&#39;s mailbox | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**parentId** | **string** | Id of parent category | [optional] [default to undefined]
**type** | **string** | Category type | [default to undefined]

## Example

```typescript
import { CategoryDTO } from '@docstudio/api-client';

const instance: CategoryDTO = {
    access,
    createdAt,
    description,
    id,
    mailboxId,
    name,
    parentId,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
