# FileLinkControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFileLink**](#downloadfilelink) | **GET** /api/v1/file-link/{token} | Download the file of a one-time link; the link stops working|
|[**info**](#info) | **GET** /api/v1/file-link/{token}/info | What a one-time file link is for and whether it can still be used|
|[**uploadMultipart**](#uploadmultipart) | **POST** /api/v1/file-link/{token} | Upload the file of a one-time link as multipart; the link stops working|
|[**uploadRaw**](#uploadraw) | **PUT** /api/v1/file-link/{token} | Upload the file of a one-time link as the raw request body; the link stops working|

# **downloadFileLink**
> File downloadFileLink()


### Example

```typescript
import {
    FileLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FileLinkControllerApi(configuration);

let token: string; //Link token (default to undefined)

const { status, data } = await apiInstance.downloadFileLink(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Link token | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **info**
> FileLinkInfo info()


### Example

```typescript
import {
    FileLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FileLinkControllerApi(configuration);

let token: string; //Link token (default to undefined)

const { status, data } = await apiInstance.info(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Link token | defaults to undefined|


### Return type

**FileLinkInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadMultipart**
> FileUploadStatus uploadMultipart()


### Example

```typescript
import {
    FileLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FileLinkControllerApi(configuration);

let token: string; //Link token (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadMultipart(
    token,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Link token | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**FileUploadStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadRaw**
> FileUploadStatus uploadRaw()


### Example

```typescript
import {
    FileLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FileLinkControllerApi(configuration);

let token: string; //Link token (default to undefined)
let filename: string; //File name with its extension, when the link has none or another one is sent (optional) (default to undefined)

const { status, data } = await apiInstance.uploadRaw(
    token,
    filename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Link token | defaults to undefined|
| **filename** | [**string**] | File name with its extension, when the link has none or another one is sent | (optional) defaults to undefined|


### Return type

**FileUploadStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

