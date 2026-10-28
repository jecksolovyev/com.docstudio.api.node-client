# DictionaryControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**archiveDictionary**](#archivedictionary) | **PATCH** /api/v1/dictionary/{dictionaryUuid}/archive | Archive dictionary|
|[**checkColumnValues**](#checkcolumnvalues) | **GET** /api/v1/dictionary/{dictionaryUuid}/column/{columnUuid}/check | Check dictionary column. Check access, existence, etc.|
|[**checkDictionary**](#checkdictionary) | **GET** /api/v1/dictionary/{dictionaryUuid}/check | Check dictionary. Check access, existence, etc.|
|[**createColumn**](#createcolumn) | **POST** /api/v1/dictionary/{dictionaryUuid}/column | Create dictionary column|
|[**createDictionary**](#createdictionary) | **POST** /api/v1/dictionary | Create empty dictionary|
|[**createRecord**](#createrecord) | **POST** /api/v1/dictionary/{dictionaryUuid}/record | Create record(s)|
|[**deleteDictionaryColumn**](#deletedictionarycolumn) | **DELETE** /api/v1/dictionary/{dictionaryUuid}/column/{columnUuid} | Delete column. Will return deleted column UUID|
|[**deleteRecords**](#deleterecords) | **DELETE** /api/v1/dictionary/{dictionaryUuid}/record | Delete record(s). Will return deleted records UUID(s)|
|[**downloadDictionary**](#downloaddictionary) | **POST** /api/v1/dictionary/{dictionaryUuid}/download | Download the dictionary|
|[**downloadStatus**](#downloadstatus) | **GET** /api/v1/dictionary/{dictionaryUuid}/download/status/{taskUuid} | Download the dictionary|
|[**getColumnValue**](#getcolumnvalue) | **GET** /api/v1/dictionary/{dictionaryUuid}/record/{recordUuid}/column/{columnUuid} | Retrieve column value for specific record|
|[**getColumnValues**](#getcolumnvalues) | **POST** /api/v1/dictionary/{dictionaryUuid}/column/{columnUuid} | Retrieve column values from dictionary|
|[**getDictionaryRecord**](#getdictionaryrecord) | **GET** /api/v1/dictionary/{dictionaryUuid}/record/{recordUuid} | Retrieve record|
|[**getDictionaryRecordUuids**](#getdictionaryrecorduuids) | **POST** /api/v1/dictionary/{dictionaryUuid}/record-uuids | Get dictionary record uuids by values|
|[**getDictionaryRecords**](#getdictionaryrecords) | **POST** /api/v1/dictionary/{dictionaryUuid}/records | Get dictionary records|
|[**patchDictionary**](#patchdictionary) | **PATCH** /api/v1/dictionary/{dictionaryUuid} | Update dictionary|
|[**patchRecord**](#patchrecord) | **PATCH** /api/v1/dictionary/{dictionaryUuid}/record/{recordUuid} | Update record column values|
|[**readDictionary**](#readdictionary) | **GET** /api/v1/dictionary/{dictionaryUuid} | Read/get dictionary|
|[**searchDictionaries**](#searchdictionaries) | **GET** /api/v1/dictionary | Get paged dictionary list|
|[**updateDictionaryColumn**](#updatedictionarycolumn) | **PUT** /api/v1/dictionary/{dictionaryUuid}/column/{columnUuid} | Update dictionary column|

# **archiveDictionary**
> archiveDictionary()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.archiveDictionary(
    dictionaryUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
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

# **checkColumnValues**
> DictionaryCheckResponseDTO checkColumnValues()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let columnUuid: string; //Column UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.checkColumnValues(
    dictionaryUuid,
    columnUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **columnUuid** | [**string**] | Column UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**DictionaryCheckResponseDTO**

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

# **checkDictionary**
> DictionaryCheckResponseDTO checkDictionary()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.checkDictionary(
    dictionaryUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**DictionaryCheckResponseDTO**

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

# **createColumn**
> SingleUuidDTO createColumn(dictionaryColumnRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryColumnRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryColumnRequestDTO: DictionaryColumnRequestDTO; //

const { status, data } = await apiInstance.createColumn(
    dictionaryUuid,
    mailbox,
    dictionaryColumnRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryColumnRequestDTO** | **DictionaryColumnRequestDTO**|  | |
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
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

# **createDictionary**
> SingleUuidDTO createDictionary()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.createDictionary(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**SingleUuidDTO**

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

# **createRecord**
> CreateRecordsResponseDTO createRecord(dictionaryColumnValueRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryColumnValueRequestDTO: Array<Array<DictionaryColumnValueRequestDTO>>; //

const { status, data } = await apiInstance.createRecord(
    dictionaryUuid,
    mailbox,
    dictionaryColumnValueRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryColumnValueRequestDTO** | **Array<Array<DictionaryColumnValueRequestDTO>>**|  | |
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**CreateRecordsResponseDTO**

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

# **deleteDictionaryColumn**
> SingleUuidDTO deleteDictionaryColumn()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let columnUuid: string; //Column UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteDictionaryColumn(
    dictionaryUuid,
    columnUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **columnUuid** | [**string**] | Column UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**SingleUuidDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecords**
> Array<SingleUuidDTO> deleteRecords(singleUuidDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let singleUuidDTO: Array<SingleUuidDTO>; //

const { status, data } = await apiInstance.deleteRecords(
    dictionaryUuid,
    mailbox,
    singleUuidDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **singleUuidDTO** | **Array<SingleUuidDTO>**|  | |
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<SingleUuidDTO>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadDictionary**
> ExportTaskStatusDTO downloadDictionary(dictionaryDownloadParamsDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryDownloadParamsDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryDownloadParamsDTO: DictionaryDownloadParamsDTO; //

const { status, data } = await apiInstance.downloadDictionary(
    dictionaryUuid,
    mailbox,
    dictionaryDownloadParamsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryDownloadParamsDTO** | **DictionaryDownloadParamsDTO**|  | |
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ExportTaskStatusDTO**

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

# **downloadStatus**
> ExportTaskStatusDTO downloadStatus()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let taskUuid: string; //UUID of task (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.downloadStatus(
    dictionaryUuid,
    taskUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **taskUuid** | [**string**] | UUID of task | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ExportTaskStatusDTO**

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

# **getColumnValue**
> DictionaryColumnValueResponseDTO getColumnValue()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let recordUuid: string; //Record UUID (default to undefined)
let columnUuid: string; //Column UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getColumnValue(
    dictionaryUuid,
    recordUuid,
    columnUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **recordUuid** | [**string**] | Record UUID | defaults to undefined|
| **columnUuid** | [**string**] | Column UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**DictionaryColumnValueResponseDTO**

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

# **getColumnValues**
> PageDTODictionaryColumnValueResponseDTO getColumnValues(dictionaryColumnValueSearchDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryColumnValueSearchDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let columnUuid: string; //Column UUID (default to undefined)
let dictionaryColumnValueSearchDTO: DictionaryColumnValueSearchDTO; //
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getColumnValues(
    dictionaryUuid,
    columnUuid,
    dictionaryColumnValueSearchDTO,
    offset,
    limit,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryColumnValueSearchDTO** | **DictionaryColumnValueSearchDTO**|  | |
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **columnUuid** | [**string**] | Column UUID | defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**PageDTODictionaryColumnValueResponseDTO**

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

# **getDictionaryRecord**
> DictionaryRecordValuesResponseDTO getDictionaryRecord()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let recordUuid: string; //Record UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getDictionaryRecord(
    dictionaryUuid,
    recordUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **recordUuid** | [**string**] | Record UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**DictionaryRecordValuesResponseDTO**

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

# **getDictionaryRecordUuids**
> { [key: string]: string; } getDictionaryRecordUuids(dictionaryRecordsRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryRecordsRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryRecordsRequestDTO: DictionaryRecordsRequestDTO; //

const { status, data } = await apiInstance.getDictionaryRecordUuids(
    dictionaryUuid,
    mailbox,
    dictionaryRecordsRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryRecordsRequestDTO** | **DictionaryRecordsRequestDTO**|  | |
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**{ [key: string]: string; }**

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

# **getDictionaryRecords**
> PageDTODictionaryRecordValuesResponseDTO getDictionaryRecords(dictionaryFiltersRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryFiltersRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryFiltersRequestDTO: DictionaryFiltersRequestDTO; //
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.getDictionaryRecords(
    dictionaryUuid,
    mailbox,
    dictionaryFiltersRequestDTO,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryFiltersRequestDTO** | **DictionaryFiltersRequestDTO**|  | |
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTODictionaryRecordValuesResponseDTO**

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

# **patchDictionary**
> DictionaryResponseDTO patchDictionary(dictionaryRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryRequestDTO: DictionaryRequestDTO; //

const { status, data } = await apiInstance.patchDictionary(
    dictionaryUuid,
    mailbox,
    dictionaryRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryRequestDTO** | **DictionaryRequestDTO**|  | |
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**DictionaryResponseDTO**

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

# **patchRecord**
> patchRecord(dictionaryColumnValueRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let recordUuid: string; //Record UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryColumnValueRequestDTO: Array<DictionaryColumnValueRequestDTO>; //

const { status, data } = await apiInstance.patchRecord(
    dictionaryUuid,
    recordUuid,
    mailbox,
    dictionaryColumnValueRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryColumnValueRequestDTO** | **Array<DictionaryColumnValueRequestDTO>**|  | |
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **recordUuid** | [**string**] | Record UUID | defaults to undefined|
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

# **readDictionary**
> DictionaryResponseDTO readDictionary()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //UUID of dictionary (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let withColumns: boolean; //Add columns description to each dictionary (optional) (default to false)
let withRecordsCount: boolean; //Add records count value to each dictionary (optional) (default to false)

const { status, data } = await apiInstance.readDictionary(
    dictionaryUuid,
    mailbox,
    withColumns,
    withRecordsCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryUuid** | [**string**] | UUID of dictionary | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **withColumns** | [**boolean**] | Add columns description to each dictionary | (optional) defaults to false|
| **withRecordsCount** | [**boolean**] | Add records count value to each dictionary | (optional) defaults to false|


### Return type

**DictionaryResponseDTO**

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

# **searchDictionaries**
> PageDTODictionaryResponseDTO searchDictionaries()


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let level: 'mailbox' | 'account' | 'public' | 'official' | 'shared' | 'public-hidden'; //Dictionary access level (optional) (default to undefined)
let keyword: string; //Keyword to search dictionary by or dictionary UUID (optional) (default to undefined)
let withColumns: boolean; //Add columns description to each dictionary (optional) (default to false)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.searchDictionaries(
    mailbox,
    level,
    keyword,
    withColumns,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **level** | [**&#39;mailbox&#39; | &#39;account&#39; | &#39;public&#39; | &#39;official&#39; | &#39;shared&#39; | &#39;public-hidden&#39;**]**Array<&#39;mailbox&#39; &#124; &#39;account&#39; &#124; &#39;public&#39; &#124; &#39;official&#39; &#124; &#39;shared&#39; &#124; &#39;public-hidden&#39;>** | Dictionary access level | (optional) defaults to undefined|
| **keyword** | [**string**] | Keyword to search dictionary by or dictionary UUID | (optional) defaults to undefined|
| **withColumns** | [**boolean**] | Add columns description to each dictionary | (optional) defaults to false|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTODictionaryResponseDTO**

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

# **updateDictionaryColumn**
> DictionaryColumnResponseDTO updateDictionaryColumn(dictionaryColumnRequestDTO)


### Example

```typescript
import {
    DictionaryControllerApi,
    Configuration,
    DictionaryColumnRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new DictionaryControllerApi(configuration);

let dictionaryUuid: string; //Dictionary UUID (default to undefined)
let columnUuid: string; //Column UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let dictionaryColumnRequestDTO: DictionaryColumnRequestDTO; //

const { status, data } = await apiInstance.updateDictionaryColumn(
    dictionaryUuid,
    columnUuid,
    mailbox,
    dictionaryColumnRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dictionaryColumnRequestDTO** | **DictionaryColumnRequestDTO**|  | |
| **dictionaryUuid** | [**string**] | Dictionary UUID | defaults to undefined|
| **columnUuid** | [**string**] | Column UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**DictionaryColumnResponseDTO**

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

