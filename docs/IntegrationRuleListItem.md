# IntegrationRuleListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **string** | Account uuid | [default to undefined]
**active** | **boolean** | Integration rule status | [default to undefined]
**failed** | **number** | Number of failed conversions | [optional] [default to undefined]
**_in** | **boolean** | Integration rule direction, true: in, false: out | [default to undefined]
**integrationRuleUuid** | **string** | Integration rule uuid | [optional] [default to undefined]
**mailboxUuid** | **string** | Mailbox uuid | [optional] [default to undefined]
**matchingPattern** | **string** | File matching pattern | [optional] [default to undefined]
**matchingPatternSrc** | **string** | File matching pattern source: name or content | [optional] [default to undefined]
**name** | **string** | Integration rule name | [default to undefined]
**namingPattern** | **string** | File naming pattern | [optional] [default to undefined]
**succeed** | **number** | Number of succeed conversions | [optional] [default to undefined]
**templateName** | **string** | Template name | [optional] [default to undefined]
**templateUuid** | **string** | Template uuid | [default to undefined]
**versionUuid** | **string** | Version uuid | [default to undefined]

## Example

```typescript
import { IntegrationRuleListItem } from '@docstudio/api-client';

const instance: IntegrationRuleListItem = {
    accountUuid,
    active,
    failed,
    _in,
    integrationRuleUuid,
    mailboxUuid,
    matchingPattern,
    matchingPatternSrc,
    name,
    namingPattern,
    succeed,
    templateName,
    templateUuid,
    versionUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
