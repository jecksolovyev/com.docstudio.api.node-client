# IntegrationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateIntegrationRule**](#activateintegrationrule) | **POST** /api/v1/integration/rule/{integrationRuleUuid}/activate/{flag} | Activate integration rule|
|[**conversionLog**](#conversionlog) | **GET** /api/v1/integration/conversion-log | Get conversion log|
|[**convertBinaryToXML**](#convertbinarytoxml) | **POST** /api/v1/integration/convert-binary | Convert incoming file to XML view|
|[**createIntegrationRule**](#createintegrationrule) | **POST** /api/v1/integration/rule | Create integration rule|
|[**deleteIntegrationRule**](#deleteintegrationrule) | **DELETE** /api/v1/integration/rule/{integrationRuleUuid} | Delete integration rule|
|[**execute**](#execute) | **POST** /api/v1/integration/rule/execute | Execute conversion map and generate file name (if pattern rule defined)|
|[**generate**](#generate) | **GET** /api/v1/integration/source/{templateUuid}/{mailboxUuid} | Generate envelope XML by template|
|[**getIntegrationRule**](#getintegrationrule) | **GET** /api/v1/integration/rule/{integrationRuleUuid} | Get integration rule|
|[**getIntegrationRules**](#getintegrationrules) | **GET** /api/v1/integration/rules/{accountUuid} | Get account integration rules|
|[**getMailboxIntegration**](#getmailboxintegration) | **GET** /api/v1/integration/{mailboxUuid} | Get Mailbox integration|
|[**loadLogFile**](#loadlogfile) | **GET** /api/v1/integration/conversion-log/{logId}/file | Download input/output conversion file|
|[**newPassword**](#newpassword) | **POST** /api/v1/integration/new-password/{mailboxUuid} | Generate and save new password|
|[**reprocessLogRecord**](#reprocesslogrecord) | **POST** /api/v1/integration/conversion-log/reprocess | Reprocess log record|
|[**saveMailboxIntegration**](#savemailboxintegration) | **POST** /api/v1/integration/{mailboxUuid} | Create/update Mailbox integration|
|[**updateIntegrationRule**](#updateintegrationrule) | **PUT** /api/v1/integration/rule/{integrationRuleUuid} | Update integration rule|

# **activateIntegrationRule**
> activateIntegrationRule()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationRuleUuid: string; //UUID of integration rule (default to undefined)
let flag: boolean; //Active state (default to undefined)

const { status, data } = await apiInstance.activateIntegrationRule(
    integrationRuleUuid,
    flag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationRuleUuid** | [**string**] | UUID of integration rule | defaults to undefined|
| **flag** | [**boolean**] | Active state | defaults to undefined|


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

# **conversionLog**
> PageDTOConversionLogRecord conversionLog()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let ruleId: string; //UUID of integration rule (optional) (default to undefined)
let mailboxId: string; //Mailbox UUID (optional) (default to undefined)
let status: 'SUCCEED' | 'FAILED'; //Conversion Status (optional) (default to undefined)
let keyword: string; //Filter by Filename/Envelope subject/Envelope UUID (optional) (default to undefined)
let offset: number; //Offset, how many records to skip (optional) (default to 0)
let limit: number; //Limit, how many records to retrieve (optional) (default to 25)
let uuidOnly: boolean; //Retrieve only UUID of record (optional) (default to undefined)
let noRule: boolean; //Retrieve only records with no rule (optional) (default to undefined)

const { status, data } = await apiInstance.conversionLog(
    accountId,
    ruleId,
    mailboxId,
    status,
    keyword,
    offset,
    limit,
    uuidOnly,
    noRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **ruleId** | [**string**] | UUID of integration rule | (optional) defaults to undefined|
| **mailboxId** | [**string**] | Mailbox UUID | (optional) defaults to undefined|
| **status** | [**&#39;SUCCEED&#39; | &#39;FAILED&#39;**]**Array<&#39;SUCCEED&#39; &#124; &#39;FAILED&#39;>** | Conversion Status | (optional) defaults to undefined|
| **keyword** | [**string**] | Filter by Filename/Envelope subject/Envelope UUID | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how many records to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how many records to retrieve | (optional) defaults to 25|
| **uuidOnly** | [**boolean**] | Retrieve only UUID of record | (optional) defaults to undefined|
| **noRule** | [**boolean**] | Retrieve only records with no rule | (optional) defaults to undefined|


### Return type

**PageDTOConversionLogRecord**

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

# **convertBinaryToXML**
> string convertBinaryToXML()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let mailboxUuid: string; //Mailbox UUID (default to undefined)
let filename: string; //filename, for type detection (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.convertBinaryToXML(
    mailboxUuid,
    filename,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **mailboxUuid** | [**string**] | Mailbox UUID | defaults to undefined|
| **filename** | [**string**] | filename, for type detection | defaults to undefined|


### Return type

**string**

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

# **createIntegrationRule**
> IntegrationRule createIntegrationRule(integrationRule)


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration,
    IntegrationRule
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationRule: IntegrationRule; //

const { status, data } = await apiInstance.createIntegrationRule(
    integrationRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationRule** | **IntegrationRule**|  | |


### Return type

**IntegrationRule**

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

# **deleteIntegrationRule**
> deleteIntegrationRule()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationRuleUuid: string; //UUID of integration rule (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationRule(
    integrationRuleUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationRuleUuid** | [**string**] | UUID of integration rule | defaults to undefined|


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

# **execute**
> IntegrationRuleResponseDTO execute(integrationRuleRequestDTO)


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration,
    IntegrationRuleRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationRuleRequestDTO: IntegrationRuleRequestDTO; //

const { status, data } = await apiInstance.execute(
    integrationRuleRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationRuleRequestDTO** | **IntegrationRuleRequestDTO**|  | |


### Return type

**IntegrationRuleResponseDTO**

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

# **generate**
> GeneratedEnvelope generate()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let mailboxUuid: string; //Mailbox UUID (default to undefined)
let templateUuid: string; //Template UUID (default to undefined)
let versionUuid: string; //Template version UUID (optional) (default to undefined)
let autoFields: boolean; //Include auto fields (lookup, formula, duplicate) (optional) (default to undefined)

const { status, data } = await apiInstance.generate(
    mailboxUuid,
    templateUuid,
    versionUuid,
    autoFields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] | Mailbox UUID | defaults to undefined|
| **templateUuid** | [**string**] | Template UUID | defaults to undefined|
| **versionUuid** | [**string**] | Template version UUID | (optional) defaults to undefined|
| **autoFields** | [**boolean**] | Include auto fields (lookup, formula, duplicate) | (optional) defaults to undefined|


### Return type

**GeneratedEnvelope**

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

# **getIntegrationRule**
> IntegrationRule getIntegrationRule()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationRuleUuid: string; //UUID of integration rule (default to undefined)
let baseFields: boolean; //Get only based fields (skip large ones) (optional) (default to undefined)

const { status, data } = await apiInstance.getIntegrationRule(
    integrationRuleUuid,
    baseFields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationRuleUuid** | [**string**] | UUID of integration rule | defaults to undefined|
| **baseFields** | [**boolean**] | Get only based fields (skip large ones) | (optional) defaults to undefined|


### Return type

**IntegrationRule**

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

# **getIntegrationRules**
> Array<IntegrationRuleListItem> getIntegrationRules()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let mailboxUuid: string; //Mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getIntegrationRules(
    accountUuid,
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **mailboxUuid** | [**string**] | Mailbox UUID | (optional) defaults to undefined|


### Return type

**Array<IntegrationRuleListItem>**

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

# **getMailboxIntegration**
> MailboxIntegration getMailboxIntegration()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getMailboxIntegration(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] |  | defaults to undefined|


### Return type

**MailboxIntegration**

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

# **loadLogFile**
> File loadLogFile()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let logId: string; //UUID of conversion log (default to undefined)

const { status, data } = await apiInstance.loadLogFile(
    logId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logId** | [**string**] | UUID of conversion log | defaults to undefined|


### Return type

**File**

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

# **newPassword**
> object newPassword()


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)

const { status, data } = await apiInstance.newPassword(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] |  | defaults to undefined|


### Return type

**object**

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

# **reprocessLogRecord**
> reprocessLogRecord(integrationReprocessRequest)


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration,
    IntegrationReprocessRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationReprocessRequest: IntegrationReprocessRequest; //

const { status, data } = await apiInstance.reprocessLogRecord(
    integrationReprocessRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationReprocessRequest** | **IntegrationReprocessRequest**|  | |


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

# **saveMailboxIntegration**
> MailboxIntegration saveMailboxIntegration(mailboxIntegration)


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration,
    MailboxIntegration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)
let mailboxIntegration: MailboxIntegration; //

const { status, data } = await apiInstance.saveMailboxIntegration(
    mailboxUuid,
    mailboxIntegration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxIntegration** | **MailboxIntegration**|  | |
| **mailboxUuid** | [**string**] |  | defaults to undefined|


### Return type

**MailboxIntegration**

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

# **updateIntegrationRule**
> IntegrationRule updateIntegrationRule(integrationRule)


### Example

```typescript
import {
    IntegrationControllerApi,
    Configuration,
    IntegrationRule
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new IntegrationControllerApi(configuration);

let integrationRuleUuid: string; //UUID of integration rule (default to undefined)
let integrationRule: IntegrationRule; //

const { status, data } = await apiInstance.updateIntegrationRule(
    integrationRuleUuid,
    integrationRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationRule** | **IntegrationRule**|  | |
| **integrationRuleUuid** | [**string**] | UUID of integration rule | defaults to undefined|


### Return type

**IntegrationRule**

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

