# AuditTrailControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addAuditTrailRecord**](#addaudittrailrecord) | **PUT** /api/v1/audittrail/envelope/{uuid} | |
|[**generateAuditTrailPdf**](#generateaudittrailpdf) | **GET** /api/v1/audittrail/pdf/{uuid} | Download audit trail pdf for envelope|
|[**getAuditTrailByEnvelope**](#getaudittrailbyenvelope) | **GET** /api/v1/audittrail/envelope/{uuid} | |

# **addAuditTrailRecord**
> addAuditTrailRecord(auditTrailInfoRecordDTO)


### Example

```typescript
import {
    AuditTrailControllerApi,
    Configuration,
    AuditTrailInfoRecordDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuditTrailControllerApi(configuration);

let uuid: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let auditTrailInfoRecordDTO: AuditTrailInfoRecordDTO; //

const { status, data } = await apiInstance.addAuditTrailRecord(
    uuid,
    mailbox,
    auditTrailInfoRecordDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **auditTrailInfoRecordDTO** | **AuditTrailInfoRecordDTO**|  | |
| **uuid** | [**string**] | Envelope UUID | defaults to undefined|
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

# **generateAuditTrailPdf**
> File generateAuditTrailPdf()


### Example

```typescript
import {
    AuditTrailControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuditTrailControllerApi(configuration);

let uuid: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.generateAuditTrailPdf(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditTrailByEnvelope**
> Array<AuditTrailDTO> getAuditTrailByEnvelope()


### Example

```typescript
import {
    AuditTrailControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AuditTrailControllerApi(configuration);

let uuid: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getAuditTrailByEnvelope(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<AuditTrailDTO>**

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

