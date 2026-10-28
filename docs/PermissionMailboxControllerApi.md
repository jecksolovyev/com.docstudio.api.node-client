# PermissionMailboxControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAllPermissions**](#deleteallpermissions) | **DELETE** /api/v1/permission/{userUuid}/mailbox/{mailboxUuid} | Delete all permissions and roles for selected user-to-mailbox relation|
|[**deletePermission**](#deletepermission) | **DELETE** /api/v1/permission/{userUuid}/mailbox/{mailboxUuid}/{permissionId} | Delete permission for specific user-to-mailbox relation|
|[**deleteRoleFromMailbox**](#deleterolefrommailbox) | **DELETE** /api/v1/permission/{userUuid}/mailbox/{mailboxUuid}/role/{roleUuid} | Delete role|
|[**patchMailboxPermissions**](#patchmailboxpermissions) | **PATCH** /api/v1/permission/{userUuid}/mailbox/{mailboxUuid} | Add exact permissions/roles leaving existing as is. Ignore if already present.|
|[**replaceAllMailboxPermissions**](#replaceallmailboxpermissions) | **PUT** /api/v1/permission/{userUuid}/mailbox/{mailboxUuid} | Replace all permissions for selected user-to-mailbox relation|

# **deleteAllPermissions**
> deleteAllPermissions()


### Example

```typescript
import {
    PermissionMailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionMailboxControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let mailboxUuid: string; //UUID of mailbox (default to undefined)

const { status, data } = await apiInstance.deleteAllPermissions(
    userUuid,
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


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

# **deletePermission**
> deletePermission()


### Example

```typescript
import {
    PermissionMailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionMailboxControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let mailboxUuid: string; //UUID of mailbox (default to undefined)
let permissionId: number; //Permission Id (default to undefined)

const { status, data } = await apiInstance.deletePermission(
    userUuid,
    mailboxUuid,
    permissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|
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

# **deleteRoleFromMailbox**
> deleteRoleFromMailbox()


### Example

```typescript
import {
    PermissionMailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionMailboxControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let mailboxUuid: string; //UUID of mailbox (default to undefined)
let roleUuid: string; //UUID of role (default to undefined)

const { status, data } = await apiInstance.deleteRoleFromMailbox(
    userUuid,
    mailboxUuid,
    roleUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|
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

# **patchMailboxPermissions**
> patchMailboxPermissions(permissionsDTO)


### Example

```typescript
import {
    PermissionMailboxControllerApi,
    Configuration,
    PermissionsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionMailboxControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let mailboxUuid: string; //UUID of mailbox (default to undefined)
let permissionsDTO: PermissionsDTO; //

const { status, data } = await apiInstance.patchMailboxPermissions(
    userUuid,
    mailboxUuid,
    permissionsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionsDTO** | **PermissionsDTO**|  | |
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


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

# **replaceAllMailboxPermissions**
> replaceAllMailboxPermissions(permissionsDTO)


### Example

```typescript
import {
    PermissionMailboxControllerApi,
    Configuration,
    PermissionsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new PermissionMailboxControllerApi(configuration);

let userUuid: string; //UUID of User (default to undefined)
let mailboxUuid: string; //UUID of mailbox (default to undefined)
let permissionsDTO: PermissionsDTO; //

const { status, data } = await apiInstance.replaceAllMailboxPermissions(
    userUuid,
    mailboxUuid,
    permissionsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionsDTO** | **PermissionsDTO**|  | |
| **userUuid** | [**string**] | UUID of User | defaults to undefined|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


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

