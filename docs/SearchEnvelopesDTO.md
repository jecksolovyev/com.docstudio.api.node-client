# SearchEnvelopesDTO

Search parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeRole** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**archived** | **boolean** | Archived | [optional] [default to undefined]
**createDateFrom** | **string** | Creation date from | [optional] [default to undefined]
**createDateTo** | **string** | Creation date to | [optional] [default to undefined]
**deleted** | **boolean** | Deleted to Recycle Bin | [optional] [default to undefined]
**expireDateFrom** | **string** | Expire date from | [optional] [default to undefined]
**expireDateTo** | **string** | Expire date to | [optional] [default to undefined]
**form** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**label** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Metadata for filter by | [optional] [default to undefined]
**receiveDateFrom** | **string** | Receive date from | [optional] [default to undefined]
**receiveDateTo** | **string** | Receive date to | [optional] [default to undefined]
**recipient** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**scope** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**searchFields** | [**Set&lt;SearchFieldValueDTO&gt;**](SearchFieldValueDTO.md) |  | [optional] [default to undefined]
**sendDateFrom** | **string** | Envelope sending date from | [optional] [default to undefined]
**sendDateTo** | **string** | Envelope sending date to | [optional] [default to undefined]
**sender** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**sort** | **string** | Sort order, asc or desc | [optional] [default to undefined]
**sortField** | **string** | Field for sorting (\&#39;createdAt\&#39; by default) | [optional] [default to undefined]
**status** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**subject** | **string** | Envelope subject | [optional] [default to undefined]
**template** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**templateVersion** | **Set&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { SearchEnvelopesDTO } from '@docstudio/api-client';

const instance: SearchEnvelopesDTO = {
    activeRole,
    archived,
    createDateFrom,
    createDateTo,
    deleted,
    expireDateFrom,
    expireDateTo,
    form,
    label,
    metadata,
    receiveDateFrom,
    receiveDateTo,
    recipient,
    scope,
    searchFields,
    sendDateFrom,
    sendDateTo,
    sender,
    sort,
    sortField,
    status,
    subject,
    template,
    templateVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
