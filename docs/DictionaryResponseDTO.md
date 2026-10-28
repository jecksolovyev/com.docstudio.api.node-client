# DictionaryResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **string** | Dictionary access level | [default to undefined]
**archive** | **boolean** | Dictionary archived flag | [default to undefined]
**columns** | [**Array&lt;DictionaryColumnResponseDTO&gt;**](DictionaryColumnResponseDTO.md) |  | [optional] [default to undefined]
**createdAt** | **string** | Dictionary created date | [default to undefined]
**description** | **string** | Dictionary description | [default to undefined]
**editable** | **boolean** | Dictionary can be edited | [default to undefined]
**filteredAccessOnly** | **boolean** | Dictionary can be used only with filtering | [default to undefined]
**mailboxUuid** | **string** | Owner of the dictionary | [optional] [default to undefined]
**name** | **string** | Dictionary name | [default to undefined]
**recordsCount** | **number** | Dictionary records count | [optional] [default to undefined]
**status** | **string** | Dictionary availability status | [optional] [default to undefined]
**uuid** | **string** | Dictionary uuid | [default to undefined]

## Example

```typescript
import { DictionaryResponseDTO } from '@docstudio/api-client';

const instance: DictionaryResponseDTO = {
    access,
    archive,
    columns,
    createdAt,
    description,
    editable,
    filteredAccessOnly,
    mailboxUuid,
    name,
    recordsCount,
    status,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
