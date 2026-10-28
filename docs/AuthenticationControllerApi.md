# AuthenticationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**login**](#login) | **POST** /api/login | Login with email/password|
|[**loginByCode**](#loginbycode) | **POST** /api/login/by-code | Login with the code from email (for non-existing user)|
|[**logout**](#logout) | **POST** /api/logout | Logout|
|[**refreshToken**](#refreshtoken) | **POST** /api/refresh-token | Get new Access Token by Refresh Token|
|[**userExistsByCode**](#userexistsbycode) | **GET** /api/login/check-by-code/{code} | Check login ability with the code from email (for non-existing user)|

# **login**
> LoginResponseDTO login(loginDTO)


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration,
    LoginDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

let loginDTO: LoginDTO; //
let refreshToken: boolean; //Is refresh token needed (optional) (default to undefined)

const { status, data } = await apiInstance.login(
    loginDTO,
    refreshToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginDTO** | **LoginDTO**|  | |
| **refreshToken** | [**boolean**] | Is refresh token needed | (optional) defaults to undefined|


### Return type

**LoginResponseDTO**

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

# **loginByCode**
> LoginEnvelopeResponseDTO loginByCode(userCreateByCodeDTO)


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration,
    UserCreateByCodeDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

let userCreateByCodeDTO: UserCreateByCodeDTO; //

const { status, data } = await apiInstance.loginByCode(
    userCreateByCodeDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCreateByCodeDTO** | **UserCreateByCodeDTO**|  | |


### Return type

**LoginEnvelopeResponseDTO**

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

# **logout**
> logout()


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

const { status, data } = await apiInstance.logout();
```

### Parameters
This endpoint does not have any parameters.


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

# **refreshToken**
> LoginResponseDTO refreshToken(tokenRefreshRequest)


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration,
    TokenRefreshRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

let clientDeviceId: string; // (default to undefined)
let tokenRefreshRequest: TokenRefreshRequest; //

const { status, data } = await apiInstance.refreshToken(
    clientDeviceId,
    tokenRefreshRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRefreshRequest** | **TokenRefreshRequest**|  | |
| **clientDeviceId** | [**string**] |  | defaults to undefined|


### Return type

**LoginResponseDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userExistsByCode**
> LoginCheckResponseDTO userExistsByCode()


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

const { status, data } = await apiInstance.userExistsByCode();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LoginCheckResponseDTO**

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

