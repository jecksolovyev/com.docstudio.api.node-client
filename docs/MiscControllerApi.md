# MiscControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appSettings**](#appsettings) | **GET** /api/v1/settings | |
|[**auditLog**](#auditlog) | **POST** /api/v1/audit | Audit log|
|[**calculateFormula**](#calculateformula) | **POST** /api/v1/formula | Calculate excel formulas for documents|
|[**createAuditReport**](#createauditreport) | **POST** /api/v1/audit/report | Request audit report|
|[**detectCountry**](#detectcountry) | **GET** /api/v1/detect-country | |
|[**detectLanguage**](#detectlanguage) | **GET** /api/v1/detect-language | |
|[**getBarcode**](#getbarcode) | **GET** /api/v1/barcode | |
|[**getProcessStatus**](#getprocessstatus) | **GET** /api/v1/process-status/{id} | Process status|
|[**parseCsv**](#parsecsv) | **POST** /api/v1/csv-parser | Parse CSV text (5 rows max)|
|[**recalculateMailboxStat**](#recalculatemailboxstat) | **GET** /api/v1/recalculate-mailbox-stat | Recalculate all mailbox counters|
|[**webhook**](#webhook) | **POST** /api/v1/account/webhook | |

# **appSettings**
> SettingsDTO appSettings()


### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

const { status, data } = await apiInstance.appSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SettingsDTO**

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

# **auditLog**
> PageDTOActivityLogRecordDTO auditLog(searchActivityLogDTO)


### Example

```typescript
import {
    MiscControllerApi,
    Configuration,
    SearchActivityLogDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let searchActivityLogDTO: SearchActivityLogDTO; //
let offset: number; //Offset, how many records to skip (optional) (default to 0)
let limit: number; //Limit, how many records to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.auditLog(
    searchActivityLogDTO,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchActivityLogDTO** | **SearchActivityLogDTO**|  | |
| **offset** | [**number**] | Offset, how many records to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how many records to retrieve | (optional) defaults to 25|


### Return type

**PageDTOActivityLogRecordDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calculateFormula**
> { [key: string]: { [key: string]: any | null; }; } calculateFormula(docFormulaRequestDTO)


### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let docFormulaRequestDTO: Array<DocFormulaRequestDTO>; //

const { status, data } = await apiInstance.calculateFormula(
    docFormulaRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **docFormulaRequestDTO** | **Array<DocFormulaRequestDTO>**|  | |


### Return type

**{ [key: string]: { [key: string]: any | null; }; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAuditReport**
> createAuditReport(searchActivityLogDTO)


### Example

```typescript
import {
    MiscControllerApi,
    Configuration,
    SearchActivityLogDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let searchActivityLogDTO: SearchActivityLogDTO; //

const { status, data } = await apiInstance.createAuditReport(
    searchActivityLogDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchActivityLogDTO** | **SearchActivityLogDTO**|  | |


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

# **detectCountry**
> DetectedCountryDTO detectCountry()


### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

const { status, data } = await apiInstance.detectCountry();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DetectedCountryDTO**

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

# **detectLanguage**
> string detectLanguage()


### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

const { status, data } = await apiInstance.detectLanguage();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBarcode**
> string getBarcode()


### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let type: 'upca' | 'upce' | 'ean8' | 'ean13' | 'code39' | 'code128' | 'itf14' | 'code93' | 'rationalizedCodabar' | 'databarexpandedstacked' | 'qrcode' | 'datamatrix' | 'pdf417' | 'bankGovUa' | 'bankGovUaV3'; //Barcode type (default to undefined)
let value: string; //Barcode value (optional) (default to undefined)
let qrOnly: boolean; //Generate bare QR code without frames, texts etc (optional) (default to undefined)

const { status, data } = await apiInstance.getBarcode(
    type,
    value,
    qrOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;upca&#39; | &#39;upce&#39; | &#39;ean8&#39; | &#39;ean13&#39; | &#39;code39&#39; | &#39;code128&#39; | &#39;itf14&#39; | &#39;code93&#39; | &#39;rationalizedCodabar&#39; | &#39;databarexpandedstacked&#39; | &#39;qrcode&#39; | &#39;datamatrix&#39; | &#39;pdf417&#39; | &#39;bankGovUa&#39; | &#39;bankGovUaV3&#39;**]**Array<&#39;upca&#39; &#124; &#39;upce&#39; &#124; &#39;ean8&#39; &#124; &#39;ean13&#39; &#124; &#39;code39&#39; &#124; &#39;code128&#39; &#124; &#39;itf14&#39; &#124; &#39;code93&#39; &#124; &#39;rationalizedCodabar&#39; &#124; &#39;databarexpandedstacked&#39; &#124; &#39;qrcode&#39; &#124; &#39;datamatrix&#39; &#124; &#39;pdf417&#39; &#124; &#39;bankGovUa&#39; &#124; &#39;bankGovUaV3&#39;>** | Barcode type | defaults to undefined|
| **value** | [**string**] | Barcode value | (optional) defaults to undefined|
| **qrOnly** | [**boolean**] | Generate bare QR code without frames, texts etc | (optional) defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/svg+xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProcessStatus**
> ProcessStatus getProcessStatus()

Getting async bulk process status details by id

### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let id: string; //Process id (default to undefined)
let details: boolean; //Return details (optional) (default to undefined)

const { status, data } = await apiInstance.getProcessStatus(
    id,
    details
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Process id | defaults to undefined|
| **details** | [**boolean**] | Return details | (optional) defaults to undefined|


### Return type

**ProcessStatus**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **parseCsv**
> Array<Array<string>> parseCsv(csvData)


### Example

```typescript
import {
    MiscControllerApi,
    Configuration,
    CsvData
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let csvData: CsvData; //

const { status, data } = await apiInstance.parseCsv(
    csvData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **csvData** | **CsvData**|  | |


### Return type

**Array<Array<string>>**

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

# **recalculateMailboxStat**
> StatDTO recalculateMailboxStat()

development use only

### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.recalculateMailboxStat(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**StatDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhook**
> webhook(body)


### Example

```typescript
import {
    MiscControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MiscControllerApi(configuration);

let authorization: string; // (default to undefined)
let accountKey: string; // (default to undefined)
let type: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.webhook(
    authorization,
    accountKey,
    type,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **authorization** | [**string**] |  | defaults to undefined|
| **accountKey** | [**string**] |  | defaults to undefined|
| **type** | [**string**] |  | defaults to undefined|


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

