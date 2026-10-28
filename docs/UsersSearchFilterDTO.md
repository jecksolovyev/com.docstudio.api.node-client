# UsersSearchFilterDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdFrom** | **string** | Created date from | [optional] [default to undefined]
**createdTo** | **string** | Created date to | [optional] [default to undefined]
**domains** | **Array&lt;string&gt;** | Domains | [optional] [default to undefined]
**keyword** | **string** | Keyword to search by in: firstName, lastName, email | [optional] [default to undefined]
**mailbox** | **string** | UUID of Mailbox or \&#39;no_access\&#39; value | [optional] [default to undefined]
**roleUuids** | **Array&lt;string&gt;** | UUIDs of Roles | [optional] [default to undefined]
**sort** | **string** | Sort order by creation date, asc or desc | [optional] [default to undefined]
**status** | **string** | User status | [optional] [default to undefined]

## Example

```typescript
import { UsersSearchFilterDTO } from '@docstudio/api-client';

const instance: UsersSearchFilterDTO = {
    createdFrom,
    createdTo,
    domains,
    keyword,
    mailbox,
    roleUuids,
    sort,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
