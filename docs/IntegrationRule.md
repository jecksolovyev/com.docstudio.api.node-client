# IntegrationRule

Integration rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **string** | Account uuid | [default to undefined]
**active** | **boolean** | Integration rule status | [default to undefined]
**attributes** | **{ [key: string]: string; }** | Some additional attributes (XPATH can be used as a value) | [optional] [default to undefined]
**excludeZipFiles** | **string** | Mask to exclude some files from ZIP. c - for signature/processing Certificate, p - for Printable version, a - for Audit trail | [optional] [default to undefined]
**_in** | **boolean** | Integration rule direction, true: in, false: out | [default to undefined]
**integrationRuleUuid** | **string** | Integration rule uuid | [optional] [default to undefined]
**mailboxUuid** | **string** | Mailbox uuid | [optional] [default to undefined]
**matchingPattern** | **string** | File matching pattern | [optional] [default to undefined]
**matchingPatternSrc** | **string** | File matching pattern source: name or content | [optional] [default to undefined]
**multipleEnvelopes** | **boolean** | Rule using for creating multiple envelopes | [optional] [default to undefined]
**name** | **string** | Integration rule name | [default to undefined]
**namingPattern** | **string** | File naming pattern | [optional] [default to undefined]
**rule** | **string** | XSLT mapping | [optional] [default to undefined]
**templateName** | **string** | Template name | [optional] [default to undefined]
**templateUuid** | **string** | Template uuid | [default to undefined]
**validationFiles** | [**Array&lt;IntegrationRuleValidationFile&gt;**](IntegrationRuleValidationFile.md) |  | [optional] [default to undefined]
**versionUuid** | **string** | Version uuid | [default to undefined]
**zipStructureName** | **string** | The name of pre-saved zip structure in the template | [optional] [default to undefined]

## Example

```typescript
import { IntegrationRule } from '@docstudio/api-client';

const instance: IntegrationRule = {
    accountUuid,
    active,
    attributes,
    excludeZipFiles,
    _in,
    integrationRuleUuid,
    mailboxUuid,
    matchingPattern,
    matchingPatternSrc,
    multipleEnvelopes,
    name,
    namingPattern,
    rule,
    templateName,
    templateUuid,
    validationFiles,
    versionUuid,
    zipStructureName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
