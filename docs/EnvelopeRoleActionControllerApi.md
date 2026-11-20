# EnvelopeRoleActionControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approve**](#approve) | **POST** /api/v1/envelope/approve | Approve envelope|
|[**fill**](#fill) | **PUT** /api/v1/envelope/fill | Fill envelope|
|[**generateStamp**](#generatestamp) | **POST** /api/v1/envelope/generate-stamp | Generate stamp by certificate|
|[**getDocumentFileForSign**](#getdocumentfileforsign) | **GET** /api/v1/envelope/{id}/for-sign-file | Get BINARY or XML for signing|
|[**getDocumentsForSign**](#getdocumentsforsign) | **POST** /api/v1/envelope/{id}/for-sign | BINARYs and XMLs for signing|
|[**getMassSigningReport**](#getmasssigningreport) | **GET** /api/v1/envelope/signing-report/{sessionId} | Get mass signing report|
|[**signEnvelope**](#signenvelope) | **PUT** /api/v1/envelope/{id}/sign | Sign envelope documents|
|[**signSES**](#signses) | **POST** /api/v1/envelope/{id}/sign-ses | Sign envelope with SES|

# **approve**
> SingleUuidDTO approve(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.approve(
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
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

# **fill**
> fill(envDTO)


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration,
    EnvDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envDTO: EnvDTO; //

const { status, data } = await apiInstance.fill(
    mailbox,
    envDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envDTO** | **EnvDTO**|  | |
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

# **generateStamp**
> File generateStamp(stampRequestDTO)


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration,
    StampRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let stampRequestDTO: StampRequestDTO; //

const { status, data } = await apiInstance.generateStamp(
    mailbox,
    stampRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stampRequestDTO** | **StampRequestDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentFileForSign**
> File getDocumentFileForSign()


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document ID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let xml: boolean; //Is XML? (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentFileForSign(
    id,
    documentId,
    mailbox,
    xml
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document ID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **xml** | [**boolean**] | Is XML? | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentsForSign**
> Array<DocumentForSigningDTO> getDocumentsForSign(documentsForSignRequestDTO)


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration,
    DocumentsForSignRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let documentsForSignRequestDTO: DocumentsForSignRequestDTO; //
let sessionId: string; //Mass signing session UUID (optional) (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)
let forceGost: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentsForSign(
    id,
    mailbox,
    documentsForSignRequestDTO,
    sessionId,
    wait,
    forceGost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentsForSignRequestDTO** | **DocumentsForSignRequestDTO**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **sessionId** | [**string**] | Mass signing session UUID | (optional) defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|
| **forceGost** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<DocumentForSigningDTO>**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMassSigningReport**
> File getMassSigningReport()


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let sessionId: string; //Mass signing session UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getMassSigningReport(
    sessionId,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] | Mass signing session UUID | defaults to undefined|
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

# **signEnvelope**
> signEnvelope(envelopeDocumentSignaturesDTO)


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let id: string; //Envelope to update (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeDocumentSignaturesDTO: Array<EnvelopeDocumentSignaturesDTO>; //
let sessionId: string; //Mass signing session UUID (optional) (default to undefined)

const { status, data } = await apiInstance.signEnvelope(
    id,
    mailbox,
    envelopeDocumentSignaturesDTO,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeDocumentSignaturesDTO** | **Array<EnvelopeDocumentSignaturesDTO>**|  | |
| **id** | [**string**] | Envelope to update | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **sessionId** | [**string**] | Mass signing session UUID | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signSES**
> signSES(body)


### Example

```typescript
import {
    EnvelopeRoleActionControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeRoleActionControllerApi(configuration);

let id: string; //Envelope to fill (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let body: string; //
let sessionId: string; //Mass signing session UUID (optional) (default to undefined)

const { status, data } = await apiInstance.signSES(
    id,
    mailbox,
    body,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **id** | [**string**] | Envelope to fill | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **sessionId** | [**string**] | Mass signing session UUID | (optional) defaults to undefined|


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

