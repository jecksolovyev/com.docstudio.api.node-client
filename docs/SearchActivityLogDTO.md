# SearchActivityLogDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **string** |  | [default to undefined]
**action** | [**ActivityLogAction**](ActivityLogAction.md) |  | [optional] [default to undefined]
**dateFrom** | **string** |  | [optional] [default to undefined]
**dateTo** | **string** |  | [optional] [default to undefined]
**errorCode** | **number** |  | [optional] [default to undefined]
**ip** | **string** |  | [optional] [default to undefined]
**mailboxUuid** | **string** |  | [optional] [default to undefined]
**objectId** | **string** |  | [optional] [default to undefined]
**objectName** | **string** |  | [optional] [default to undefined]
**objectType** | [**ActivityLogObjectType**](ActivityLogObjectType.md) |  | [optional] [default to undefined]
**operatorId** | **string** |  | [optional] [default to undefined]
**source** | [**OperationSource**](OperationSource.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SearchActivityLogDTO } from '@docstudio/api-client';

const instance: SearchActivityLogDTO = {
    accountUuid,
    action,
    dateFrom,
    dateTo,
    errorCode,
    ip,
    mailboxUuid,
    objectId,
    objectName,
    objectType,
    operatorId,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
