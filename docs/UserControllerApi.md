# UserControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeInitials**](#changeinitials) | **PUT** /api/v1/user/initials | Update user\&#39;s initials in base64 format|
|[**changePassword**](#changepassword) | **PUT** /api/v1/user/password | Update user\&#39;s password|
|[**changeSignature**](#changesignature) | **PUT** /api/v1/user/signature | Update user\&#39;s eink signature in base64 format|
|[**deleteUser**](#deleteuser) | **DELETE** /api/v1/user | Delete user himself|
|[**findUser**](#finduser) | **GET** /api/v1/user/search | Find user|
|[**getAvatar**](#getavatar) | **GET** /api/v1/user/avatar/{id} | Retrieve user avatar|
|[**getCorporateUserProfile**](#getcorporateuserprofile) | **GET** /api/v1/user/profile/{id}/account/{accountUuid} | Retrieve corporate user profile|
|[**getProfile**](#getprofile) | **GET** /api/v1/user/profile | Retrieve self profile|
|[**getUserMailboxesInfo**](#getusermailboxesinfo) | **POST** /api/v1/user/info | Retrieve users info|
|[**patchCorporateUserProfile**](#patchcorporateuserprofile) | **PATCH** /api/v1/user/profile/{userId}/account/{accountId} | Partial update corporate user\&#39;s profile|
|[**patchPreferences**](#patchpreferences) | **PATCH** /api/v1/user/preferences | Patch user preferences|
|[**patchProfile**](#patchprofile) | **PATCH** /api/v1/user/profile | Patch user profile|
|[**setPreferences**](#setpreferences) | **POST** /api/v1/user/preferences | Set user preferences|
|[**updateCorporateUserProfile**](#updatecorporateuserprofile) | **PUT** /api/v1/user/profile/{id}/account/{accountUuid} | Update corporate user\&#39;s profile|
|[**updateProfile**](#updateprofile) | **PUT** /api/v1/user/profile | Update self profile|

# **changeInitials**
> changeInitials()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.changeInitials(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


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

# **changePassword**
> changePassword(updatePasswordDTO)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UpdatePasswordDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let updatePasswordDTO: UpdatePasswordDTO; //

const { status, data } = await apiInstance.changePassword(
    updatePasswordDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePasswordDTO** | **UpdatePasswordDTO**|  | |


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

# **changeSignature**
> changeSignature()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.changeSignature(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


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

# **deleteUser**
> deleteUser()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let checkMessage: string; //Proof message (default to undefined)
let leaveExisting: boolean; //Leave existing account and mailbox. In this case mailbox and account should have other owners, otherwise error will be returned. (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    checkMessage,
    leaveExisting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkMessage** | [**string**] | Proof message | defaults to undefined|
| **leaveExisting** | [**boolean**] | Leave existing account and mailbox. In this case mailbox and account should have other owners, otherwise error will be returned. | defaults to undefined|


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

# **findUser**
> Array<UserDTO> findUser()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let keyword: string; // (default to undefined)
let exclude: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.findUser(
    keyword,
    exclude
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyword** | [**string**] |  | defaults to undefined|
| **exclude** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<UserDTO>**

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

# **getAvatar**
> File getAvatar()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let id: string; // (default to undefined)
let initials: boolean; //Get default avatar (optional) (default to undefined)

const { status, data } = await apiInstance.getAvatar(
    id,
    initials
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **initials** | [**boolean**] | Get default avatar | (optional) defaults to undefined|


### Return type

**File**

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

# **getCorporateUserProfile**
> CorporateProfileDTO getCorporateUserProfile()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let id: string; // (default to undefined)
let accountUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getCorporateUserProfile(
    id,
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**CorporateProfileDTO**

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

# **getProfile**
> ProfileDTO getProfile()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

const { status, data } = await apiInstance.getProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProfileDTO**

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

# **getUserMailboxesInfo**
> { [key: string]: UserInfoDTO; } getUserMailboxesInfo(requestBody)


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let requestBody: Array<string>; //

const { status, data } = await apiInstance.getUserMailboxesInfo(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |


### Return type

**{ [key: string]: UserInfoDTO; }**

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

# **patchCorporateUserProfile**
> CorporateProfileDTO patchCorporateUserProfile(patchProfile)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    PatchProfile
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let userId: string; // (default to undefined)
let accountId: string; // (default to undefined)
let patchProfile: PatchProfile; //

const { status, data } = await apiInstance.patchCorporateUserProfile(
    userId,
    accountId,
    patchProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchProfile** | **PatchProfile**|  | |
| **userId** | [**string**] |  | defaults to undefined|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CorporateProfileDTO**

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

# **patchPreferences**
> patchPreferences(userPreferences)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UserPreferences
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let userPreferences: UserPreferences; //

const { status, data } = await apiInstance.patchPreferences(
    userPreferences
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPreferences** | **UserPreferences**|  | |


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

# **patchProfile**
> ProfileDTO patchProfile(patchProfile)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    PatchProfile
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let patchProfile: PatchProfile; //

const { status, data } = await apiInstance.patchProfile(
    patchProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchProfile** | **PatchProfile**|  | |


### Return type

**ProfileDTO**

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

# **setPreferences**
> setPreferences(userPreferences)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UserPreferences
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let userPreferences: UserPreferences; //

const { status, data } = await apiInstance.setPreferences(
    userPreferences
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPreferences** | **UserPreferences**|  | |


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

# **updateCorporateUserProfile**
> CorporateProfileDTO updateCorporateUserProfile(updateProfileDTO)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UpdateProfileDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let id: string; // (default to undefined)
let accountUuid: string; // (default to undefined)
let updateProfileDTO: UpdateProfileDTO; //

const { status, data } = await apiInstance.updateCorporateUserProfile(
    id,
    accountUuid,
    updateProfileDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileDTO** | **UpdateProfileDTO**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**CorporateProfileDTO**

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

# **updateProfile**
> ProfileDTO updateProfile(updateProfileDTO)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UpdateProfileDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let updateProfileDTO: UpdateProfileDTO; //

const { status, data } = await apiInstance.updateProfile(
    updateProfileDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileDTO** | **UpdateProfileDTO**|  | |


### Return type

**ProfileDTO**

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

