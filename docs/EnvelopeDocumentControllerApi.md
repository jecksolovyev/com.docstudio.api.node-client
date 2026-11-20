# EnvelopeDocumentControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cloneAttachment**](#cloneattachment) | **POST** /api/v1/envelope/clone-attachment | Clone an existing attachment|
|[**createAttachment**](#createattachment) | **POST** /api/v1/envelope/attachment | Create/upload new attachment|
|[**createPdfAttachment**](#createpdfattachment) | **POST** /api/v1/envelope/pdf-attachment | Create/upload new PDF attachment|
|[**downloadEnvelopeAttachment**](#downloadenvelopeattachment) | **GET** /api/v1/envelope/attachment | Download attachment with specific type or raw|
|[**downloadFinalPdf**](#downloadfinalpdf) | **GET** /api/v1/envelope/{id}/download-final-pdf | Download final PDF|
|[**downloadSharedAttachment**](#downloadsharedattachment) | **GET** /api/v1/envelope/shared-attachment | Download shared attachment for specific provider|
|[**getArchiveInfo**](#getarchiveinfo) | **GET** /api/v1/envelope/attachment/archive-info | Get attachment archive info (p7s, asice, pdf)|
|[**getAttachmentPageSizes**](#getattachmentpagesizes) | **GET** /api/v1/envelope/attachment/page-sizes | Get attachment page sizes|
|[**getDocumentPrintVersion**](#getdocumentprintversion) | **GET** /api/v1/envelope/{id}/for-print | Get document PDF for printing|
|[**getEnvelopeSharedZip**](#getenvelopesharedzip) | **GET** /api/v1/envelope/download-shared | Get shared zip archive|
|[**getEnvelopeZip**](#getenvelopezip) | **GET** /api/v1/envelope/{id}/zip | Get envelope or document zip archive|
|[**shareEnvelopesByEmail**](#shareenvelopesbyemail) | **POST** /api/v1/envelope/share-archive | Share envelopes by email|

# **cloneAttachment**
> UploadedAttachmentDTO cloneAttachment()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let attachmentUuid: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.cloneAttachment(
    attachmentUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentUuid** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**UploadedAttachmentDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAttachment**
> UploadedAttachmentDTO createAttachment()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let file: File; // (default to undefined)
let type: 'all' | 'document' | 'file' | 'image' | 'archive'; // (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.createAttachment(
    file,
    type,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **type** | [**&#39;all&#39; | &#39;document&#39; | &#39;file&#39; | &#39;image&#39; | &#39;archive&#39;**]**Array<&#39;all&#39; &#124; &#39;document&#39; &#124; &#39;file&#39; &#124; &#39;image&#39; &#124; &#39;archive&#39;>** |  | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**UploadedAttachmentDTO**

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

# **createPdfAttachment**
> UploadedAttachmentDTO createPdfAttachment()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let file: File; // (default to undefined)
let action: 'DELETE' | 'KEEP' | 'KEEP_SAFE'; //Action for fields inside the PDF file (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.createPdfAttachment(
    file,
    action,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **action** | [**&#39;DELETE&#39; | &#39;KEEP&#39; | &#39;KEEP_SAFE&#39;**]**Array<&#39;DELETE&#39; &#124; &#39;KEEP&#39; &#124; &#39;KEEP_SAFE&#39;>** | Action for fields inside the PDF file | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**UploadedAttachmentDTO**

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

# **downloadEnvelopeAttachment**
> File downloadEnvelopeAttachment()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let accept: string; // (default to undefined)
let attachmentUuid: string; //Attachment UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeUuid: string; //Envelope UUID (optional) (default to undefined)

const { status, data } = await apiInstance.downloadEnvelopeAttachment(
    accept,
    attachmentUuid,
    mailbox,
    envelopeUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | defaults to undefined|
| **attachmentUuid** | [**string**] | Attachment UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFinalPdf**
> File downloadFinalPdf()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document ID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)

const { status, data } = await apiInstance.downloadFinalPdf(
    id,
    documentId,
    mailbox,
    wait
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document ID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|


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

# **downloadSharedAttachment**
> File downloadSharedAttachment()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let provider: string; //Sharing provider name (default to undefined)
let attachmentUuid: string; //Attachment UUID (default to undefined)

const { status, data } = await apiInstance.downloadSharedAttachment(
    provider,
    attachmentUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | Sharing provider name | defaults to undefined|
| **attachmentUuid** | [**string**] | Attachment UUID | defaults to undefined|


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

# **getArchiveInfo**
> ArchiveAttachmentInfo getArchiveInfo()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let attachmentId: string; //Attachment UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeId: string; //Envelope UUID (optional) (default to undefined)
let convert2Pdf: boolean; //Convert to PDF (optional) (default to undefined)

const { status, data } = await apiInstance.getArchiveInfo(
    attachmentId,
    mailbox,
    envelopeId,
    convert2Pdf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] | Attachment UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **envelopeId** | [**string**] | Envelope UUID | (optional) defaults to undefined|
| **convert2Pdf** | [**boolean**] | Convert to PDF | (optional) defaults to undefined|


### Return type

**ArchiveAttachmentInfo**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAttachmentPageSizes**
> PdfPageSizes getAttachmentPageSizes()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let attachmentUuid: string; //Attachment UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeUuid: string; //Envelope UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getAttachmentPageSizes(
    attachmentUuid,
    mailbox,
    envelopeUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentUuid** | [**string**] | Attachment UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | (optional) defaults to undefined|


### Return type

**PdfPageSizes**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentPrintVersion**
> File getDocumentPrintVersion()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentPrintVersion(
    id,
    documentId,
    mailbox,
    wait
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|


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

# **getEnvelopeSharedZip**
> File getEnvelopeSharedZip()


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let code: string; //Code for downloading (default to undefined)

const { status, data } = await apiInstance.getEnvelopeSharedZip(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Code for downloading | defaults to undefined|


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

# **getEnvelopeZip**
> File getEnvelopeZip()

Anonymous users download it with the access code of a payment link; files visible only to some roles are not included

### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document ID (optional) (default to undefined)
let excludeFiles: string; //Mask to exclude some files. c - for signature/processing Certificate, p - for Printable version, a - for Audit trail (optional) (default to undefined)
let zipStructureName: string; //The name of pre-saved zip structure in the template (optional) (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)
let accessCode: string; //Access code of a payment link, for anonymous users (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvelopeZip(
    id,
    documentId,
    excludeFiles,
    zipStructureName,
    wait,
    accessCode,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document ID | (optional) defaults to undefined|
| **excludeFiles** | [**string**] | Mask to exclude some files. c - for signature/processing Certificate, p - for Printable version, a - for Audit trail | (optional) defaults to undefined|
| **zipStructureName** | [**string**] | The name of pre-saved zip structure in the template | (optional) defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|
| **accessCode** | [**string**] | Access code of a payment link, for anonymous users | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


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

# **shareEnvelopesByEmail**
> shareEnvelopesByEmail(envelopeSharedArchiveRequestDTO)


### Example

```typescript
import {
    EnvelopeDocumentControllerApi,
    Configuration,
    EnvelopeSharedArchiveRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeDocumentControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeSharedArchiveRequestDTO: EnvelopeSharedArchiveRequestDTO; //

const { status, data } = await apiInstance.shareEnvelopesByEmail(
    mailbox,
    envelopeSharedArchiveRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeSharedArchiveRequestDTO** | **EnvelopeSharedArchiveRequestDTO**|  | |
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

