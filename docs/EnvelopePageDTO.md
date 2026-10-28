# EnvelopePageDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**Array&lt;EnvelopeViewColumn&gt;**](EnvelopeViewColumn.md) | Saved columns to display | [optional] [default to undefined]
**data** | [**Array&lt;EnvelopeToMailboxDTO&gt;**](EnvelopeToMailboxDTO.md) | Data records | [optional] [default to undefined]
**numberOfElements** | **number** | Fetched records count | [optional] [default to undefined]
**searchFields** | [**Array&lt;EnvelopeSearchField&gt;**](EnvelopeSearchField.md) | Search fields | [optional] [default to undefined]
**senders** | [**Set&lt;EnvelopeSenderDTO&gt;**](EnvelopeSenderDTO.md) | Senders | [optional] [default to undefined]
**sendersInfo** | [**EnvelopePageDTO**](EnvelopePageDTO.md) |  | [optional] [default to undefined]
**sizeRequested** | **number** | Requested size | [optional] [default to undefined]
**templates** | [**Set&lt;EnvelopeTemplateInfoDTO&gt;**](EnvelopeTemplateInfoDTO.md) | Templates | [optional] [default to undefined]
**templatesInfo** | [**EnvelopePageDTO**](EnvelopePageDTO.md) |  | [optional] [default to undefined]
**totalElements** | **number** | Total elements by request | [optional] [default to undefined]

## Example

```typescript
import { EnvelopePageDTO } from '@docstudio/api-client';

const instance: EnvelopePageDTO = {
    columns,
    data,
    numberOfElements,
    searchFields,
    senders,
    sendersInfo,
    sizeRequested,
    templates,
    templatesInfo,
    totalElements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
