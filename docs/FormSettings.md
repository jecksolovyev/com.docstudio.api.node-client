# FormSettings

Form settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymous** | **Set&lt;string&gt;** |  | [default to undefined]
**delegation** | **boolean** | Form data delegation | [optional] [default to undefined]
**documents** | **{ [key: string]: Array&lt;FormDataField&gt;; }** | Form documents map, key is document id, value is documents fields list | [optional] [default to undefined]
**flow** | **{ [key: string]: string; }** | Form flow map, key is role id, value is mailbox UUID or email | [optional] [default to undefined]
**message** | **string** | Form message | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Envelope metadata | [optional] [default to undefined]
**sharing** | **boolean** | Form data sharing | [optional] [default to undefined]
**subject** | **string** | Form subject | [optional] [default to undefined]

## Example

```typescript
import { FormSettings } from '@docstudio/api-client';

const instance: FormSettings = {
    anonymous,
    delegation,
    documents,
    flow,
    message,
    metadata,
    sharing,
    subject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
