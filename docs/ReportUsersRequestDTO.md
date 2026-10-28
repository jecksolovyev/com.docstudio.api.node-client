# ReportUsersRequestDTO

uuids or search parameters have to specified separately

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchParams** | [**UsersSearchFilterDTO**](UsersSearchFilterDTO.md) |  | [optional] [default to undefined]
**uuids** | **Set&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ReportUsersRequestDTO } from '@docstudio/api-client';

const instance: ReportUsersRequestDTO = {
    searchParams,
    uuids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
