# PermissionAccountControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAccAllPermissions**](#deleteaccallpermissions) | **DELETE** /api/v1/permission/{userUuid}/account/{accountUuid} | Delete user from account totally|
|[**deleteAccPermission**](#deleteaccpermission) | **DELETE** /api/v1/permission/{userUuid}/account/{accountUuid}/{permissionId} | Delete permission for specific \&#39;user-to-account\&#39; relation|
|[**deleteAccRole**](#deleteaccrole) | **DELETE** /api/v1/permission/{userUuid}/account/{accountUuid}/role/{roleUuid} | Delete role|
|[**getUserAccountPermissions**](#getuseraccountpermissions) | **GET** /api/v1/permission/{userUuid}/account/{accountUuid} | Read all user permissions|
|[**patchAccountPermissions**](#patchaccountpermissions) | **PATCH** /api/v1/permission/{userUuid}/account/{accountUuid} | Add exact permission for selected user-to-account relation. Add if absent or ignore if already present.|
|[**replaceAllAccountPermissions**](#replaceallaccountpermissions) | **PUT** /api/v1/permission/{userUuid}/account/{accountUuid} | Replace all permissions for selected user-to-account relation|

# **deleteAccAllPermissions**
> deleteAccAllPermissions()


### Example

```typescript
import {
    PermissionAccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionAccountControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let accountUuid: string; //UUID of account (default to undefined)

const { status, data } = await apiInstance.deleteAccAllPermissions(
    userUuid,
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **accountUuid** | [**string**] | UUID of account | defaults to undefined|


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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAccPermission**
> deleteAccPermission()


### Example

```typescript
import {
    PermissionAccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionAccountControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let accountUuid: string; //UUID of account (default to undefined)
let permissionId: number; //Permission Id (default to undefined)

const { status, data } = await apiInstance.deleteAccPermission(
    userUuid,
    accountUuid,
    permissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **accountUuid** | [**string**] | UUID of account | defaults to undefined|
| **permissionId** | [**number**] | Permission Id | defaults to undefined|


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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAccRole**
> deleteAccRole()


### Example

```typescript
import {
    PermissionAccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionAccountControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let accountUuid: string; //UUID of account (default to undefined)
let roleUuid: string; //UUID of role (default to undefined)

const { status, data } = await apiInstance.deleteAccRole(
    userUuid,
    accountUuid,
    roleUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **accountUuid** | [**string**] | UUID of account | defaults to undefined|
| **roleUuid** | [**string**] | UUID of role | defaults to undefined|


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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserAccountPermissions**
> AccountPermissionsDTO getUserAccountPermissions()


### Example

```typescript
import {
    PermissionAccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionAccountControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let accountUuid: string; //UUID of account (default to undefined)

const { status, data } = await apiInstance.getUserAccountPermissions(
    userUuid,
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **accountUuid** | [**string**] | UUID of account | defaults to undefined|


### Return type

**AccountPermissionsDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchAccountPermissions**
> patchAccountPermissions(permissionsDTO)


### Example

```typescript
import {
    PermissionAccountControllerApi,
    Configuration,
    PermissionsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionAccountControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let accountUuid: string; //UUID of account (default to undefined)
let permissionsDTO: PermissionsDTO; //

const { status, data } = await apiInstance.patchAccountPermissions(
    userUuid,
    accountUuid,
    permissionsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionsDTO** | **PermissionsDTO**|  | |
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **accountUuid** | [**string**] | UUID of account | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceAllAccountPermissions**
> replaceAllAccountPermissions(permissionsDTO)


### Example

```typescript
import {
    PermissionAccountControllerApi,
    Configuration,
    PermissionsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionAccountControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let accountUuid: string; //UUID of account (default to undefined)
let permissionsDTO: PermissionsDTO; //

const { status, data } = await apiInstance.replaceAllAccountPermissions(
    userUuid,
    accountUuid,
    permissionsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionsDTO** | **PermissionsDTO**|  | |
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **accountUuid** | [**string**] | UUID of account | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

