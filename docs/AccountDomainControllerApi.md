# AccountDomainControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**actionAccountDomain**](#actionaccountdomain) | **PATCH** /api/v1/account/{accountUuid}/domain/{domainUuid}/{action} | Change account domain status|
|[**createAccountDomain**](#createaccountdomain) | **POST** /api/v1/account/{accountUuid}/domain | Create account domain|
|[**createAccountOauthProvider**](#createaccountoauthprovider) | **POST** /api/v1/account/{accountId}/oauth-provider | Create account OAuth2 Provider|
|[**createAccountSsoIdp**](#createaccountssoidp) | **POST** /api/v1/account/{accountId}/saml-provider | Create account SAML2 Identity Provider|
|[**deleteAccountDomain**](#deleteaccountdomain) | **DELETE** /api/v1/account/{accountUuid}/domain/{domainUuid} | Delete account domain|
|[**deleteAccountIdp**](#deleteaccountidp) | **DELETE** /api/v1/account/{accountId}/saml-provider/{id} | Delete account SAML2 IdP|
|[**deleteAccountOauthProvider**](#deleteaccountoauthprovider) | **DELETE** /api/v1/account/{accountId}/oauth-provider/{id} | Delete account OAuth2 Provider|
|[**getAccountDomain**](#getaccountdomain) | **GET** /api/v1/account/{accountUuid}/domain/{domainUuid} | Get account domain|
|[**getAccountDomains**](#getaccountdomains) | **GET** /api/v1/account/{accountUuid}/domain | Get paged account domains list|
|[**getAccountIdp**](#getaccountidp) | **GET** /api/v1/account/{accountId}/saml-provider/{id} | Get account SAML2 IdP|
|[**getAccountOauthProvider**](#getaccountoauthprovider) | **GET** /api/v1/account/{accountId}/oauth-provider/{id} | Get account OAuth2 Provider|
|[**getAllAccountIdps**](#getallaccountidps) | **GET** /api/v1/account/{accountId}/saml-provider | Get all account SAML2 IdPs|
|[**getAllAccountOauthProviders**](#getallaccountoauthproviders) | **GET** /api/v1/account/{accountId}/oauth-provider | Get all account OAuth2 Providers|
|[**updateAccountDomain**](#updateaccountdomain) | **PUT** /api/v1/account/{accountUuid}/domain/{domainUuid} | Update account domain|
|[**updateAccountOauthProvider**](#updateaccountoauthprovider) | **PUT** /api/v1/account/{accountId}/oauth-provider/{id} | Update account OAuth2 Provider|
|[**updateAccountSsoIdp**](#updateaccountssoidp) | **PUT** /api/v1/account/{accountId}/saml-provider/{id} | Update account SAML2 Identity Provider|

# **actionAccountDomain**
> AccountDomainDTO actionAccountDomain()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    ChangeDomainStatusDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let domainUuid: string; //Domain UUID (default to undefined)
let action: 'verify' | 'activate' | 'deactivate' | 'confirm' | 'check'; //Action (default to undefined)
let changeDomainStatusDTO: ChangeDomainStatusDTO; // (optional)

const { status, data } = await apiInstance.actionAccountDomain(
    accountUuid,
    domainUuid,
    action,
    changeDomainStatusDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeDomainStatusDTO** | **ChangeDomainStatusDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **domainUuid** | [**string**] | Domain UUID | defaults to undefined|
| **action** | [**&#39;verify&#39; | &#39;activate&#39; | &#39;deactivate&#39; | &#39;confirm&#39; | &#39;check&#39;**]**Array<&#39;verify&#39; &#124; &#39;activate&#39; &#124; &#39;deactivate&#39; &#124; &#39;confirm&#39; &#124; &#39;check&#39;>** | Action | defaults to undefined|


### Return type

**AccountDomainDTO**

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

# **createAccountDomain**
> AccountDomainDTO createAccountDomain(accountDomainCreate)


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    AccountDomainCreate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let accountDomainCreate: AccountDomainCreate; //

const { status, data } = await apiInstance.createAccountDomain(
    accountUuid,
    accountDomainCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountDomainCreate** | **AccountDomainCreate**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**AccountDomainDTO**

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

# **createAccountOauthProvider**
> AccountOauthProviderDTO createAccountOauthProvider(accountOauthProviderUpdateDTO)


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    AccountOauthProviderUpdateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let accountOauthProviderUpdateDTO: AccountOauthProviderUpdateDTO; //

const { status, data } = await apiInstance.createAccountOauthProvider(
    accountId,
    accountOauthProviderUpdateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountOauthProviderUpdateDTO** | **AccountOauthProviderUpdateDTO**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**AccountOauthProviderDTO**

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

# **createAccountSsoIdp**
> AccountSamlProviderDTO createAccountSsoIdp(accountSamlProviderUpdateDTO)


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    AccountSamlProviderUpdateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let accountSamlProviderUpdateDTO: AccountSamlProviderUpdateDTO; //

const { status, data } = await apiInstance.createAccountSsoIdp(
    accountId,
    accountSamlProviderUpdateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountSamlProviderUpdateDTO** | **AccountSamlProviderUpdateDTO**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**AccountSamlProviderDTO**

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

# **deleteAccountDomain**
> deleteAccountDomain()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let domainUuid: string; //Domain UUID (default to undefined)

const { status, data } = await apiInstance.deleteAccountDomain(
    accountUuid,
    domainUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **domainUuid** | [**string**] | Domain UUID | defaults to undefined|


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

# **deleteAccountIdp**
> deleteAccountIdp()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //IdP UUID (default to undefined)

const { status, data } = await apiInstance.deleteAccountIdp(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | IdP UUID | defaults to undefined|


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

# **deleteAccountOauthProvider**
> deleteAccountOauthProvider()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //OAuth2 Provider UUID (default to undefined)

const { status, data } = await apiInstance.deleteAccountOauthProvider(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | OAuth2 Provider UUID | defaults to undefined|


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

# **getAccountDomain**
> AccountDomainDTO getAccountDomain()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let domainUuid: string; //Domain UUID (default to undefined)

const { status, data } = await apiInstance.getAccountDomain(
    accountUuid,
    domainUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **domainUuid** | [**string**] | Domain UUID | defaults to undefined|


### Return type

**AccountDomainDTO**

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

# **getAccountDomains**
> PageDTOAccountDomainDTO getAccountDomains()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)
let keyword: string; //Domain name or part of name (optional) (default to undefined)
let status: 'UNVERIFIED' | 'ACTIVE' | 'INACTIVE' | 'VERIFIED'; //Domain status (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountDomains(
    accountUuid,
    offset,
    limit,
    keyword,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|
| **keyword** | [**string**] | Domain name or part of name | (optional) defaults to undefined|
| **status** | [**&#39;UNVERIFIED&#39; | &#39;ACTIVE&#39; | &#39;INACTIVE&#39; | &#39;VERIFIED&#39;**]**Array<&#39;UNVERIFIED&#39; &#124; &#39;ACTIVE&#39; &#124; &#39;INACTIVE&#39; &#124; &#39;VERIFIED&#39;>** | Domain status | (optional) defaults to undefined|


### Return type

**PageDTOAccountDomainDTO**

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

# **getAccountIdp**
> AccountSamlProviderDTO getAccountIdp()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //IdP UUID (default to undefined)

const { status, data } = await apiInstance.getAccountIdp(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | IdP UUID | defaults to undefined|


### Return type

**AccountSamlProviderDTO**

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

# **getAccountOauthProvider**
> AccountOauthProviderDTO getAccountOauthProvider()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //OAuth2 Provider UUID (default to undefined)

const { status, data } = await apiInstance.getAccountOauthProvider(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | OAuth2 Provider UUID | defaults to undefined|


### Return type

**AccountOauthProviderDTO**

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

# **getAllAccountIdps**
> Array<AccountSsoIdProviderShortDTO> getAllAccountIdps()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getAllAccountIdps(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account UUID | defaults to undefined|


### Return type

**Array<AccountSsoIdProviderShortDTO>**

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

# **getAllAccountOauthProviders**
> Array<AccountSsoIdProviderShortDTO> getAllAccountOauthProviders()


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account ID (default to undefined)

const { status, data } = await apiInstance.getAllAccountOauthProviders(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account ID | defaults to undefined|


### Return type

**Array<AccountSsoIdProviderShortDTO>**

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

# **updateAccountDomain**
> AccountDomainDTO updateAccountDomain(accountDomainUpdate)


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    AccountDomainUpdate
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let domainUuid: string; //Domain UUID (default to undefined)
let accountDomainUpdate: AccountDomainUpdate; //

const { status, data } = await apiInstance.updateAccountDomain(
    accountUuid,
    domainUuid,
    accountDomainUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountDomainUpdate** | **AccountDomainUpdate**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **domainUuid** | [**string**] | Domain UUID | defaults to undefined|


### Return type

**AccountDomainDTO**

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

# **updateAccountOauthProvider**
> AccountOauthProviderDTO updateAccountOauthProvider(accountOauthProviderUpdateDTO)


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    AccountOauthProviderUpdateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //OAuth2 Provider UUID (default to undefined)
let accountOauthProviderUpdateDTO: AccountOauthProviderUpdateDTO; //

const { status, data } = await apiInstance.updateAccountOauthProvider(
    accountId,
    id,
    accountOauthProviderUpdateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountOauthProviderUpdateDTO** | **AccountOauthProviderUpdateDTO**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | OAuth2 Provider UUID | defaults to undefined|


### Return type

**AccountOauthProviderDTO**

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

# **updateAccountSsoIdp**
> AccountSamlProviderDTO updateAccountSsoIdp(accountSamlProviderUpdateDTO)


### Example

```typescript
import {
    AccountDomainControllerApi,
    Configuration,
    AccountSamlProviderUpdateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountDomainControllerApi(configuration);

let accountId: string; //Account UUID (default to undefined)
let id: string; //IdP UUID (default to undefined)
let accountSamlProviderUpdateDTO: AccountSamlProviderUpdateDTO; //

const { status, data } = await apiInstance.updateAccountSsoIdp(
    accountId,
    id,
    accountSamlProviderUpdateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountSamlProviderUpdateDTO** | **AccountSamlProviderUpdateDTO**|  | |
| **accountId** | [**string**] | Account UUID | defaults to undefined|
| **id** | [**string**] | IdP UUID | defaults to undefined|


### Return type

**AccountSamlProviderDTO**

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

