# FormControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveFormEnvelope**](#approveformenvelope) | **POST** /api/v1/form/envelope/approve | Approve form envelope|
|[**createNewForm**](#createnewform) | **POST** /api/v1/form | Create new form|
|[**deleteForm**](#deleteform) | **DELETE** /api/v1/form/{id} | Delete form|
|[**fillFormEnvelope**](#fillformenvelope) | **POST** /api/v1/form/envelope/fill | Fill form envelope|
|[**forSignFile**](#forsignfile) | **GET** /api/v1/form/for-sign-file | Get BINARY or XML for signing|
|[**getForm**](#getform) | **GET** /api/v1/form/{id} | Get form|
|[**getFormDocumentPrintVersion**](#getformdocumentprintversion) | **GET** /api/v1/form/envelope/for-print | Get document PDF for printing|
|[**getFormDocumentsForSign**](#getformdocumentsforsign) | **POST** /api/v1/form/for-sign | BINARYs and XMLs for signing|
|[**getFormView**](#getformview) | **GET** /api/v1/form/view | Get form view|
|[**rejectFormEnvelope**](#rejectformenvelope) | **DELETE** /api/v1/form/envelope | Reject form envelope|
|[**sendFormEnvelope**](#sendformenvelope) | **POST** /api/v1/form/envelope/send | Create form envelope / form fill first step|
|[**signFormEnvelope**](#signformenvelope) | **PUT** /api/v1/form/envelope/sign | Sign form envelope documents|
|[**updateForm**](#updateform) | **PUT** /api/v1/form/{id} | Update form|

# **approveFormEnvelope**
> FormSend approveFormEnvelope()


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let envelopeId: string; //Envelope to approve (optional) (default to undefined)

const { status, data } = await apiInstance.approveFormEnvelope(
    envelopeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeId** | [**string**] | Envelope to approve | (optional) defaults to undefined|


### Return type

**FormSend**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createNewForm**
> FormGet createNewForm(formCreate)


### Example

```typescript
import {
    FormControllerApi,
    Configuration,
    FormCreate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let formCreate: FormCreate; //

const { status, data } = await apiInstance.createNewForm(
    mailbox,
    formCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formCreate** | **FormCreate**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FormGet**

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

# **deleteForm**
> deleteForm()


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let id: string; //Form UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteForm(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Form UUID | defaults to undefined|
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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fillFormEnvelope**
> FormSend fillFormEnvelope(sendEnvelope)


### Example

```typescript
import {
    FormControllerApi,
    Configuration,
    SendEnvelope
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let sendEnvelope: SendEnvelope; //

const { status, data } = await apiInstance.fillFormEnvelope(
    sendEnvelope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEnvelope** | **SendEnvelope**|  | |


### Return type

**FormSend**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forSignFile**
> File forSignFile()


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let documentId: string; //Document ID (default to undefined)
let envelopeId: string; //Envelope to sign (optional) (default to undefined)
let xml: boolean; //Is XML? (optional) (default to undefined)

const { status, data } = await apiInstance.forSignFile(
    documentId,
    envelopeId,
    xml
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document ID | defaults to undefined|
| **envelopeId** | [**string**] | Envelope to sign | (optional) defaults to undefined|
| **xml** | [**boolean**] | Is XML? | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getForm**
> FormGet getForm()


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let id: string; //Form UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getForm(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Form UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FormGet**

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

# **getFormDocumentPrintVersion**
> File getFormDocumentPrintVersion()


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let envelopeId: string; //Envelope UUID (optional) (default to undefined)
let documentId: string; //Document id (optional) (default to undefined)
let attachmentId: string; //Document id (optional) (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)

const { status, data } = await apiInstance.getFormDocumentPrintVersion(
    envelopeId,
    documentId,
    attachmentId,
    wait
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeId** | [**string**] | Envelope UUID | (optional) defaults to undefined|
| **documentId** | [**string**] | Document id | (optional) defaults to undefined|
| **attachmentId** | [**string**] | Document id | (optional) defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormDocumentsForSign**
> FormDocumentsForSign getFormDocumentsForSign(documentsForSignRequestDTO)


### Example

```typescript
import {
    FormControllerApi,
    Configuration,
    DocumentsForSignRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let documentsForSignRequestDTO: DocumentsForSignRequestDTO; //
let envelopeId: string; //Envelope to sign (optional) (default to undefined)
let forceGost: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getFormDocumentsForSign(
    documentsForSignRequestDTO,
    envelopeId,
    forceGost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentsForSignRequestDTO** | **DocumentsForSignRequestDTO**|  | |
| **envelopeId** | [**string**] | Envelope to sign | (optional) defaults to undefined|
| **forceGost** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**FormDocumentsForSign**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormView**
> FormView getFormView()


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

const { status, data } = await apiInstance.getFormView();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FormView**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rejectFormEnvelope**
> FormSend rejectFormEnvelope(formEnvelopeReject)


### Example

```typescript
import {
    FormControllerApi,
    Configuration,
    FormEnvelopeReject
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let formEnvelopeReject: FormEnvelopeReject; //

const { status, data } = await apiInstance.rejectFormEnvelope(
    formEnvelopeReject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formEnvelopeReject** | **FormEnvelopeReject**|  | |


### Return type

**FormSend**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendFormEnvelope**
> FormSend sendFormEnvelope(sendEnvelope)


### Example

```typescript
import {
    FormControllerApi,
    Configuration,
    SendEnvelope
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let sendEnvelope: SendEnvelope; //

const { status, data } = await apiInstance.sendFormEnvelope(
    sendEnvelope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEnvelope** | **SendEnvelope**|  | |


### Return type

**FormSend**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signFormEnvelope**
> FormSend signFormEnvelope(envelopeDocumentSignaturesDTO)


### Example

```typescript
import {
    FormControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let envelopeId: string; //Envelope to sign (default to undefined)
let envelopeDocumentSignaturesDTO: Array<EnvelopeDocumentSignaturesDTO>; //

const { status, data } = await apiInstance.signFormEnvelope(
    envelopeId,
    envelopeDocumentSignaturesDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeDocumentSignaturesDTO** | **Array<EnvelopeDocumentSignaturesDTO>**|  | |
| **envelopeId** | [**string**] | Envelope to sign | defaults to undefined|


### Return type

**FormSend**

### Authorization

[formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateForm**
> FormGet updateForm(formUpdate)


### Example

```typescript
import {
    FormControllerApi,
    Configuration,
    FormUpdate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new FormControllerApi(configuration);

let id: string; //Form UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let formUpdate: FormUpdate; //

const { status, data } = await apiInstance.updateForm(
    id,
    mailbox,
    formUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formUpdate** | **FormUpdate**|  | |
| **id** | [**string**] | Form UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FormGet**

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

