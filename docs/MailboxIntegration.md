# MailboxIntegration

Integration info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Integration status | [default to undefined]
**defaultRule** | [**IntegrationDefaultRuleDTO**](IntegrationDefaultRuleDTO.md) | Integration default rules | [default to undefined]
**failed** | **number** | Number of failed conversions without assigned rule | [optional] [default to undefined]
**mailboxUuid** | **string** | Mailbox uuid | [default to undefined]
**protocol** | **string** | Integration protocol | [default to undefined]
**protocolSettings** | **{ [key: string]: string; }** | Integration protocol settings | [default to undefined]
**succeed** | **number** | Number of succeed conversions without assigned rule | [optional] [default to undefined]

## Example

```typescript
import { MailboxIntegration } from '@docstudio/api-client';

const instance: MailboxIntegration = {
    active,
    defaultRule,
    failed,
    mailboxUuid,
    protocol,
    protocolSettings,
    succeed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
