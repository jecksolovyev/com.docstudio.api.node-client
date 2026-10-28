# FullTemplateResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Template access level | [optional] [default to undefined]
**account** | **string** | Template creator\&#39;s account | [optional] [default to undefined]
**archive** | **boolean** | Template archived | [optional] [default to undefined]
**categories** | **Array&lt;string&gt;** | Template categories ids. Empty array if not within any category. | [optional] [default to undefined]
**createdAt** | **string** | Template create date | [optional] [default to undefined]
**data** | **string** | Template data | [optional] [default to undefined]
**dataCreatedAt** | **string** | Template data create date | [optional] [default to undefined]
**dataModifiedAt** | **string** | Template data update date | [optional] [default to undefined]
**defaultDownloadOptions** | **boolean** | Returns a flag whether default download options should appear or only custom one | [optional] [default to undefined]
**description** | **string** | Template description | [optional] [default to undefined]
**draftInitializationRequired** | **boolean** | For proper envelope initialization a draft must be created at once | [optional] [default to undefined]
**logoImageUuid** | **string** | UUID of the template logo image | [optional] [default to undefined]
**mailbox** | **string** | Template creator\&#39;s mailbox | [optional] [default to undefined]
**modifiedAt** | **string** | Template update date | [optional] [default to undefined]
**name** | **string** | Template name | [optional] [default to undefined]
**newEnvelopeCanBeCreated** | **boolean** | Returns a flag whether a new envelope can be created using this template | [optional] [default to undefined]
**publiclyShared** | **boolean** | Returns a flag indicating whether the template is publicly accessible by code | [optional] [default to undefined]
**sharedCategories** | **Array&lt;string&gt;** | Template shared categories ids. Absent if not within any shared category. | [optional] [default to undefined]
**sharedTo** | **Set&lt;string&gt;** | Mailboxes to which template is shared to | [optional] [default to undefined]
**sharedToMailboxGroups** | **Set&lt;string&gt;** | Mailbox groups to which template is shared to | [optional] [default to undefined]
**signatureAlgorithm** | **string** | Signature algorithm | [optional] [default to undefined]
**signatureContainer** | **string** | Signature container | [optional] [default to undefined]
**uuid** | **string** | Template UUID | [optional] [default to undefined]
**version** | **string** | Template version | [optional] [default to undefined]

## Example

```typescript
import { FullTemplateResponseDTO } from '@docstudio/api-client';

const instance: FullTemplateResponseDTO = {
    access,
    account,
    archive,
    categories,
    createdAt,
    data,
    dataCreatedAt,
    dataModifiedAt,
    defaultDownloadOptions,
    description,
    draftInitializationRequired,
    logoImageUuid,
    mailbox,
    modifiedAt,
    name,
    newEnvelopeCanBeCreated,
    publiclyShared,
    sharedCategories,
    sharedTo,
    sharedToMailboxGroups,
    signatureAlgorithm,
    signatureContainer,
    uuid,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
