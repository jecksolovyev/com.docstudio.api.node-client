# RoleControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRole**](#createrole) | **POST** /api/v1/permission/role | Create a role|
|[**deleteRole**](#deleterole) | **DELETE** /api/v1/permission/role/{uuid} | |
|[**read**](#read) | **GET** /api/v1/permission/role/{uuid} | Read role by UUID|
|[**readAll**](#readall) | **GET** /api/v1/permission/role | Read all system roles|
|[**readAllWithAccount**](#readallwithaccount) | **GET** /api/v1/permission/role/account/{uuid} | Read all roles for account including system predefined|
|[**updateRole**](#updaterole) | **PUT** /api/v1/permission/role/{uuid} | Update role, allow to change name and permissions|

# **createRole**
> RoleGetDTO createRole(roleCreateDTO)


### Example

```typescript
import {
    RoleControllerApi,
    Configuration,
    RoleCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let roleCreateDTO: RoleCreateDTO; //

const { status, data } = await apiInstance.createRole(
    roleCreateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleCreateDTO** | **RoleCreateDTO**|  | |


### Return type

**RoleGetDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRole**
> deleteRole()


### Example

```typescript
import {
    RoleControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRole(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


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

# **read**
> RoleGetDTO read()


### Example

```typescript
import {
    RoleControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.read(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**RoleGetDTO**

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

# **readAll**
> PageDTORoleGetDTO readAll()


### Example

```typescript
import {
    RoleControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let offset: number; //Offset, how much roles to skip (optional) (default to 0)
let limit: number; //Limit, how much roles to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.readAll(
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | Offset, how much roles to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much roles to retrieve | (optional) defaults to 25|


### Return type

**PageDTORoleGetDTO**

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

# **readAllWithAccount**
> PageDTORoleGetDTO readAllWithAccount()


### Example

```typescript
import {
    RoleControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let uuid: string; // (default to undefined)
let type: 'account' | 'mailbox'; // (optional) (default to undefined)
let name: string; //Name to search by (optional) (default to undefined)
let permissions: Array<number>; //Permissions to search by (optional) (default to undefined)
let offset: number; //Offset, how much roles to skip (optional) (default to 0)
let limit: number; //Limit, how much roles to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.readAllWithAccount(
    uuid,
    type,
    name,
    permissions,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **type** | [**&#39;account&#39; | &#39;mailbox&#39;**]**Array<&#39;account&#39; &#124; &#39;mailbox&#39;>** |  | (optional) defaults to undefined|
| **name** | [**string**] | Name to search by | (optional) defaults to undefined|
| **permissions** | **Array&lt;number&gt;** | Permissions to search by | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how much roles to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much roles to retrieve | (optional) defaults to 25|


### Return type

**PageDTORoleGetDTO**

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

# **updateRole**
> RoleGetDTO updateRole(roleCreateDTO)


### Example

```typescript
import {
    RoleControllerApi,
    Configuration,
    RoleCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let uuid: string; // (default to undefined)
let roleCreateDTO: RoleCreateDTO; //

const { status, data } = await apiInstance.updateRole(
    uuid,
    roleCreateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleCreateDTO** | **RoleCreateDTO**|  | |
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**RoleGetDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

