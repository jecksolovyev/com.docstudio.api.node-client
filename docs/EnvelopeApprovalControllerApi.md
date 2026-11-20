# EnvelopeApprovalControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addReviewers**](#addreviewers) | **PUT** /api/v1/envelope/editorial-review/{id}/flow | Add reviewers to a running editorial review|
|[**cancelApprovalFlow**](#cancelapprovalflow) | **DELETE** /api/v1/envelope/{id}/approval/{flowUuid} | Cancel envelope approval|
|[**envelopeApproval**](#envelopeapproval) | **PUT** /api/v1/envelope/approval | Approve or Reject envelopes|
|[**envelopeApprovalHistory**](#envelopeapprovalhistory) | **GET** /api/v1/envelope/{id}/approval-history | Get approval history|
|[**getApprovalFlow**](#getapprovalflow) | **GET** /api/v1/envelope/{id}/approval/{flowUuid} | Get envelope approval|
|[**reworkEditorialReview**](#reworkeditorialreview) | **POST** /api/v1/envelope/editorial-review/{id}/rework | Send editorial review back for rework|
|[**sendForApproval**](#sendforapproval) | **PUT** /api/v1/envelope/send-for-approval | Send envelope for approval|
|[**startEditorialReviewForExternalDocuments**](#starteditorialreviewforexternaldocuments) | **POST** /api/v1/envelope/editorial-review | Start editorial review of DOC, DOCX|

# **addReviewers**
> addReviewers(reviewFlowUpdateRequest)


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration,
    ReviewFlowUpdateRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let id: string; //Envelope of the editorial review (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reviewFlowUpdateRequest: ReviewFlowUpdateRequest; //

const { status, data } = await apiInstance.addReviewers(
    id,
    mailbox,
    reviewFlowUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewFlowUpdateRequest** | **ReviewFlowUpdateRequest**|  | |
| **id** | [**string**] | Envelope of the editorial review | defaults to undefined|
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

# **cancelApprovalFlow**
> cancelApprovalFlow()


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let id: string; //Envelope to approve (default to undefined)
let flowUuid: string; //Flow to approve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.cancelApprovalFlow(
    id,
    flowUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope to approve | defaults to undefined|
| **flowUuid** | [**string**] | Flow to approve | defaults to undefined|
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

# **envelopeApproval**
> envelopeApproval(approvalStatusDTO)


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration,
    ApprovalStatusDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let approvalStatusDTO: ApprovalStatusDTO; //

const { status, data } = await apiInstance.envelopeApproval(
    mailbox,
    approvalStatusDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approvalStatusDTO** | **ApprovalStatusDTO**|  | |
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

# **envelopeApprovalHistory**
> Array<EnvelopeApprovalHistoryDTO> envelopeApprovalHistory()


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.envelopeApprovalHistory(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<EnvelopeApprovalHistoryDTO>**

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

# **getApprovalFlow**
> EnvelopeApprovalHistoryDTO getApprovalFlow()


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let id: string; //Envelope to approve (default to undefined)
let flowUuid: string; //Flow to approve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getApprovalFlow(
    id,
    flowUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope to approve | defaults to undefined|
| **flowUuid** | [**string**] | Flow to approve | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**EnvelopeApprovalHistoryDTO**

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

# **reworkEditorialReview**
> reworkEditorialReview()


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration,
    ReviewReworkRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let id: string; //Id of envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reviewReworkRequest: ReviewReworkRequest; // (optional)

const { status, data } = await apiInstance.reworkEditorialReview(
    id,
    mailbox,
    reviewReworkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewReworkRequest** | **ReviewReworkRequest**|  | |
| **id** | [**string**] | Id of envelope | defaults to undefined|
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

# **sendForApproval**
> SingleUuidDTO sendForApproval(envelopeApprovalRequestDTO)


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration,
    EnvelopeApprovalRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeApprovalRequestDTO: EnvelopeApprovalRequestDTO; //

const { status, data } = await apiInstance.sendForApproval(
    mailbox,
    envelopeApprovalRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeApprovalRequestDTO** | **EnvelopeApprovalRequestDTO**|  | |
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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEditorialReviewForExternalDocuments**
> SingleUuidDTO startEditorialReviewForExternalDocuments()


### Example

```typescript
import {
    EnvelopeApprovalControllerApi,
    Configuration,
    EditorialReviewInitRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeApprovalControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let data: EditorialReviewInitRequest; // (default to undefined)
let files: Array<File>; //Files for external documents (default to undefined)

const { status, data } = await apiInstance.startEditorialReviewForExternalDocuments(
    mailbox,
    data,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **data** | **EditorialReviewInitRequest** |  | defaults to undefined|
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

