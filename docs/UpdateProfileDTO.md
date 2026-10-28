# UpdateProfileDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoDepositMailboxUuid** | **string** | Auto Deposit Mailbox UUID | [optional] [default to undefined]
**avatar** | **string** | User avatar in base64 format (svg, png, jpeg) | [optional] [default to undefined]
**dateLocale** | **string** | User locale for dates | [default to undefined]
**displayExactDate** | **boolean** | Display exact date instead of relative | [optional] [default to undefined]
**fields** | **{ [key: string]: any | null; }** | Additional user fields | [optional] [default to undefined]
**firstName** | **string** | User first name | [default to undefined]
**lastName** | **string** | User last name | [default to undefined]
**locale** | **string** | User locale | [default to undefined]
**mfaEnabled** | **boolean** | Enable Multi-Factor Authentication | [optional] [default to undefined]
**phone** | **string** | User phone | [optional] [default to undefined]
**timezone** | **string** | User timezone | [default to undefined]

## Example

```typescript
import { UpdateProfileDTO } from '@docstudio/api-client';

const instance: UpdateProfileDTO = {
    autoDepositMailboxUuid,
    avatar,
    dateLocale,
    displayExactDate,
    fields,
    firstName,
    lastName,
    locale,
    mfaEnabled,
    phone,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
