# IntegrationRuleRequestDTO

Request details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_in** | **boolean** | Rule direction, true &#x3D; IN, false &#x3D; OUT | [optional] [default to undefined]
**mailboxUuid** | **string** | UUID of mailbox for applying rule for | [default to undefined]
**map** | **string** | XSLT map to use for transformation | [default to undefined]
**multipleEnvelopes** | **boolean** | Multiple envelopes allowed | [optional] [default to undefined]
**namingRule** | **string** | Naming pattern rule. Tokens allowed: {mailboxUuid}, {envelopeUuid}, {randomNumber}, {templateUuid}, {date yyyy-MM-dd_HH-mm-ss}. Forbidden characters are: /:?*&lt;&gt;| | [optional] [default to undefined]
**source** | **string** | XML source to convert | [default to undefined]
**templateUuid** | **string** | UUID of the template to use for generated envelope | [default to undefined]
**validationFiles** | [**Array&lt;IntegrationRuleValidationFile&gt;**](IntegrationRuleValidationFile.md) |  | [optional] [default to undefined]
**versionUuid** | **string** | UUID of template version | [default to undefined]

## Example

```typescript
import { IntegrationRuleRequestDTO } from '@docstudio/api-client';

const instance: IntegrationRuleRequestDTO = {
    _in,
    mailboxUuid,
    map,
    multipleEnvelopes,
    namingRule,
    source,
    templateUuid,
    validationFiles,
    versionUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
