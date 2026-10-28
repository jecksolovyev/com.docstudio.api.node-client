# CategoryControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCategory**](#createcategory) | **POST** /api/v1/category | Save a category|
|[**deleteCategory**](#deletecategory) | **DELETE** /api/v1/category/{id} | Delete category by Id|
|[**getAllByAccessAndType**](#getallbyaccessandtype) | **GET** /api/v1/category/{type}/{access} | Retrieve all categories by id of specified \&#39;access\&#39; type|
|[**updateCategory**](#updatecategory) | **PUT** /api/v1/category/{id} | Update the category|

# **createCategory**
> CategoryDTO createCategory(categoryUpdateRequest)


### Example

```typescript
import {
    CategoryControllerApi,
    Configuration,
    CategoryUpdateRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new CategoryControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let categoryUpdateRequest: CategoryUpdateRequest; //

const { status, data } = await apiInstance.createCategory(
    mailbox,
    categoryUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryUpdateRequest** | **CategoryUpdateRequest**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**CategoryDTO**

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

# **deleteCategory**
> deleteCategory()


### Example

```typescript
import {
    CategoryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new CategoryControllerApi(configuration);

let id: string; //Category Id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let moveTo: string; //Optional id of category to move all subordinated (if any) (optional) (default to undefined)
let keepChildren: boolean; //Optional, if true and moveTo is null all children will become root categories (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCategory(
    id,
    mailbox,
    moveTo,
    keepChildren
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Category Id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **moveTo** | [**string**] | Optional id of category to move all subordinated (if any) | (optional) defaults to undefined|
| **keepChildren** | [**boolean**] | Optional, if true and moveTo is null all children will become root categories | (optional) defaults to undefined|


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

# **getAllByAccessAndType**
> Array<CategoryDTO> getAllByAccessAndType()


### Example

```typescript
import {
    CategoryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new CategoryControllerApi(configuration);

let type: 'template' | 'scenario'; //Type of categories (default to undefined)
let access: 'mailbox' | 'account' | 'public' | 'official' | 'shared' | 'public-hidden'; //Access level to retrieve categories by (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getAllByAccessAndType(
    type,
    access,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;template&#39; | &#39;scenario&#39;**]**Array<&#39;template&#39; &#124; &#39;scenario&#39;>** | Type of categories | defaults to undefined|
| **access** | [**&#39;mailbox&#39; | &#39;account&#39; | &#39;public&#39; | &#39;official&#39; | &#39;shared&#39; | &#39;public-hidden&#39;**]**Array<&#39;mailbox&#39; &#124; &#39;account&#39; &#124; &#39;public&#39; &#124; &#39;official&#39; &#124; &#39;shared&#39; &#124; &#39;public-hidden&#39;>** | Access level to retrieve categories by | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<CategoryDTO>**

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

# **updateCategory**
> CategoryDTO updateCategory(categoryUpdateRequest)


### Example

```typescript
import {
    CategoryControllerApi,
    Configuration,
    CategoryUpdateRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new CategoryControllerApi(configuration);

let id: string; //Category Id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let categoryUpdateRequest: CategoryUpdateRequest; //

const { status, data } = await apiInstance.updateCategory(
    id,
    mailbox,
    categoryUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryUpdateRequest** | **CategoryUpdateRequest**|  | |
| **id** | [**string**] | Category Id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**CategoryDTO**

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

