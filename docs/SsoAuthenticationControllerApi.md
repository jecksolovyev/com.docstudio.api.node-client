# SsoAuthenticationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**loginOauth2**](#loginoauth2) | **GET** /oauth2/authorization/{registrationId} | Login with oauth2|
|[**loginSaml2**](#loginsaml2) | **GET** /saml2/authenticate/{registrationId} | Login with SAML2|
|[**samlMetadata**](#samlmetadata) | **GET** /saml/metadata | Returns SAML Metadata|

# **loginOauth2**
> loginOauth2()


### Example

```typescript
import {
    SsoAuthenticationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new SsoAuthenticationControllerApi(configuration);

let registrationId: string; // (default to undefined)
let redirectUrl: string; //The URL where the token or error message should be sent when redirecting using the GET method (default is {UI_HOST}/sso-login (optional) (default to undefined)
let forwardPath: string; //The path to which the user should be redirected within the host {redirectUrl} (optional) (default to undefined)

const { status, data } = await apiInstance.loginOauth2(
    registrationId,
    redirectUrl,
    forwardPath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registrationId** | [**string**] |  | defaults to undefined|
| **redirectUrl** | [**string**] | The URL where the token or error message should be sent when redirecting using the GET method (default is {UI_HOST}/sso-login | (optional) defaults to undefined|
| **forwardPath** | [**string**] | The path to which the user should be redirected within the host {redirectUrl} | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginSaml2**
> loginSaml2()


### Example

```typescript
import {
    SsoAuthenticationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new SsoAuthenticationControllerApi(configuration);

let registrationId: string; // (default to undefined)
let redirectUrl: string; //The URL where the token or error message should be sent when redirecting using the GET method (default is {UI_HOST}/sso-login (optional) (default to undefined)
let forwardPath: string; //The path to which the user should be redirected within the host {redirectUrl} (optional) (default to undefined)

const { status, data } = await apiInstance.loginSaml2(
    registrationId,
    redirectUrl,
    forwardPath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registrationId** | [**string**] |  | defaults to undefined|
| **redirectUrl** | [**string**] | The URL where the token or error message should be sent when redirecting using the GET method (default is {UI_HOST}/sso-login | (optional) defaults to undefined|
| **forwardPath** | [**string**] | The path to which the user should be redirected within the host {redirectUrl} | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **samlMetadata**
> string samlMetadata()


### Example

```typescript
import {
    SsoAuthenticationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new SsoAuthenticationControllerApi(configuration);

const { status, data } = await apiInstance.samlMetadata();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

