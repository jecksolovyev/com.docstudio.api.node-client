# EnvelopeSendControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**oneTimeSend**](#onetimesend) | **POST** /api/v1/envelope/one-time-send | The envelope will be sent just once (template will be marked as deleted)|
|[**publicQuickSendWithOneExternalDocument**](#publicquicksendwithoneexternaldocument) | **POST** /api/v1/envelope/public-quick-send | Public quick send envelope with one external document|
|[**quickSendExternalDocuments**](#quicksendexternaldocuments) | **POST** /api/v1/envelope/quick-send | Quick send envelope with external documents only|
|[**send**](#send) | **POST** /api/v1/envelope/send | Send envelope|
|[**sendByTemplateCode**](#sendbytemplatecode) | **POST** /api/v1/envelope/send-by-share-code | Send envelope by template code|

# **oneTimeSend**
> SingleUuidDTO oneTimeSend(oneTimeSendDTO)


### Example

```typescript
import {
    EnvelopeSendControllerApi,
    Configuration,
    OneTimeSendDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSendControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let oneTimeSendDTO: OneTimeSendDTO; //

const { status, data } = await apiInstance.oneTimeSend(
    mailbox,
    oneTimeSendDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oneTimeSendDTO** | **OneTimeSendDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**SingleUuidDTO**

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

# **publicQuickSendWithOneExternalDocument**
> IdResult publicQuickSendWithOneExternalDocument()


### Example

```typescript
import {
    EnvelopeSendControllerApi,
    Configuration,
    PublicQuickSend
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSendControllerApi(configuration);

let data: PublicQuickSend; // (default to undefined)
let file: File; //File for external document (default to undefined)

const { status, data } = await apiInstance.publicQuickSendWithOneExternalDocument(
    data,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **PublicQuickSend** |  | defaults to undefined|
| **file** | [**File**] | File for external document | defaults to undefined|


### Return type

**IdResult**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quickSendExternalDocuments**
> SingleUuidDTO quickSendExternalDocuments()


### Example

```typescript
import {
    EnvelopeSendControllerApi,
    Configuration,
    QuickSendDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSendControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let data: QuickSendDTO; // (default to undefined)
let files: Array<File>; //Files for external documents (default to undefined)

const { status, data } = await apiInstance.quickSendExternalDocuments(
    mailbox,
    data,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **data** | **QuickSendDTO** |  | defaults to undefined|
| **files** | **Array&lt;File&gt;** | Files for external documents | defaults to undefined|


### Return type

**SingleUuidDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send**
> SingleUuidDTO send(envPostDTO)


### Example

```typescript
import {
    EnvelopeSendControllerApi,
    Configuration,
    EnvPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSendControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envPostDTO: EnvPostDTO; //

const { status, data } = await apiInstance.send(
    mailbox,
    envPostDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envPostDTO** | **EnvPostDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**SingleUuidDTO**

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

# **sendByTemplateCode**
> LoginEnvelopeResponseDTO sendByTemplateCode(sendEnvByCodeDTO)


### Example

```typescript
import {
    EnvelopeSendControllerApi,
    Configuration,
    SendEnvByCodeDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSendControllerApi(configuration);

let sendEnvByCodeDTO: SendEnvByCodeDTO; //

const { status, data } = await apiInstance.sendByTemplateCode(
    sendEnvByCodeDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEnvByCodeDTO** | **SendEnvByCodeDTO**|  | |


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
|**201** | OK |  -  |
|**405** | Method disabled by configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

