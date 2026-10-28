# ExternalLinkControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createExternalLink**](#createexternallink) | **POST** /api/v1/account/{accountUuid}/external-link | Create external link|
|[**deleteExternalLink**](#deleteexternallink) | **DELETE** /api/v1/account/{accountUuid}/external-link/{linkUuid} | Delete external link|
|[**getAccountExternalLinks**](#getaccountexternallinks) | **GET** /api/v1/account/{accountUuid}/external-link | Get account external links|
|[**getMailboxList**](#getmailboxlist) | **GET** /api/v1/external-link | Get mailbox visible link list|
|[**updateExternalLink**](#updateexternallink) | **PUT** /api/v1/account/{accountUuid}/external-link/{linkUuid} | Update external link|

# **createExternalLink**
> ExternalLinkResponseDTO createExternalLink(externalLinkRequestDTO)


### Example

```typescript
import {
    ExternalLinkControllerApi,
    Configuration,
    ExternalLinkRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ExternalLinkControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let externalLinkRequestDTO: ExternalLinkRequestDTO; //

const { status, data } = await apiInstance.createExternalLink(
    accountUuid,
    externalLinkRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalLinkRequestDTO** | **ExternalLinkRequestDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**ExternalLinkResponseDTO**

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

# **deleteExternalLink**
> deleteExternalLink()


### Example

```typescript
import {
    ExternalLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ExternalLinkControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let linkUuid: string; //Link UUID (default to undefined)

const { status, data } = await apiInstance.deleteExternalLink(
    accountUuid,
    linkUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **linkUuid** | [**string**] | Link UUID | defaults to undefined|


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

# **getAccountExternalLinks**
> Array<ExternalLinkResponseDTO> getAccountExternalLinks()


### Example

```typescript
import {
    ExternalLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ExternalLinkControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getAccountExternalLinks(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**Array<ExternalLinkResponseDTO>**

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

# **getMailboxList**
> Array<ExternalLinkShortResponseDTO> getMailboxList()


### Example

```typescript
import {
    ExternalLinkControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ExternalLinkControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getMailboxList(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<ExternalLinkShortResponseDTO>**

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

# **updateExternalLink**
> ExternalLinkResponseDTO updateExternalLink(externalLinkRequestDTO)


### Example

```typescript
import {
    ExternalLinkControllerApi,
    Configuration,
    ExternalLinkRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ExternalLinkControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let linkUuid: string; //Link UUID (default to undefined)
let externalLinkRequestDTO: ExternalLinkRequestDTO; //

const { status, data } = await apiInstance.updateExternalLink(
    accountUuid,
    linkUuid,
    externalLinkRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalLinkRequestDTO** | **ExternalLinkRequestDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **linkUuid** | [**string**] | Link UUID | defaults to undefined|


### Return type

**ExternalLinkResponseDTO**

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

