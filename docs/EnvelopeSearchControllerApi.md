# EnvelopeSearchControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addNewColumn**](#addnewcolumn) | **POST** /api/v1/envelope/column | Add a new column to display|
|[**createReport**](#createreport) | **POST** /api/v1/envelope/report | Request envelopes report|
|[**deleteEnvelopeColumn**](#deleteenvelopecolumn) | **DELETE** /api/v1/envelope/column | Delete columns from displaying|
|[**getSearchFields**](#getsearchfields) | **POST** /api/v1/envelope/fields | Get search fields|
|[**getTemplateRoles**](#gettemplateroles) | **POST** /api/v1/envelope/search/roles | Retrieve all template roles|
|[**resetColumnSettings**](#resetcolumnsettings) | **POST** /api/v1/envelope/column-reset | Reset column settings|
|[**searchEnvelopes**](#searchenvelopes) | **POST** /api/v1/envelope/search | Search envelopes|
|[**searchEnvelopesByRequest**](#searchenvelopesbyrequest) | **POST** /api/v1/envelope/search/ai | Search envelopes by a natural language request|
|[**searchEnvelopesForApproval**](#searchenvelopesforapproval) | **POST** /api/v1/envelope/search-approvals | Search envelopes for approval|
|[**searchEnvelopesForReview**](#searchenvelopesforreview) | **POST** /api/v1/envelope/search-reviews | Search envelopes for review|
|[**updateEnvelopeColumn**](#updateenvelopecolumn) | **PUT** /api/v1/envelope/column/{id} | Update column to display|

# **addNewColumn**
> SingleUuidDTO addNewColumn(newEnvColumnDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    NewEnvColumnDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let newEnvColumnDTO: NewEnvColumnDTO; //

const { status, data } = await apiInstance.addNewColumn(
    mailbox,
    newEnvColumnDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newEnvColumnDTO** | **NewEnvColumnDTO**|  | |
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

# **createReport**
> createReport(reportEnvelopeRequestDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    ReportEnvelopeRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reportEnvelopeRequestDTO: ReportEnvelopeRequestDTO; //

const { status, data } = await apiInstance.createReport(
    mailbox,
    reportEnvelopeRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportEnvelopeRequestDTO** | **ReportEnvelopeRequestDTO**|  | |
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
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEnvelopeColumn**
> deleteEnvelopeColumn(deleteEnvColumnDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    DeleteEnvColumnDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let deleteEnvColumnDTO: DeleteEnvColumnDTO; //

const { status, data } = await apiInstance.deleteEnvelopeColumn(
    mailbox,
    deleteEnvColumnDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteEnvColumnDTO** | **DeleteEnvColumnDTO**|  | |
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

# **getSearchFields**
> Array<EnvelopeSearchField> getSearchFields(searchEnvelopesDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    SearchEnvelopesDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let name: string; //Field name term (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let searchEnvelopesDTO: SearchEnvelopesDTO; //

const { status, data } = await apiInstance.getSearchFields(
    name,
    mailbox,
    searchEnvelopesDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchEnvelopesDTO** | **SearchEnvelopesDTO**|  | |
| **name** | [**string**] | Field name term | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<EnvelopeSearchField>**

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

# **getTemplateRoles**
> TemplateRolesDTO getTemplateRoles(requestBody)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.getTemplateRoles(
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**TemplateRolesDTO**

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

# **resetColumnSettings**
> Array<EnvelopeViewColumn> resetColumnSettings()


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.resetColumnSettings(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<EnvelopeViewColumn>**

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

# **searchEnvelopes**
> EnvelopePageDTO searchEnvelopes(searchEnvelopesDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    SearchEnvelopesDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let searchEnvelopesDTO: SearchEnvelopesDTO; //
let offset: number; //Offset, how many envelopes to skip (optional) (default to 0)
let limit: number; //Limit, how many envelopes to retrieve (optional) (default to 25)
let uuidOnly: boolean; //Retrieve only UUID of envelope (optional) (default to undefined)

const { status, data } = await apiInstance.searchEnvelopes(
    mailbox,
    searchEnvelopesDTO,
    offset,
    limit,
    uuidOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchEnvelopesDTO** | **SearchEnvelopesDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **offset** | [**number**] | Offset, how many envelopes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how many envelopes to retrieve | (optional) defaults to 25|
| **uuidOnly** | [**boolean**] | Retrieve only UUID of envelope | (optional) defaults to undefined|


### Return type

**EnvelopePageDTO**

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

# **searchEnvelopesByRequest**
> SearchEnvelopesDTO searchEnvelopesByRequest(aiEnvelopeSearchRequest)

Interprets the request as a search filter. Apply the returned filter to the filter panel and run it with the regular search endpoint.

### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    AiEnvelopeSearchRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let aiEnvelopeSearchRequest: AiEnvelopeSearchRequest; //

const { status, data } = await apiInstance.searchEnvelopesByRequest(
    mailbox,
    aiEnvelopeSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiEnvelopeSearchRequest** | **AiEnvelopeSearchRequest**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**SearchEnvelopesDTO**

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

# **searchEnvelopesForApproval**
> EnvelopeApprovalPageDTO searchEnvelopesForApproval(searchApprovalsDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    SearchApprovalsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let searchApprovalsDTO: SearchApprovalsDTO; //
let offset: number; //Offset, how many envelopes to skip (optional) (default to 0)
let limit: number; //Limit, how many envelopes to retrieve (optional) (default to 25)
let uuidOnly: boolean; //Retrieve only UUID of envelope (optional) (default to undefined)

const { status, data } = await apiInstance.searchEnvelopesForApproval(
    mailbox,
    searchApprovalsDTO,
    offset,
    limit,
    uuidOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchApprovalsDTO** | **SearchApprovalsDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **offset** | [**number**] | Offset, how many envelopes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how many envelopes to retrieve | (optional) defaults to 25|
| **uuidOnly** | [**boolean**] | Retrieve only UUID of envelope | (optional) defaults to undefined|


### Return type

**EnvelopeApprovalPageDTO**

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

# **searchEnvelopesForReview**
> EnvelopeApprovalPageDTO searchEnvelopesForReview(searchReviewRequest)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    SearchReviewRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let searchReviewRequest: SearchReviewRequest; //
let offset: number; //Offset, how many envelopes to skip (optional) (default to 0)
let limit: number; //Limit, how many envelopes to retrieve (optional) (default to 25)
let uuidOnly: boolean; //Retrieve only UUID of envelope (optional) (default to undefined)

const { status, data } = await apiInstance.searchEnvelopesForReview(
    mailbox,
    searchReviewRequest,
    offset,
    limit,
    uuidOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchReviewRequest** | **SearchReviewRequest**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **offset** | [**number**] | Offset, how many envelopes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how many envelopes to retrieve | (optional) defaults to 25|
| **uuidOnly** | [**boolean**] | Retrieve only UUID of envelope | (optional) defaults to undefined|


### Return type

**EnvelopeApprovalPageDTO**

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

# **updateEnvelopeColumn**
> updateEnvelopeColumn(updateEnvColumnDTO)


### Example

```typescript
import {
    EnvelopeSearchControllerApi,
    Configuration,
    UpdateEnvColumnDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeSearchControllerApi(configuration);

let id: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let updateEnvColumnDTO: UpdateEnvColumnDTO; //

const { status, data } = await apiInstance.updateEnvelopeColumn(
    id,
    mailbox,
    updateEnvColumnDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEnvColumnDTO** | **UpdateEnvColumnDTO**|  | |
| **id** | [**string**] |  | defaults to undefined|
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

