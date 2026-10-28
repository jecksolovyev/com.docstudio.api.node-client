# ProfileDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**Array&lt;User2AccountWithMailboxesDTO&gt;**](User2AccountWithMailboxesDTO.md) | User accounts belongs to | [optional] [default to undefined]
**autoDepositMailboxUuid** | **string** | Auto Deposit Mailbox UUID | [optional] [default to undefined]
**corporateAccountId** | **string** | Corporate account UUID | [optional] [default to undefined]
**corporateUser** | **boolean** |  | [optional] [default to undefined]
**dateLocale** | **string** | User locale for dates | [optional] [default to undefined]
**displayExactDate** | **boolean** | Display exact date instead of relative | [optional] [default to undefined]
**email** | **string** | User email | [optional] [default to undefined]
**fields** | **{ [key: string]: any | null; }** | Additional user fields | [optional] [default to undefined]
**firstName** | **string** | User first name | [optional] [default to undefined]
**initials** | **string** | Saved initials | [optional] [default to undefined]
**lastName** | **string** | User last name | [optional] [default to undefined]
**locale** | **string** | User locale | [optional] [default to undefined]
**mfaEnabled** | **boolean** | Is Multi-Factor Authentication enabled | [optional] [default to undefined]
**onlySsoLogin** | **boolean** | Is only SSO allowed for user (password forbidden) | [optional] [default to undefined]
**phone** | **string** | User phone | [optional] [default to undefined]
**preferences** | [**UserPreferences**](UserPreferences.md) | User preferences (active mailbox, account, sign type, search recipients) | [optional] [default to undefined]
**signature** | **string** | Saved eInk signature | [optional] [default to undefined]
**ssoEnabled** | **boolean** | Is SSO enabled for user | [optional] [default to undefined]
**status** | **string** | User status | [optional] [default to undefined]
**timezone** | **string** | User timezone | [optional] [default to undefined]
**uuid** | **string** | User uuid | [optional] [default to undefined]

## Example

```typescript
import { ProfileDTO } from '@docstudio/api-client';

const instance: ProfileDTO = {
    accounts,
    autoDepositMailboxUuid,
    corporateAccountId,
    corporateUser,
    dateLocale,
    displayExactDate,
    email,
    fields,
    firstName,
    initials,
    lastName,
    locale,
    mfaEnabled,
    onlySsoLogin,
    phone,
    preferences,
    signature,
    ssoEnabled,
    status,
    timezone,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
