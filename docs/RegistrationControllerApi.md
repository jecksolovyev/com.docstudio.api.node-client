# RegistrationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserPasswordPolicy**](#getuserpasswordpolicy) | **GET** /registration/passwordPolicy | Get user password policy|
|[**register**](#register) | **POST** /registration | Register a user with validation code|
|[**renewPassword**](#renewpassword) | **POST** /registration/renewPassword | Renew user\&#39;s password|
|[**requestResendValidationCode**](#requestresendvalidationcode) | **POST** /registration/sendRegistrationCode | Send email validation code|
|[**requestResetPassword**](#requestresetpassword) | **POST** /registration/requestPasswordReset | Request password reset|
|[**resetPassword**](#resetpassword) | **POST** /registration/resetPassword | Reset password|
|[**validation**](#validation) | **GET** /registration/validate | Validate user code from email|

# **getUserPasswordPolicy**
> PasswordPolicy getUserPasswordPolicy()


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let email: string; //Email of user (default to undefined)

const { status, data } = await apiInstance.getUserPasswordPolicy(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email of user | defaults to undefined|


### Return type

**PasswordPolicy**

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

# **register**
> LoginResponseDTO register(userCreateDTO)


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration,
    UserCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let code: string; //Validation code (default to undefined)
let userCreateDTO: UserCreateDTO; //
let codeType: 'envelopeInvite' | 'accountInvite' | 'emailValidation' | 'sharedByEmail' | 'externalAuth'; //Type of code (optional) (default to undefined)
let refreshToken: boolean; //Is refresh token needed (optional) (default to undefined)

const { status, data } = await apiInstance.register(
    code,
    userCreateDTO,
    codeType,
    refreshToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCreateDTO** | **UserCreateDTO**|  | |
| **code** | [**string**] | Validation code | defaults to undefined|
| **codeType** | [**&#39;envelopeInvite&#39; | &#39;accountInvite&#39; | &#39;emailValidation&#39; | &#39;sharedByEmail&#39; | &#39;externalAuth&#39;**]**Array<&#39;envelopeInvite&#39; &#124; &#39;accountInvite&#39; &#124; &#39;emailValidation&#39; &#124; &#39;sharedByEmail&#39; &#124; &#39;externalAuth&#39;>** | Type of code | (optional) defaults to undefined|
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
|**201** | OK |  -  |
|**405** | Method disabled by configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renewPassword**
> renewPassword(renewPasswordDTO)


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration,
    RenewPasswordDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let renewPasswordDTO: RenewPasswordDTO; //

const { status, data } = await apiInstance.renewPassword(
    renewPasswordDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renewPasswordDTO** | **RenewPasswordDTO**|  | |


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

# **requestResendValidationCode**
> object requestResendValidationCode(requestValCodeDTO)


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration,
    RequestValCodeDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let requestValCodeDTO: RequestValCodeDTO; //
let initiation: boolean; //Code for envelope initiation purpose (optional) (default to undefined)

const { status, data } = await apiInstance.requestResendValidationCode(
    requestValCodeDTO,
    initiation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestValCodeDTO** | **RequestValCodeDTO**|  | |
| **initiation** | [**boolean**] | Code for envelope initiation purpose | (optional) defaults to undefined|


### Return type

**object**

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

# **requestResetPassword**
> object requestResetPassword(requestValCodeDTO)


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration,
    RequestValCodeDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let requestValCodeDTO: RequestValCodeDTO; //

const { status, data } = await apiInstance.requestResetPassword(
    requestValCodeDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestValCodeDTO** | **RequestValCodeDTO**|  | |


### Return type

**object**

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

# **resetPassword**
> LoginResponseDTO resetPassword(resetPasswordDTO)


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration,
    ResetPasswordDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let resetPasswordDTO: ResetPasswordDTO; //

const { status, data } = await apiInstance.resetPassword(
    resetPasswordDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordDTO** | **ResetPasswordDTO**|  | |


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

# **validation**
> object validation()


### Example

```typescript
import {
    RegistrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new RegistrationControllerApi(configuration);

let code: string; //Validation code from email (default to undefined)
let type: 'validation' | 'resetPassword' | 'corporateNewPassword' | 'newPassword' | 'externalAuthentication' | 'changeEmail' | 'oneTimePassword'; //Verification type (default to undefined)

const { status, data } = await apiInstance.validation(
    code,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Validation code from email | defaults to undefined|
| **type** | [**&#39;validation&#39; | &#39;resetPassword&#39; | &#39;corporateNewPassword&#39; | &#39;newPassword&#39; | &#39;externalAuthentication&#39; | &#39;changeEmail&#39; | &#39;oneTimePassword&#39;**]**Array<&#39;validation&#39; &#124; &#39;resetPassword&#39; &#124; &#39;corporateNewPassword&#39; &#124; &#39;newPassword&#39; &#124; &#39;externalAuthentication&#39; &#124; &#39;changeEmail&#39; &#124; &#39;oneTimePassword&#39;>** | Verification type | defaults to undefined|


### Return type

**object**

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

