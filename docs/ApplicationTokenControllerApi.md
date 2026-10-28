# ApplicationTokenControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createToken**](#createtoken) | **POST** /api/v1/token | Create application token|
|[**getUserTokens**](#getusertokens) | **GET** /api/v1/token | List application tokens|
|[**revokeToken**](#revoketoken) | **DELETE** /api/v1/token/{id} | Revoke application token|

# **createToken**
> AppTokenDTO createToken(createAppTokenDTO)


### Example

```typescript
import {
    ApplicationTokenControllerApi,
    Configuration,
    CreateAppTokenDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationTokenControllerApi(configuration);

let createAppTokenDTO: CreateAppTokenDTO; //

const { status, data } = await apiInstance.createToken(
    createAppTokenDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAppTokenDTO** | **CreateAppTokenDTO**|  | |


### Return type

**AppTokenDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**405** | Method disabled by configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserTokens**
> Array<AppTokenDTO> getUserTokens()


### Example

```typescript
import {
    ApplicationTokenControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationTokenControllerApi(configuration);

const { status, data } = await apiInstance.getUserTokens();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AppTokenDTO>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**405** | Method disabled by configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeToken**
> revokeToken()


### Example

```typescript
import {
    ApplicationTokenControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationTokenControllerApi(configuration);

let id: string; //Token id (default to undefined)

const { status, data } = await apiInstance.revokeToken(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Token id | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**405** | Method disabled by configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

