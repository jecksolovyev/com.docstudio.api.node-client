# AccountBillingControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkEventAbility**](#checkeventability) | **GET** /api/v1/account/{accountUuid}/check/{type}/{action} | |
|[**downloadInvoice**](#downloadinvoice) | **GET** /api/v1/account/{accountUuid}/invoice/{invoiceId}/pdf | |
|[**getAccount**](#getaccount) | **GET** /api/v1/account/{accountUuid}/billing | |
|[**getAccountBillingStateHeader**](#getaccountbillingstateheader) | **GET** /api/v1/account/{accountUuid}/billing-state | |
|[**getCurrencyRates**](#getcurrencyrates) | **GET** /api/v1/account/currency-rates | |
|[**getEventTypes**](#geteventtypes) | **GET** /api/v1/account/predefined-event-types | |
|[**getInvoiceStatus**](#getinvoicestatus) | **GET** /api/v1/account/{accountUuid}/invoice-status/{invoiceId} | |
|[**getInvoices**](#getinvoices) | **GET** /api/v1/account/{accountUuid}/invoice | |
|[**getPaymentMethodInfo**](#getpaymentmethodinfo) | **GET** /api/v1/account/{accountUuid}/payment-method | |
|[**getPaymentMethodInitKey**](#getpaymentmethodinitkey) | **GET** /api/v1/account/{accountUuid}/payment-method-init | |
|[**getTariffs**](#gettariffs) | **GET** /api/v1/account/{accountUuid}/tariff | |
|[**makeInvoicePayment**](#makeinvoicepayment) | **POST** /api/v1/account/{accountUuid}/billing-payment | |
|[**replaceAccountTariff**](#replaceaccounttariff) | **POST** /api/v1/account/{accountUuid}/tariff | |

# **checkEventAbility**
> checkEventAbility()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)
let type: string; // (default to undefined)
let action: 'create' | 'access'; // (default to undefined)
let templateId: string; // (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.checkEventAbility(
    accountUuid,
    type,
    action,
    templateId,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|
| **type** | [**string**] |  | defaults to undefined|
| **action** | [**&#39;create&#39; | &#39;access&#39;**]**Array<&#39;create&#39; &#124; &#39;access&#39;>** |  | defaults to undefined|
| **templateId** | [**string**] |  | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


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

# **downloadInvoice**
> File downloadInvoice()

Download invoice

### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; //Account uuid (default to undefined)
let invoiceId: string; //Invoice id (default to undefined)
let details: 'withoutDetails' | 'withZeroDetails' | 'withDetails'; //Include details (optional) (default to undefined)

const { status, data } = await apiInstance.downloadInvoice(
    accountUuid,
    invoiceId,
    details
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account uuid | defaults to undefined|
| **invoiceId** | [**string**] | Invoice id | defaults to undefined|
| **details** | [**&#39;withoutDetails&#39; | &#39;withZeroDetails&#39; | &#39;withDetails&#39;**]**Array<&#39;withoutDetails&#39; &#124; &#39;withZeroDetails&#39; &#124; &#39;withDetails&#39;>** | Include details | (optional) defaults to undefined|


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

# **getAccount**
> AccountBillingInfoDTO getAccount()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getAccount(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**AccountBillingInfoDTO**

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

# **getAccountBillingStateHeader**
> BillingHeaderState getAccountBillingStateHeader()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getAccountBillingStateHeader(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**BillingHeaderState**

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

# **getCurrencyRates**
> Array<CurrencyRateDTO> getCurrencyRates()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

const { status, data } = await apiInstance.getCurrencyRates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CurrencyRateDTO>**

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

# **getEventTypes**
> Set<BillingEventType> getEventTypes()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

const { status, data } = await apiInstance.getEventTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Set<BillingEventType>**

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

# **getInvoiceStatus**
> BillingInvoiceStatusDTO getInvoiceStatus()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.getInvoiceStatus(
    accountUuid,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**BillingInvoiceStatusDTO**

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

# **getInvoices**
> PageDTOObject getInvoices()

Get invoice list

### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; //Account uuid (default to undefined)
let offset: number; //Offset, how many records to skip (optional) (default to 0)
let limit: number; //Limit, how many records to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.getInvoices(
    accountUuid,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account uuid | defaults to undefined|
| **offset** | [**number**] | Offset, how many records to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how many records to retrieve | (optional) defaults to 25|


### Return type

**PageDTOObject**

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

# **getPaymentMethodInfo**
> PaymentMethodInfo getPaymentMethodInfo()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getPaymentMethodInfo(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**PaymentMethodInfo**

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

# **getPaymentMethodInitKey**
> string getPaymentMethodInitKey()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getPaymentMethodInitKey(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **getTariffs**
> Array<DetailedTariffInfoDTO> getTariffs()


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getTariffs(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**Array<DetailedTariffInfoDTO>**

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

# **makeInvoicePayment**
> BillingRedirectDTO makeInvoicePayment(billingPaymentDTO)


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration,
    BillingPaymentDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)
let billingPaymentDTO: BillingPaymentDTO; //

const { status, data } = await apiInstance.makeInvoicePayment(
    accountUuid,
    billingPaymentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **billingPaymentDTO** | **BillingPaymentDTO**|  | |
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**BillingRedirectDTO**

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

# **replaceAccountTariff**
> ChangeAccountTariffResponse replaceAccountTariff(replaceAccountTariffDTO)


### Example

```typescript
import {
    AccountBillingControllerApi,
    Configuration,
    ReplaceAccountTariffDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountBillingControllerApi(configuration);

let accountUuid: string; // (default to undefined)
let replaceAccountTariffDTO: ReplaceAccountTariffDTO; //

const { status, data } = await apiInstance.replaceAccountTariff(
    accountUuid,
    replaceAccountTariffDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replaceAccountTariffDTO** | **ReplaceAccountTariffDTO**|  | |
| **accountUuid** | [**string**] |  | defaults to undefined|


### Return type

**ChangeAccountTariffResponse**

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

