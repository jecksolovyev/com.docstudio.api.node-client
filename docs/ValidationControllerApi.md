# ValidationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEnvelopeInvite**](#getenvelopeinvite) | **GET** /api/v1/validation/envelope-authorized-invite | Get invitation info by already registered user|
|[**getEnvelopeInviteNotRegistered**](#getenvelopeinvitenotregistered) | **GET** /api/v1/validation/envelope-invite | Get invitation info by not authenticated user|
|[**getUserInvitationStatus**](#getuserinvitationstatus) | **GET** /api/v1/validation/account-invite | Get user status by account invitation code|

# **getEnvelopeInvite**
> GetEnvelopeInviteInfoDTO getEnvelopeInvite()


### Example

```typescript
import {
    ValidationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ValidationControllerApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.getEnvelopeInvite(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**GetEnvelopeInviteInfoDTO**

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

# **getEnvelopeInviteNotRegistered**
> GetEnvelopeInviteInfoDTO getEnvelopeInviteNotRegistered()


### Example

```typescript
import {
    ValidationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ValidationControllerApi(configuration);

let code: string; // (default to undefined)
let email: string; // (default to undefined)

const { status, data } = await apiInstance.getEnvelopeInviteNotRegistered(
    code,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**GetEnvelopeInviteInfoDTO**

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

# **getUserInvitationStatus**
> UserStatusInfo getUserInvitationStatus()


### Example

```typescript
import {
    ValidationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ValidationControllerApi(configuration);

let code: string; // (default to undefined)
let email: string; // (default to undefined)

const { status, data } = await apiInstance.getUserInvitationStatus(
    code,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**UserStatusInfo**

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

