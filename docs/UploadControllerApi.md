# UploadControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancel**](#cancel) | **DELETE** /api/v1/upload/{uploadUuid} | Cancel import process|
|[**confirm**](#confirm) | **PUT** /api/v1/upload/{uploadUuid}/confirm | Approve import process|
|[**getImportTask**](#getimporttask) | **GET** /api/v1/upload/{uploadUuid} | Get import processing task|
|[**uploadDictionary**](#uploaddictionary) | **POST** /api/v1/upload/dictionary/{dictionaryUuid} | Upload dictionary file for importing|

# **cancel**
> cancel()


### Example

```typescript
import {
    UploadControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let uploadUuid: string; // (default to undefined)

const { status, data } = await apiInstance.cancel(
    uploadUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadUuid** | [**string**] |  | defaults to undefined|


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

# **confirm**
> confirm(confirmUploadDTO)


### Example

```typescript
import {
    UploadControllerApi,
    Configuration,
    ConfirmUploadDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let uploadUuid: string; // (default to undefined)
let confirmUploadDTO: ConfirmUploadDTO; //

const { status, data } = await apiInstance.confirm(
    uploadUuid,
    confirmUploadDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmUploadDTO** | **ConfirmUploadDTO**|  | |
| **uploadUuid** | [**string**] |  | defaults to undefined|


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

# **getImportTask**
> ImportTaskDTO getImportTask()


### Example

```typescript
import {
    UploadControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let uploadUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getImportTask(
    uploadUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadUuid** | [**string**] |  | defaults to undefined|


### Return type

**ImportTaskDTO**

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

# **uploadDictionary**
> SingleUuidDTO uploadDictionary()


### Example

```typescript
import {
    UploadControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let dictionaryUuid: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadDictionary(
    dictionaryUuid,
    mailbox,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


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

