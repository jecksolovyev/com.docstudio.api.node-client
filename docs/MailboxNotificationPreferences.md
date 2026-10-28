# MailboxNotificationPreferences

Preferences map, possible keys (email, web, mobile)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyAllUsersAboutEnvelopeChanges** | **boolean** | Notify all users of this mailbox about changes to envelopes (not just the sender) | [optional] [default to undefined]
**preferences** | **{ [key: string]: Array&lt;number&gt;; }** | Preferences map, possible keys (email, web, mobile) | [default to undefined]

## Example

```typescript
import { MailboxNotificationPreferences } from '@docstudio/api-client';

const instance: MailboxNotificationPreferences = {
    notifyAllUsersAboutEnvelopeChanges,
    preferences,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
