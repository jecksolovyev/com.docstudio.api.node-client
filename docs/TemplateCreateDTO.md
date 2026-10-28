# TemplateCreateDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Template access level | [default to undefined]
**categories** | **Array&lt;string&gt;** | Template categories ids and their accessLevels. Null or empty array if not within any category. | [optional] [default to undefined]
**data** | **string** | Template data | [default to undefined]
**logoImageUuid** | **string** | UUID of the template logo image | [optional] [default to undefined]
**sharedTo** | **Set&lt;string&gt;** | Mailboxes list, which have access to template | [optional] [default to undefined]
**sharedToMailboxGroups** | **Set&lt;string&gt;** | Mailbox groups, which have access to template | [optional] [default to undefined]
**signatureAlgorithm** | **string** | Signature algorithm | [optional] [default to undefined]
**signatureContainer** | **string** | Signature container | [optional] [default to undefined]

## Example

```typescript
import { TemplateCreateDTO } from '@docstudio/api-client';

const instance: TemplateCreateDTO = {
    access,
    categories,
    data,
    logoImageUuid,
    sharedTo,
    sharedToMailboxGroups,
    signatureAlgorithm,
    signatureContainer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
