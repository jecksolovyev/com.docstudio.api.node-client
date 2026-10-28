# User2AccountWithMailboxesDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowMicrosoftOfficeViewer** | **boolean** | Allow envelope attachments public access for MS Office Viewer | [optional] [default to undefined]
**company** | **boolean** | Is account registered as a company? | [optional] [default to undefined]
**corporateProfileEditRestricted** | **boolean** | Is profile editing restricted for corporate users? | [optional] [default to undefined]
**documentSharingProviders** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**hideCommunityTemplates** | **boolean** | Hide community templates for account users | [optional] [default to undefined]
**hideOfficialTemplates** | **boolean** | Hide official templates for account users | [optional] [default to undefined]
**mailboxesCount** | **number** | Count of mailboxes user has access to | [optional] [default to undefined]
**mfaEnabled** | **boolean** | Is Multi-Factor Authentication enabled | [optional] [default to undefined]
**name** | **string** | Account Name | [optional] [default to undefined]
**permissions** | **Set&lt;number&gt;** | Permissions for current user | [optional] [default to undefined]
**recipientExperience** | [**RecipientExperience**](RecipientExperience.md) | Default recipient experience for account emails and recipient interface | [optional] [default to undefined]
**system** | **boolean** |  | [optional] [default to undefined]
**uuid** | **string** | Account UUID | [optional] [default to undefined]

## Example

```typescript
import { User2AccountWithMailboxesDTO } from '@docstudio/api-client';

const instance: User2AccountWithMailboxesDTO = {
    allowMicrosoftOfficeViewer,
    company,
    corporateProfileEditRestricted,
    documentSharingProviders,
    hideCommunityTemplates,
    hideOfficialTemplates,
    mailboxesCount,
    mfaEnabled,
    name,
    permissions,
    recipientExperience,
    system,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
