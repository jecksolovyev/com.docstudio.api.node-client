# DictionaryColumnValueSearchDTO

Search parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Document id, where field is located, used for filtered dictionaries | [optional] [default to undefined]
**envelopeUuid** | **string** | Envelope UUID, used for filtered dictionaries | [optional] [default to undefined]
**fieldName** | **string** | Field name, used for filtered dictionaries | [optional] [default to undefined]
**filter** | **{ [key: string]: string; }** | Values for filter columns, except filter by role | [optional] [default to undefined]
**keyword** | **string** | Keyword to search by | [optional] [default to undefined]
**rowIndex** | **number** | Row index, where field is located in table used for filtered dictionaries | [optional] [default to undefined]
**templateUuid** | **string** | Template UUID, used for filtered dictionaries | [optional] [default to undefined]
**versionUuid** | **string** | Template version UUID, used for filtered dictionaries | [optional] [default to undefined]

## Example

```typescript
import { DictionaryColumnValueSearchDTO } from '@docstudio/api-client';

const instance: DictionaryColumnValueSearchDTO = {
    documentId,
    envelopeUuid,
    fieldName,
    filter,
    keyword,
    rowIndex,
    templateUuid,
    versionUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
