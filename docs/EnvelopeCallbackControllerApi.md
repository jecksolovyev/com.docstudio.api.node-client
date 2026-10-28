# EnvelopeCallbackControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkCallback**](#checkcallback) | **GET** /api/v1/envelope/callback/{callbackUuid}/check | Check callback with certain envelope|
|[**createCallback**](#createcallback) | **POST** /api/v1/envelope/callback/add | Add new callback|
|[**getCallbackRequestPayload**](#getcallbackrequestpayload) | **GET** /api/v1/envelope/callback/callbackRequestPayload | Check CallbackEnvelopeDataDTO as an example of callback payload|
|[**listCallbacks**](#listcallbacks) | **GET** /api/v1/envelope/callback/list | List callbacks|
|[**removeCallback**](#removecallback) | **DELETE** /api/v1/envelope/callback/{callbackUuid}/remove | Delete callback|
|[**sendCallback**](#sendcallback) | **GET** /api/v1/envelope/callback/{callbackUuid}/send | Send callback with certain envelope|

# **checkCallback**
> EnvelopeCheckResultDTO checkCallback()


### Example

```typescript
import {
    EnvelopeCallbackControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCallbackControllerApi(configuration);

let callbackUuid: string; //Callback id (default to undefined)
let envelopeUuid: string; //Envelope UUID (default to undefined)
let mailboxUuid: string; //Mailbox UUID (default to undefined)

const { status, data } = await apiInstance.checkCallback(
    callbackUuid,
    envelopeUuid,
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **callbackUuid** | [**string**] | Callback id | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | defaults to undefined|
| **mailboxUuid** | [**string**] | Mailbox UUID | defaults to undefined|


### Return type

**EnvelopeCheckResultDTO**

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

# **createCallback**
> EnvelopeCallbackDTO createCallback(createEnvelopeCallbackDTO)


### Example

```typescript
import {
    EnvelopeCallbackControllerApi,
    Configuration,
    CreateEnvelopeCallbackDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCallbackControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let createEnvelopeCallbackDTO: CreateEnvelopeCallbackDTO; //

const { status, data } = await apiInstance.createCallback(
    mailbox,
    createEnvelopeCallbackDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEnvelopeCallbackDTO** | **CreateEnvelopeCallbackDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**EnvelopeCallbackDTO**

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

# **getCallbackRequestPayload**
> CallbackEnvelopeDataDTO getCallbackRequestPayload()


### Example

```typescript
import {
    EnvelopeCallbackControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCallbackControllerApi(configuration);

const { status, data } = await apiInstance.getCallbackRequestPayload();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CallbackEnvelopeDataDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCallbacks**
> Array<EnvelopeCallbackDTO> listCallbacks()


### Example

```typescript
import {
    EnvelopeCallbackControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCallbackControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.listCallbacks(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<EnvelopeCallbackDTO>**

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

# **removeCallback**
> removeCallback()


### Example

```typescript
import {
    EnvelopeCallbackControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCallbackControllerApi(configuration);

let callbackUuid: string; //Callback id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.removeCallback(
    callbackUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **callbackUuid** | [**string**] | Callback id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


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

# **sendCallback**
> EnvelopeSendResultDTO sendCallback()


### Example

```typescript
import {
    EnvelopeCallbackControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCallbackControllerApi(configuration);

let callbackUuid: string; //Callback id (default to undefined)
let envelopeUuid: string; //Envelope UUID (default to undefined)
let mailboxUuid: string; //Mailbox UUID (default to undefined)

const { status, data } = await apiInstance.sendCallback(
    callbackUuid,
    envelopeUuid,
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **callbackUuid** | [**string**] | Callback id | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | defaults to undefined|
| **mailboxUuid** | [**string**] | Mailbox UUID | defaults to undefined|


### Return type

**EnvelopeSendResultDTO**

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

