# AliasControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAlias**](#createalias) | **POST** /api/v1/alias | Save alias to mailbox|
|[**deleteAlias**](#deletealias) | **DELETE** /api/v1/alias | Delete alias|
|[**getAliasesByMailbox**](#getaliasesbymailbox) | **GET** /api/v1/alias/mailbox | Get aliases by mailbox|
|[**getAliasesByQualifiedId**](#getaliasesbyqualifiedid) | **GET** /api/v1/alias/qualifiedID/{id} | Get mailbox UUID by qualified ID|

# **createAlias**
> AliasDTO createAlias(aliasDTO)


### Example

```typescript
import {
    AliasControllerApi,
    Configuration,
    AliasDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AliasControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let aliasDTO: AliasDTO; //

const { status, data } = await apiInstance.createAlias(
    mailbox,
    aliasDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aliasDTO** | **AliasDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**AliasDTO**

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

# **deleteAlias**
> deleteAlias()


### Example

```typescript
import {
    AliasControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AliasControllerApi(configuration);

let name: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteAlias(
    name,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAliasesByMailbox**
> Array<AliasDTO> getAliasesByMailbox()


### Example

```typescript
import {
    AliasControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AliasControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let qualified: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAliasesByMailbox(
    mailbox,
    qualified
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **qualified** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<AliasDTO>**

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

# **getAliasesByQualifiedId**
> SingleUuidDTO getAliasesByQualifiedId()


### Example

```typescript
import {
    AliasControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AliasControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAliasesByQualifiedId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SingleUuidDTO**

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

