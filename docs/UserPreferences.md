# UserPreferences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeAccount** | **string** | Last active account UUID | [optional] [default to undefined]
**activeMailbox** | **string** | Last active mailbox UUID | [optional] [default to undefined]
**reviewMandatoryApproval** | **boolean** | Last state of the \&#39;Mandatory approval by all participants\&#39; toggle in the review request | [optional] [default to undefined]
**searchRecipientList** | **{ [key: string]: Array&lt;SearchRecipient&gt;; }** | Recently used recipients (up to 100 entries, keyed by mailbox UUID) | [optional] [default to undefined]
**signType** | **string** | Preferred signing type | [optional] [default to undefined]
**signTypeEU** | **string** | Preferred EU signing type | [optional] [default to undefined]

## Example

```typescript
import { UserPreferences } from '@docstudio/api-client';

const instance: UserPreferences = {
    activeAccount,
    activeMailbox,
    reviewMandatoryApproval,
    searchRecipientList,
    signType,
    signTypeEU,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
