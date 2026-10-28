# GroupInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | Created at | [optional] [default to undefined]
**mailboxes** | [**Set&lt;NameUuidDTO&gt;**](NameUuidDTO.md) | Group mailboxes | [optional] [default to undefined]
**modifiedAt** | **string** | Modified at | [optional] [default to undefined]
**name** | **string** | Group name | [optional] [default to undefined]
**uuid** | **string** | Group id | [optional] [default to undefined]

## Example

```typescript
import { GroupInfoDTO } from '@docstudio/api-client';

const instance: GroupInfoDTO = {
    createdAt,
    mailboxes,
    modifiedAt,
    name,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
