# FilterSettingsControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFilterSettings**](#createfiltersettings) | **POST** /api/v1/filterSettings | Create FilterSettings for mailbox|
|[**deleteFilterSettings**](#deletefiltersettings) | **DELETE** /api/v1/filterSettings/{uuid} | Delete FilterSettings|
|[**getAllFilterSettings**](#getallfiltersettings) | **GET** /api/v1/filterSettings | Read all by mailbox|
|[**getByUuid**](#getbyuuid) | **GET** /api/v1/filterSettings/{uuid} | Get by UUID|
|[**updateFilterSettings**](#updatefiltersettings) | **PUT** /api/v1/filterSettings/{uuid} | Update FilterSettings for mailbox|

# **createFilterSettings**
> SingleUuidDTO createFilterSettings(filterSettingsCreateDTO)


### Example

```typescript
import {
    FilterSettingsControllerApi,
    Configuration,
    FilterSettingsCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FilterSettingsControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let filterSettingsCreateDTO: FilterSettingsCreateDTO; //

const { status, data } = await apiInstance.createFilterSettings(
    mailbox,
    filterSettingsCreateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterSettingsCreateDTO** | **FilterSettingsCreateDTO**|  | |
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

# **deleteFilterSettings**
> deleteFilterSettings()


### Example

```typescript
import {
    FilterSettingsControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FilterSettingsControllerApi(configuration);

let uuid: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteFilterSettings(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
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

# **getAllFilterSettings**
> Array<FilterSettingsDTO> getAllFilterSettings()


### Example

```typescript
import {
    FilterSettingsControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FilterSettingsControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getAllFilterSettings(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<FilterSettingsDTO>**

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

# **getByUuid**
> FilterSettingsDTO getByUuid()


### Example

```typescript
import {
    FilterSettingsControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FilterSettingsControllerApi(configuration);

let uuid: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getByUuid(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FilterSettingsDTO**

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

# **updateFilterSettings**
> updateFilterSettings(filterSettingsDTO)


### Example

```typescript
import {
    FilterSettingsControllerApi,
    Configuration,
    FilterSettingsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FilterSettingsControllerApi(configuration);

let uuid: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let filterSettingsDTO: FilterSettingsDTO; //

const { status, data } = await apiInstance.updateFilterSettings(
    uuid,
    mailbox,
    filterSettingsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterSettingsDTO** | **FilterSettingsDTO**|  | |
| **uuid** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


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

