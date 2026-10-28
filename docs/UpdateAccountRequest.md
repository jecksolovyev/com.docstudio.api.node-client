# UpdateAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiAssistantRestricted** | **boolean** | Restrict AI Assistant usage for account users. Skip property for non-owner users. | [optional] [default to undefined]
**allowCreatePersonalMailboxWithRole** | **string** | Create personal mailbox for self-registered corporate user with role UUID | [optional] [default to undefined]
**allowMicrosoftOfficeViewer** | **boolean** | Allow envelope attachments public access for MS Office Viewer. Skip property for non-owner users. | [optional] [default to undefined]
**brand** | **string** | Account brand logo in base64 format (svg, png, jpeg) | [optional] [default to undefined]
**corporateProfileEditRestricted** | **boolean** | Restrict profile editing for corporate users | [optional] [default to undefined]
**hideCommunityTemplates** | **boolean** | Hide community templates for account users | [optional] [default to undefined]
**hideOfficialTemplates** | **boolean** | Hide official templates for account users | [optional] [default to undefined]
**hideSenderEmailInNotifications** | **boolean** | Hide sender\&#39;s email as reply-to from notifications | [optional] [default to undefined]
**inn** | **string** | Account TAX number | [optional] [default to undefined]
**logo** | **string** | Account logo in base64 format (svg, png, jpeg) | [optional] [default to undefined]
**name** | **string** | Account Name | [default to undefined]
**recipientExperience** | [**RecipientExperience**](RecipientExperience.md) | Default recipient experience for account emails and recipient interface | [default to undefined]

## Example

```typescript
import { UpdateAccountRequest } from '@docstudio/api-client';

const instance: UpdateAccountRequest = {
    aiAssistantRestricted,
    allowCreatePersonalMailboxWithRole,
    allowMicrosoftOfficeViewer,
    brand,
    corporateProfileEditRestricted,
    hideCommunityTemplates,
    hideOfficialTemplates,
    hideSenderEmailInNotifications,
    inn,
    logo,
    name,
    recipientExperience,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
