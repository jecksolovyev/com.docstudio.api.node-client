# AuditTrailDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser** | **string** |  | [optional] [default to undefined]
**dateTime** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**envelopeUuid** | **string** |  | [optional] [default to undefined]
**geolocation** | [**GeolocationInfoDTO**](GeolocationInfoDTO.md) |  | [optional] [default to undefined]
**ip** | **string** |  | [optional] [default to undefined]
**latitude** | **number** |  | [optional] [default to undefined]
**longitude** | **number** |  | [optional] [default to undefined]
**mailboxName** | **string** |  | [optional] [default to undefined]
**mailboxUuid** | **string** |  | [optional] [default to undefined]
**operation** | **string** |  | [optional] [default to undefined]
**os** | **string** |  | [optional] [default to undefined]
**userFirstAndLastName** | **string** |  | [optional] [default to undefined]
**userUuid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AuditTrailDTO } from '@docstudio/api-client';

const instance: AuditTrailDTO = {
    browser,
    dateTime,
    description,
    envelopeUuid,
    geolocation,
    ip,
    latitude,
    longitude,
    mailboxName,
    mailboxUuid,
    operation,
    os,
    userFirstAndLastName,
    userUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
