# ActivityLogRecordDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActivityLogAction**](ActivityLogAction.md) |  | [optional] [default to undefined]
**browser** | **string** | Browser | [optional] [default to undefined]
**errorCode** | **number** | Error code | [optional] [default to undefined]
**ip** | **string** | IP address | [optional] [default to undefined]
**mailboxName** | **string** | Name of mailbox | [optional] [default to undefined]
**mailboxUuid** | **string** | UUID of mailbox | [optional] [default to undefined]
**objectId** | **string** | Object UUID | [optional] [default to undefined]
**objectName** | **string** | Object name | [optional] [default to undefined]
**objectType** | [**ActivityLogObjectType**](ActivityLogObjectType.md) |  | [optional] [default to undefined]
**operatorId** | **string** | Operator UUID | [optional] [default to undefined]
**operatorName** | **string** | Operator name | [optional] [default to undefined]
**os** | **string** | Operation System | [optional] [default to undefined]
**source** | [**OperationSource**](OperationSource.md) |  | [optional] [default to undefined]
**timestamp** | **string** | Action timestamp | [optional] [default to undefined]

## Example

```typescript
import { ActivityLogRecordDTO } from '@docstudio/api-client';

const instance: ActivityLogRecordDTO = {
    action,
    browser,
    errorCode,
    ip,
    mailboxName,
    mailboxUuid,
    objectId,
    objectName,
    objectType,
    operatorId,
    operatorName,
    os,
    source,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
