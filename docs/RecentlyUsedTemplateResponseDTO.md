# RecentlyUsedTemplateResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Template access level | [optional] [default to undefined]
**description** | **string** | Template description | [optional] [default to undefined]
**logoImageUuid** | **string** | UUID of the template logo image | [optional] [default to undefined]
**mailboxUuid** | **string** |  | [optional] [default to undefined]
**name** | **string** | Template name | [optional] [default to undefined]
**sharedTo** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**sharedToMailboxGroups** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**uuid** | **string** | Template UUID | [optional] [default to undefined]

## Example

```typescript
import { RecentlyUsedTemplateResponseDTO } from '@docstudio/api-client';

const instance: RecentlyUsedTemplateResponseDTO = {
    access,
    description,
    logoImageUuid,
    mailboxUuid,
    name,
    sharedTo,
    sharedToMailboxGroups,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
