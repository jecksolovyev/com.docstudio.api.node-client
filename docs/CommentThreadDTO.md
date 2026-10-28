# CommentThreadDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** | Access level | [optional] [default to undefined]
**mailboxName** | **string** | Name of Mailbox created this comment | [optional] [default to undefined]
**mailboxUuid** | **string** | UUID of Mailbox created this comment | [optional] [default to undefined]
**messages** | [**Array&lt;CommentMessageDTO&gt;**](CommentMessageDTO.md) | All messages in the thread | [optional] [default to undefined]
**sharedTo** | [**Set&lt;NameUuidDTO&gt;**](NameUuidDTO.md) |  | [optional] [default to undefined]
**threadUuid** | **string** | Thread UUID | [optional] [default to undefined]
**xpath** | **string** | xPath to find selected area | [optional] [default to undefined]

## Example

```typescript
import { CommentThreadDTO } from '@docstudio/api-client';

const instance: CommentThreadDTO = {
    accessType,
    mailboxName,
    mailboxUuid,
    messages,
    sharedTo,
    threadUuid,
    xpath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
