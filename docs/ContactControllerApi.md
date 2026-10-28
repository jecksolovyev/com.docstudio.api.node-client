# ContactControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createContact**](#createcontact) | **POST** /api/v1/contact | Save a contact|
|[**deleteContact**](#deletecontact) | **DELETE** /api/v1/contact/{id} | Delete contact by Id|
|[**searchOrList**](#searchorlist) | **GET** /api/v1/contact/list | Retrieve all contacts by id of specified \&#39;access\&#39; type and name|
|[**updateContact**](#updatecontact) | **PUT** /api/v1/contact/{id} | Update the contact|

# **createContact**
> ContactResponseDTO createContact(contactDTO)


### Example

```typescript
import {
    ContactControllerApi,
    Configuration,
    ContactDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let contactDTO: ContactDTO; //

const { status, data } = await apiInstance.createContact(
    mailbox,
    contactDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactDTO** | **ContactDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ContactResponseDTO**

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

# **deleteContact**
> deleteContact()


### Example

```typescript
import {
    ContactControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let id: string; //Contact UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteContact(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Contact UUID | defaults to undefined|
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

# **searchOrList**
> PageDTOContactResponseDTO searchOrList()


### Example

```typescript
import {
    ContactControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let keyword: string; //Request parameter, term to search template by (optional) (default to undefined)
let offset: number; //Offset, how much TemplateInfo to skip (optional) (default to 0)
let limit: number; //Limit, how much TemplateInfo to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.searchOrList(
    mailbox,
    keyword,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **keyword** | [**string**] | Request parameter, term to search template by | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how much TemplateInfo to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much TemplateInfo to retrieve | (optional) defaults to 25|


### Return type

**PageDTOContactResponseDTO**

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

# **updateContact**
> ContactResponseDTO updateContact(contactDTO)


### Example

```typescript
import {
    ContactControllerApi,
    Configuration,
    ContactDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let id: string; //Contact UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let contactDTO: ContactDTO; //

const { status, data } = await apiInstance.updateContact(
    id,
    mailbox,
    contactDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactDTO** | **ContactDTO**|  | |
| **id** | [**string**] | Contact UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ContactResponseDTO**

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

