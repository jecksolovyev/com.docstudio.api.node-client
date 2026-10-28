# ScenarioControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cloneScenario**](#clonescenario) | **PUT** /api/v1/scenario/{scenarioUuid}/clone | Clone scenario|
|[**createNewScenario**](#createnewscenario) | **POST** /api/v1/scenario | Create new scenario|
|[**deleteScenario**](#deletescenario) | **DELETE** /api/v1/scenario/{scenarioUuid} | Delete scenario|
|[**getRecommendations**](#getrecommendations) | **GET** /api/v1/scenario/recommendations | Get up to 6 recommended folders and scenarios per access level|
|[**getScenario**](#getscenario) | **GET** /api/v1/scenario/{scenarioUuid} | Get scenario|
|[**removeScenarioFavoriteFlag**](#removescenariofavoriteflag) | **DELETE** /api/v1/scenario/{id}/favorite | Remove favorite flag|
|[**runScenario**](#runscenario) | **POST** /api/v1/scenario/{scenarioUuid} | Run scenario|
|[**searchScenarios**](#searchscenarios) | **GET** /api/v1/scenario | Get paged scenario list|
|[**setScenarioFavoriteFlag**](#setscenariofavoriteflag) | **PUT** /api/v1/scenario/{id}/favorite | Mark scenario as favorite|
|[**updateScenario**](#updatescenario) | **PUT** /api/v1/scenario/{scenarioUuid} | Update scenario|
|[**updateScenarioCategories**](#updatescenariocategories) | **PATCH** /api/v1/scenario/{id}/categories | Update categories in scenario|

# **cloneScenario**
> ScenarioDTO cloneScenario()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let scenarioUuid: string; //Scenario uuid (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.cloneScenario(
    scenarioUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioUuid** | [**string**] | Scenario uuid | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ScenarioDTO**

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

# **createNewScenario**
> ScenarioDTO createNewScenario(scenarioDTO)


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration,
    ScenarioDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let scenarioDTO: ScenarioDTO; //

const { status, data } = await apiInstance.createNewScenario(
    mailbox,
    scenarioDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioDTO** | **ScenarioDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ScenarioDTO**

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

# **deleteScenario**
> deleteScenario()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let scenarioUuid: string; //Scenario uuid (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteScenario(
    scenarioUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioUuid** | [**string**] | Scenario uuid | defaults to undefined|
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

# **getRecommendations**
> ScenarioRecommendationsResponse getRecommendations()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getRecommendations(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ScenarioRecommendationsResponse**

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

# **getScenario**
> ScenarioDTO getScenario()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let scenarioUuid: string; //Scenario uuid (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getScenario(
    scenarioUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioUuid** | [**string**] | Scenario uuid | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ScenarioDTO**

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

# **removeScenarioFavoriteFlag**
> removeScenarioFavoriteFlag()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let id: string; //UUID of scenario (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.removeScenarioFavoriteFlag(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of scenario | defaults to undefined|
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

# **runScenario**
> SingleUuidDTO runScenario()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let scenarioUuid: string; //Scenario uuid (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.runScenario(
    scenarioUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioUuid** | [**string**] | Scenario uuid | defaults to undefined|
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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchScenarios**
> PageDTOScenarioShortDTO searchScenarios()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let level: 'mailbox' | 'account' | 'public' | 'official' | 'shared' | 'public-hidden'; //Scenario access level (optional) (default to undefined)
let category: string; //Category id to search scenario in (optional) (default to undefined)
let favorite: boolean; //Filter only favorite or not favorite scenarios (optional) (default to undefined)
let excludeCategorized: boolean; //Exclude scenarios if they are located in any other category, except categoryId, within same access level (optional) (default to undefined)
let keyword: string; //Keyword to search scenario by or scenario UUID (optional) (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.searchScenarios(
    mailbox,
    level,
    category,
    favorite,
    excludeCategorized,
    keyword,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **level** | [**&#39;mailbox&#39; | &#39;account&#39; | &#39;public&#39; | &#39;official&#39; | &#39;shared&#39; | &#39;public-hidden&#39;**]**Array<&#39;mailbox&#39; &#124; &#39;account&#39; &#124; &#39;public&#39; &#124; &#39;official&#39; &#124; &#39;shared&#39; &#124; &#39;public-hidden&#39;>** | Scenario access level | (optional) defaults to undefined|
| **category** | [**string**] | Category id to search scenario in | (optional) defaults to undefined|
| **favorite** | [**boolean**] | Filter only favorite or not favorite scenarios | (optional) defaults to undefined|
| **excludeCategorized** | [**boolean**] | Exclude scenarios if they are located in any other category, except categoryId, within same access level | (optional) defaults to undefined|
| **keyword** | [**string**] | Keyword to search scenario by or scenario UUID | (optional) defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOScenarioShortDTO**

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

# **setScenarioFavoriteFlag**
> setScenarioFavoriteFlag()


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let id: string; //UUID of scenario (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.setScenarioFavoriteFlag(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of scenario | defaults to undefined|
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

# **updateScenario**
> ScenarioDTO updateScenario(scenarioDTO)


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration,
    ScenarioDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let scenarioUuid: string; //Scenario uuid (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let scenarioDTO: ScenarioDTO; //

const { status, data } = await apiInstance.updateScenario(
    scenarioUuid,
    mailbox,
    scenarioDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioDTO** | **ScenarioDTO**|  | |
| **scenarioUuid** | [**string**] | Scenario uuid | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ScenarioDTO**

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

# **updateScenarioCategories**
> updateScenarioCategories(requestBody)


### Example

```typescript
import {
    ScenarioControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ScenarioControllerApi(configuration);

let id: string; //Scenario UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Array<string>; //

const { status, data } = await apiInstance.updateScenarioCategories(
    id,
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |
| **id** | [**string**] | Scenario UUID | defaults to undefined|
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

