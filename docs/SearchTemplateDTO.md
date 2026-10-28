# SearchTemplateDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Template access level | [optional] [default to undefined]
**categories** | **Array&lt;string&gt;** | Template categories | [optional] [default to undefined]
**createdAt** | **string** | Date of Template creation | [optional] [default to undefined]
**description** | **string** | Template description | [default to undefined]
**favorite** | **boolean** | Template marked as favorite | [optional] [default to undefined]
**logoImageUuid** | **string** | UUID of the template logo image | [optional] [default to undefined]
**mailboxUuid** | **string** | Template owner mailbox UUID | [default to undefined]
**name** | **string** | Template name | [default to undefined]
**sharedCategories** | **Array&lt;string&gt;** | Template shared categories | [optional] [default to undefined]
**sharedTo** | **Set&lt;string&gt;** | Mailboxes to which template is shared to | [optional] [default to undefined]
**sharedToMailboxGroups** | **Set&lt;string&gt;** | Mailbox groups to which template is shared to | [optional] [default to undefined]
**uuid** | **string** | Template UUID | [default to undefined]

## Example

```typescript
import { SearchTemplateDTO } from '@docstudio/api-client';

const instance: SearchTemplateDTO = {
    access,
    categories,
    createdAt,
    description,
    favorite,
    logoImageUuid,
    mailboxUuid,
    name,
    sharedCategories,
    sharedTo,
    sharedToMailboxGroups,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
