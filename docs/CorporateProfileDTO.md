# CorporateProfileDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoDepositMailboxUuid** | **string** | Auto Deposit Mailbox UUID | [optional] [default to undefined]
**dateLocale** | **string** | User locale for dates | [optional] [default to undefined]
**displayExactDate** | **boolean** | Display exact date instead of relative | [optional] [default to undefined]
**email** | **string** | User email | [optional] [default to undefined]
**fields** | **{ [key: string]: any | null; }** | Additional user fields | [optional] [default to undefined]
**firstName** | **string** | User first name | [optional] [default to undefined]
**lastName** | **string** | User last name | [optional] [default to undefined]
**locale** | **string** | User locale | [optional] [default to undefined]
**phone** | **string** | User phone | [optional] [default to undefined]
**preferences** | [**UserPreferences**](UserPreferences.md) | User preferences (active mailbox, account, sign type, search recipients) | [optional] [default to undefined]
**status** | **string** | User status | [optional] [default to undefined]
**timezone** | **string** | User timezone | [optional] [default to undefined]
**uuid** | **string** | User uuid | [optional] [default to undefined]

## Example

```typescript
import { CorporateProfileDTO } from '@docstudio/api-client';

const instance: CorporateProfileDTO = {
    autoDepositMailboxUuid,
    dateLocale,
    displayExactDate,
    email,
    fields,
    firstName,
    lastName,
    locale,
    phone,
    preferences,
    status,
    timezone,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
