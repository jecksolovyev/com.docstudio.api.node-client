# AutomationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAutomation**](#createautomation) | **POST** /api/v1/automation/account/{accountId} | Create new automation|
|[**createCredentials**](#createcredentials) | **POST** /api/v1/automation/account/{accountId}/credentials | Create credentials|
|[**deleteAutomation**](#deleteautomation) | **DELETE** /api/v1/automation/account/{accountId}/{id} | Delete automation|
|[**deleteCredentials**](#deletecredentials) | **DELETE** /api/v1/automation/account/{accountId}/credentials/{id} | Delete credentials|
|[**getAutomation**](#getautomation) | **GET** /api/v1/automation/account/{accountId}/{id} | Retrieve automation|
|[**getAutomationExecutionFile**](#getautomationexecutionfile) | **GET** /api/v1/automation/account/{accountId}/execution/{traceId}/log/{spanId}/file | Get automation execution result file|
|[**getAutomationExecutionLog**](#getautomationexecutionlog) | **GET** /api/v1/automation/account/{accountId}/execution/{traceId}/log | Get automation execution log|
|[**getAutomationExecutions**](#getautomationexecutions) | **GET** /api/v1/automation/account/{accountId}/executions | Get automation executions|
|[**getAutomations**](#getautomations) | **GET** /api/v1/automation/account/{accountId} | Get account automations|
|[**getBrickTypes**](#getbricktypes) | **GET** /api/v1/automation/account/{accountId}/brick-types | |
|[**getCredentialTypes**](#getcredentialtypes) | **GET** /api/v1/automation/account/{accountId}/credential-types | |
|[**getCredentials**](#getcredentials) | **GET** /api/v1/automation/account/{accountId}/credentials | Get account credentials|
|[**reprocessExecution**](#reprocessexecution) | **POST** /api/v1/automation/account/{accountId}/execution/{traceId}/log/{spanId}/reprocess | Reprocess execution starting from the span|
|[**updateAutomation**](#updateautomation) | **PUT** /api/v1/automation/account/{accountId}/{id} | Update automation|

# **createAutomation**
> IdResult createAutomation(automationUpdate)


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration,
    AutomationUpdate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let automationUpdate: AutomationUpdate; //

const { status, data } = await apiInstance.createAutomation(
    accountId,
    automationUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **automationUpdate** | **AutomationUpdate**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**IdResult**

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

# **createCredentials**
> IdResult createCredentials(credentialsCreate)


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration,
    CredentialsCreate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let credentialsCreate: CredentialsCreate; //

const { status, data } = await apiInstance.createCredentials(
    accountId,
    credentialsCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialsCreate** | **CredentialsCreate**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**IdResult**

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

# **deleteAutomation**
> deleteAutomation()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //Automation UUID (default to undefined)

const { status, data } = await apiInstance.deleteAutomation(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | Automation UUID | defaults to undefined|


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

# **deleteCredentials**
> deleteCredentials()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //Credentials UUID (default to undefined)

const { status, data } = await apiInstance.deleteCredentials(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | Credentials UUID | defaults to undefined|


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

# **getAutomation**
> AutomationGet getAutomation()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //Automation UUID (default to undefined)
let version: string; //Version (optional) (default to undefined)

const { status, data } = await apiInstance.getAutomation(
    accountId,
    id,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | Automation UUID | defaults to undefined|
| **version** | [**string**] | Version | (optional) defaults to undefined|


### Return type

**AutomationGet**

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

# **getAutomationExecutionFile**
> File getAutomationExecutionFile()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let traceId: string; //Execution Trace ID (default to undefined)
let spanId: string; //Execution Span ID (default to undefined)
let filename: string; //Optional filename (optional) (default to undefined)

const { status, data } = await apiInstance.getAutomationExecutionFile(
    accountId,
    traceId,
    spanId,
    filename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **traceId** | [**string**] | Execution Trace ID | defaults to undefined|
| **spanId** | [**string**] | Execution Span ID | defaults to undefined|
| **filename** | [**string**] | Optional filename | (optional) defaults to undefined|


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

# **getAutomationExecutionLog**
> Array<AutomationLog> getAutomationExecutionLog()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let traceId: string; //Execution Trace ID (default to undefined)

const { status, data } = await apiInstance.getAutomationExecutionLog(
    accountId,
    traceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **traceId** | [**string**] | Execution Trace ID | defaults to undefined|


### Return type

**Array<AutomationLog>**

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

# **getAutomationExecutions**
> PageDTOAutomationExecution getAutomationExecutions()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let mailboxId: string; // (optional) (default to undefined)
let envelopeId: string; // (optional) (default to undefined)
let workflowId: string; // (optional) (default to undefined)
let filename: string; // (optional) (default to undefined)
let from: number; // (optional) (default to undefined)
let to: number; // (optional) (default to undefined)
let state: 'FAILED' | 'SUCCEED' | 'PROCESSING'; // (optional) (default to undefined)
let version: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.getAutomationExecutions(
    accountId,
    mailboxId,
    envelopeId,
    workflowId,
    filename,
    from,
    to,
    state,
    version,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **mailboxId** | [**string**] |  | (optional) defaults to undefined|
| **envelopeId** | [**string**] |  | (optional) defaults to undefined|
| **workflowId** | [**string**] |  | (optional) defaults to undefined|
| **filename** | [**string**] |  | (optional) defaults to undefined|
| **from** | [**number**] |  | (optional) defaults to undefined|
| **to** | [**number**] |  | (optional) defaults to undefined|
| **state** | [**&#39;FAILED&#39; | &#39;SUCCEED&#39; | &#39;PROCESSING&#39;**]**Array<&#39;FAILED&#39; &#124; &#39;SUCCEED&#39; &#124; &#39;PROCESSING&#39;>** |  | (optional) defaults to undefined|
| **version** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**PageDTOAutomationExecution**

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

# **getAutomations**
> Array<AutomationGetList> getAutomations()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let name: string; //Filter by name (optional) (default to undefined)
let status: boolean; //Filter by active status (optional) (default to undefined)
let hidden: boolean; //Filter by hidden status (optional) (default to undefined)

const { status, data } = await apiInstance.getAutomations(
    accountId,
    name,
    status,
    hidden
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **name** | [**string**] | Filter by name | (optional) defaults to undefined|
| **status** | [**boolean**] | Filter by active status | (optional) defaults to undefined|
| **hidden** | [**boolean**] | Filter by hidden status | (optional) defaults to undefined|


### Return type

**Array<AutomationGetList>**

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

# **getBrickTypes**
> Array<BrickTypeGet> getBrickTypes()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getBrickTypes(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**Array<BrickTypeGet>**

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

# **getCredentialTypes**
> Array<CredentialTypeGet> getCredentialTypes()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getCredentialTypes(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**Array<CredentialTypeGet>**

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

# **getCredentials**
> Array<CredentialsGetList> getCredentials()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let name: string; //Filter by name (optional) (default to undefined)
let type: string; //Filter by type (optional) (default to undefined)

const { status, data } = await apiInstance.getCredentials(
    accountId,
    name,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **name** | [**string**] | Filter by name | (optional) defaults to undefined|
| **type** | [**string**] | Filter by type | (optional) defaults to undefined|


### Return type

**Array<CredentialsGetList>**

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

# **reprocessExecution**
> reprocessExecution()


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let traceId: string; //Execution Trace ID (default to undefined)
let spanId: string; //Execution Span ID (default to undefined)
let version: string; //Version (optional) (default to undefined)

const { status, data } = await apiInstance.reprocessExecution(
    accountId,
    traceId,
    spanId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **traceId** | [**string**] | Execution Trace ID | defaults to undefined|
| **spanId** | [**string**] | Execution Span ID | defaults to undefined|
| **version** | [**string**] | Version | (optional) defaults to undefined|


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

# **updateAutomation**
> updateAutomation(automationUpdate)


### Example

```typescript
import {
    AutomationControllerApi,
    Configuration,
    AutomationUpdate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AutomationControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //Automation UUID (default to undefined)
let automationUpdate: AutomationUpdate; //

const { status, data } = await apiInstance.updateAutomation(
    accountId,
    id,
    automationUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **automationUpdate** | **AutomationUpdate**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | Automation UUID | defaults to undefined|


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

