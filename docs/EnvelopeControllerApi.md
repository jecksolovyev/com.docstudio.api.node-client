# EnvelopeControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**archiveEnvelope**](#archiveenvelope) | **PATCH** /api/v1/envelope/archive/{flag} | Archive envelopes|
|[**cancelEnvelopeDelegation**](#cancelenvelopedelegation) | **DELETE** /api/v1/envelope/delegate | Cancel envelope delegation|
|[**cancelEnvelopes**](#cancelenvelopes) | **DELETE** /api/v1/envelope/cancel | Cancel envelopes|
|[**check**](#check) | **POST** /api/v1/envelope/check | Check an envelope|
|[**checkEnvelopeHasActiveRole**](#checkenvelopehasactiverole) | **HEAD** /api/v1/envelope/{id}/has-active-role | Check envelope has active role|
|[**continueScenarioStep**](#continuescenariostep) | **POST** /api/v1/envelope/{id}/scenario/{stepId} | Continue scenario flow with step|
|[**createEnvelope**](#createenvelope) | **POST** /api/v1/envelope | Create draft envelope|
|[**delegateEnvelopes**](#delegateenvelopes) | **POST** /api/v1/envelope/delegate | Delegate envelopes|
|[**deleteDrafts**](#deletedrafts) | **DELETE** /api/v1/envelope | Delete draft envelopes|
|[**deleteEnvelopeMetadata**](#deleteenvelopemetadata) | **DELETE** /api/v1/envelope/{id}/metadata | Delete envelope metadata|
|[**getActiveRoles**](#getactiveroles) | **GET** /api/v1/envelope/{id}/activeRoles | Get active roles by Envelope UUID|
|[**getEnvelopeByUuid**](#getenvelopebyuuid) | **GET** /api/v1/envelope/{envelopeUuid} | Retrieve envelope by UUID|
|[**getPaymentDetails**](#getpaymentdetails) | **GET** /api/v1/envelope/payment-details/{accessCode} | Get payment details of a payment link for the checkout page|
|[**getPaymentLink**](#getpaymentlink) | **POST** /api/v1/envelope/{id}/payment-link | Get the public checkout link of a QR pay field; the role of the field must be completed|
|[**markEnvelopesAsRead**](#markenvelopesasread) | **POST** /api/v1/envelope/mark-as-read | Mark envelopes as read by mailbox|
|[**numberToText**](#numbertotext) | **POST** /api/v1/envelope/number-to-text | Convert a numeric amount to words|
|[**recycleBin**](#recyclebin) | **PATCH** /api/v1/envelope/recycle-bin/{flag} | Archive envelopes|
|[**resendNotifications**](#resendnotifications) | **POST** /api/v1/envelope/notify | Resend notifications for active roles|
|[**updateEnvelope**](#updateenvelope) | **PUT** /api/v1/envelope | Update envelope without sending|
|[**updateEnvelopeMetadata**](#updateenvelopemetadata) | **PUT** /api/v1/envelope/{id}/metadata | Update envelope metadata. Will be saved on the account level|
|[**updateFlow**](#updateflow) | **POST** /api/v1/envelope/{id}/flow-update | Update recipient email/mailbox for not finished roles in a sent envelope|

# **archiveEnvelope**
> archiveEnvelope(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let flag: boolean; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.archiveEnvelope(
    flag,
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
| **flag** | [**boolean**] |  | defaults to undefined|
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

# **cancelEnvelopeDelegation**
> cancelEnvelopeDelegation(envelopeCancelDelegationDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvelopeCancelDelegationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeCancelDelegationDTO: EnvelopeCancelDelegationDTO; //

const { status, data } = await apiInstance.cancelEnvelopeDelegation(
    mailbox,
    envelopeCancelDelegationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeCancelDelegationDTO** | **EnvelopeCancelDelegationDTO**|  | |
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

# **cancelEnvelopes**
> SingleUuidDTO cancelEnvelopes(envCancellationRequestDTO)

One envelope is processed synchronously and the response carries that envelope\'s uuid; several are handed to a background process and the response carries the process uuid.

### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvCancellationRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envCancellationRequestDTO: EnvCancellationRequestDTO; //

const { status, data } = await apiInstance.cancelEnvelopes(
    mailbox,
    envCancellationRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envCancellationRequestDTO** | **EnvCancellationRequestDTO**|  | |
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

# **check**
> ValidationResponseDTO check(envDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envDTO: EnvDTO; //

const { status, data } = await apiInstance.check(
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

**ValidationResponseDTO**

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

# **checkEnvelopeHasActiveRole**
> checkEnvelopeHasActiveRole()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //UUID of envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.checkEnvelopeHasActiveRole(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of envelope | defaults to undefined|
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

# **continueScenarioStep**
> Array<SingleUuidDTO> continueScenarioStep()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let stepId: string; //Step id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.continueScenarioStep(
    id,
    stepId,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **stepId** | [**string**] | Step id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<SingleUuidDTO>**

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

# **createEnvelope**
> SingleUuidDTO createEnvelope(envPostDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envPostDTO: EnvPostDTO; //

const { status, data } = await apiInstance.createEnvelope(
    mailbox,
    envPostDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envPostDTO** | **EnvPostDTO**|  | |
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

# **delegateEnvelopes**
> SingleUuidDTO delegateEnvelopes(envDelegationDTO)

One envelope is processed synchronously and the response carries that envelope\'s uuid; several are handed to a background process and the response carries the process uuid.

### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvDelegationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envDelegationDTO: EnvDelegationDTO; //

const { status, data } = await apiInstance.delegateEnvelopes(
    mailbox,
    envDelegationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envDelegationDTO** | **EnvDelegationDTO**|  | |
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

# **deleteDrafts**
> deleteDrafts(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.deleteDrafts(
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

# **deleteEnvelopeMetadata**
> deleteEnvelopeMetadata()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let key: Set<string>; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEnvelopeMetadata(
    id,
    mailbox,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **key** | **Set&lt;string&gt;** |  | (optional) defaults to undefined|


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

# **getActiveRoles**
> Array<SingleUuidDTO> getActiveRoles()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //UUID of envelope to get active roles from (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getActiveRoles(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of envelope to get active roles from | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<SingleUuidDTO>**

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

# **getEnvelopeByUuid**
> EnvelopeWithTemplateDTO getEnvelopeByUuid()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let envelopeUuid: string; //UUID of envelope to retrieve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getEnvelopeByUuid(
    envelopeUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeUuid** | [**string**] | UUID of envelope to retrieve | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**EnvelopeWithTemplateDTO**

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

# **getPaymentDetails**
> PaymentDetails getPaymentDetails()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let accessCode: string; //Access code from the payment link (default to undefined)

const { status, data } = await apiInstance.getPaymentDetails(
    accessCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accessCode** | [**string**] | Access code from the payment link | defaults to undefined|


### Return type

**PaymentDetails**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentLink**
> PaymentLink getPaymentLink(paymentLinkRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    PaymentLinkRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let paymentLinkRequest: PaymentLinkRequest; //

const { status, data } = await apiInstance.getPaymentLink(
    id,
    mailbox,
    paymentLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentLinkRequest** | **PaymentLinkRequest**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**PaymentLink**

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

# **markEnvelopesAsRead**
> markEnvelopesAsRead(markAsReadRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    MarkAsReadRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let markAsReadRequest: MarkAsReadRequest; //

const { status, data } = await apiInstance.markEnvelopesAsRead(
    mailbox,
    markAsReadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markAsReadRequest** | **MarkAsReadRequest**|  | |
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

# **numberToText**
> string numberToText(numberToTextRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    NumberToTextRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let numberToTextRequest: NumberToTextRequest; //

const { status, data } = await apiInstance.numberToText(
    numberToTextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **numberToTextRequest** | **NumberToTextRequest**|  | |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recycleBin**
> recycleBin(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let flag: boolean; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.recycleBin(
    flag,
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
| **flag** | [**boolean**] |  | defaults to undefined|
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

# **resendNotifications**
> resendNotifications(reportEnvelopeRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    ReportEnvelopeRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reportEnvelopeRequestDTO: ReportEnvelopeRequestDTO; //

const { status, data } = await apiInstance.resendNotifications(
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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEnvelope**
> updateEnvelope(envPutDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvPutDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envPutDTO: EnvPutDTO; //

const { status, data } = await apiInstance.updateEnvelope(
    mailbox,
    envPutDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envPutDTO** | **EnvPutDTO**|  | |
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

# **updateEnvelopeMetadata**
> updateEnvelopeMetadata(requestBody)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.updateEnvelopeMetadata(
    id,
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |
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

# **updateFlow**
> updateFlow(flowUpdate)

Sender can change addressee for any role whose invitation has not been accepted yet. Old invitation codes are revoked and new notifications are sent. Limited to one change per envelope per minute.

### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //UUID of envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let flowUpdate: Array<FlowUpdate>; //

const { status, data } = await apiInstance.updateFlow(
    id,
    mailbox,
    flowUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowUpdate** | **Array<FlowUpdate>**|  | |
| **id** | [**string**] | UUID of envelope | defaults to undefined|
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

