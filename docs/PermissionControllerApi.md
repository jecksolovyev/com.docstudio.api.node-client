# PermissionControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**resendInvitation**](#resendinvitation) | **POST** /api/v1/permission/invite/{accountUuid}/{userUuid}/resend | Resend invitation for user to account|
|[**revokeInvitation**](#revokeinvitation) | **DELETE** /api/v1/permission/invite/{accountUuid}/{userUuid} | Revoke invitation for user to account|

# **resendInvitation**
> resendInvitation()


### Example

```typescript
import {
    PermissionControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let userUuid: string; //User UUID (default to undefined)

const { status, data } = await apiInstance.resendInvitation(
    accountUuid,
    userUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **userUuid** | [**string**] | User UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeInvitation**
> revokeInvitation()


### Example

```typescript
import {
    PermissionControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let userUuid: string; //User UUID (default to undefined)

const { status, data } = await apiInstance.revokeInvitation(
    accountUuid,
    userUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **userUuid** | [**string**] | User UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

