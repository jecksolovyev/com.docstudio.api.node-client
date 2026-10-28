# AccountControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addNewCryptoConfigs**](#addnewcryptoconfigs) | **PUT** /api/v1/account/{accountUuid}/crypto-configs | Add crypto configs|
|[**blockUsers**](#blockusers) | **PATCH** /api/v1/account/{accountUuid}/block-users/{flag} | Block/Unblock corporate users|
|[**changeTokenActivityStatus**](#changetokenactivitystatus) | **POST** /api/v1/account/{accountId}/ai-token/{tokenId}/active/{active} | Change AI token activity status|
|[**createAccount**](#createaccount) | **POST** /api/v1/account | Create account and mailbox(es) under this account. User will be assigned with default system roles for this account and mailbox(es).|
|[**createAiToken**](#createaitoken) | **POST** /api/v1/account/{accountId}/ai-token | Create new AI token|
|[**createCorporateUser**](#createcorporateuser) | **POST** /api/v1/account/{accountUuid}/user | Create corporate user|
|[**createMassAccountUsers**](#createmassaccountusers) | **POST** /api/v1/account/{accountUuid}/create-users | Mass create corporate users|
|[**deleteAccount**](#deleteaccount) | **DELETE** /api/v1/account/{id} | Delete account|
|[**deleteAiToken**](#deleteaitoken) | **DELETE** /api/v1/account/{accountId}/ai-token/{tokenId} | Delete AI token|
|[**deleteCorporateUsers**](#deletecorporateusers) | **DELETE** /api/v1/account/{accountUuid}/user | Delete corporate users|
|[**deleteCryptoConfigs**](#deletecryptoconfigs) | **DELETE** /api/v1/account/{accountUuid}/crypto-configs | Delete crypto configs|
|[**getAccountBillingAddress**](#getaccountbillingaddress) | **GET** /api/v1/account/{accountUuid}/billing/address | Get account billing address|
|[**getAccountBrandLogo**](#getaccountbrandlogo) | **GET** /api/v1/account/brand-logo/{accountUuid} | Retrieve account brand logo|
|[**getAccountDetails**](#getaccountdetails) | **GET** /api/v1/account/{id} | |
|[**getAccountLogo**](#getaccountlogo) | **GET** /api/v1/account/logo/{accountUuid} | Retrieve account logo|
|[**getAccountUsersImportFileExample**](#getaccountusersimportfileexample) | **GET** /api/v1/account/{accountUuid}/users/example | Get account users import file example|
|[**getAiTokens**](#getaitokens) | **GET** /api/v1/account/{accountId}/ai-token | List AI tokens|
|[**getCryptoConfigs**](#getcryptoconfigs) | **GET** /api/v1/account/{accountUuid}/crypto-configs | Get crypto configs|
|[**getMailbox**](#getmailbox) | **GET** /api/v1/account/mailbox/{uuid} | Users and their permissions by mailbox|
|[**getUserMailboxesByAccount**](#getusermailboxesbyaccount) | **GET** /api/v1/account/{accountUuid}/user/{userUuid}/mailbox | Read list of mailboxes for user|
|[**getUserPolicies**](#getuserpolicies) | **GET** /api/v1/account/{accountUuid}/user-policies | Get user password/session policies|
|[**getUsersPermissions**](#getuserspermissions) | **POST** /api/v1/account/{accountUuid}/users | Get users with permissions per account and mailboxes|
|[**mailboxesReport**](#mailboxesreport) | **POST** /api/v1/account/{accountUuid}/mailbox/report | Generate account mailboxes report|
|[**resendCorporateUserWelcomeMessage**](#resendcorporateuserwelcomemessage) | **POST** /api/v1/account/{accountUuid}/user/{userUuid}/welcome | Resend corporate user welcome message|
|[**saveUserPolicies**](#saveuserpolicies) | **POST** /api/v1/account/{accountUuid}/user-policies | Save user password/session policies|
|[**searchAccountMailboxes**](#searchaccountmailboxes) | **GET** /api/v1/account/{accountUuid}/mailbox | Get paged account mailboxes list|
|[**updateAccountBillingAddress**](#updateaccountbillingaddress) | **POST** /api/v1/account/{accountUuid}/billing/address | Create/update account billing address|
|[**updateAccountDetails**](#updateaccountdetails) | **PUT** /api/v1/account/{id} | |
|[**usersReport**](#usersreport) | **POST** /api/v1/account/{accountUuid}/users/report | Generate account users report|

# **addNewCryptoConfigs**
> addNewCryptoConfigs(cryptoConfigDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let cryptoConfigDTO: Array<CryptoConfigDTO>; //

const { status, data } = await apiInstance.addNewCryptoConfigs(
    accountUuid,
    cryptoConfigDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cryptoConfigDTO** | **Array<CryptoConfigDTO>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


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

# **blockUsers**
> blockUsers(singleUuidDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let flag: boolean; //Block/Unblock flag (default to undefined)
let singleUuidDTO: Array<SingleUuidDTO>; //

const { status, data } = await apiInstance.blockUsers(
    accountUuid,
    flag,
    singleUuidDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **singleUuidDTO** | **Array<SingleUuidDTO>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **flag** | [**boolean**] | Block/Unblock flag | defaults to undefined|


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

# **changeTokenActivityStatus**
> AccountAiTokenInfo changeTokenActivityStatus()

Only one token can be active at a moment

### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountId: string; //Account ID (default to undefined)
let tokenId: string; //Token ID (default to undefined)
let active: boolean; //Activity status (default to undefined)

const { status, data } = await apiInstance.changeTokenActivityStatus(
    accountId,
    tokenId,
    active
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account ID | defaults to undefined|
| **tokenId** | [**string**] | Token ID | defaults to undefined|
| **active** | [**boolean**] | Activity status | defaults to undefined|


### Return type

**AccountAiTokenInfo**

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

# **createAccount**
> User2AccountWithMailboxesDTO createAccount(accountCreateDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    AccountCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountCreateDTO: AccountCreateDTO; //
let code: string; //Invitation code from email (optional) (default to undefined)
let codeType: 'envelopeInvite' | 'accountInvite' | 'emailValidation' | 'sharedByEmail' | 'externalAuth'; //Type of code (optional) (default to undefined)

const { status, data } = await apiInstance.createAccount(
    accountCreateDTO,
    code,
    codeType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountCreateDTO** | **AccountCreateDTO**|  | |
| **code** | [**string**] | Invitation code from email | (optional) defaults to undefined|
| **codeType** | [**&#39;envelopeInvite&#39; | &#39;accountInvite&#39; | &#39;emailValidation&#39; | &#39;sharedByEmail&#39; | &#39;externalAuth&#39;**]**Array<&#39;envelopeInvite&#39; &#124; &#39;accountInvite&#39; &#124; &#39;emailValidation&#39; &#124; &#39;sharedByEmail&#39; &#124; &#39;externalAuth&#39;>** | Type of code | (optional) defaults to undefined|


### Return type

**User2AccountWithMailboxesDTO**

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

# **createAiToken**
> AccountAiTokenInfo createAiToken(createAiTokenRequest)

Create new AI token for the account. The token will be used to access AI services.

### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    CreateAiTokenRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountId: string; //Account ID (default to undefined)
let createAiTokenRequest: CreateAiTokenRequest; //

const { status, data } = await apiInstance.createAiToken(
    accountId,
    createAiTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAiTokenRequest** | **CreateAiTokenRequest**|  | |
| **accountId** | [**string**] | Account ID | defaults to undefined|


### Return type

**AccountAiTokenInfo**

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

# **createCorporateUser**
> UserDTO createCorporateUser(corporateUserCreateDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    CorporateUserCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let corporateUserCreateDTO: CorporateUserCreateDTO; //

const { status, data } = await apiInstance.createCorporateUser(
    accountUuid,
    corporateUserCreateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **corporateUserCreateDTO** | **CorporateUserCreateDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**UserDTO**

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

# **createMassAccountUsers**
> SingleUuidDTO createMassAccountUsers()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.createMassAccountUsers(
    accountUuid,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**SingleUuidDTO**

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

# **deleteAccount**
> deleteAccount()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let checkMessage: string; //Proof message (default to undefined)
let id: string; //UUID of account to delete (default to undefined)

const { status, data } = await apiInstance.deleteAccount(
    checkMessage,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkMessage** | [**string**] | Proof message | defaults to undefined|
| **id** | [**string**] | UUID of account to delete | defaults to undefined|


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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAiToken**
> deleteAiToken()

Delete AI token for the account

### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountId: string; //Account ID (default to undefined)
let tokenId: string; //Token ID (default to undefined)

const { status, data } = await apiInstance.deleteAiToken(
    accountId,
    tokenId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account ID | defaults to undefined|
| **tokenId** | [**string**] | Token ID | defaults to undefined|


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

# **deleteCorporateUsers**
> deleteCorporateUsers(singleUuidDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let checkMessage: string; //Proof message (default to undefined)
let singleUuidDTO: Array<SingleUuidDTO>; //

const { status, data } = await apiInstance.deleteCorporateUsers(
    accountUuid,
    checkMessage,
    singleUuidDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **singleUuidDTO** | **Array<SingleUuidDTO>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **checkMessage** | [**string**] | Proof message | defaults to undefined|


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

# **deleteCryptoConfigs**
> deleteCryptoConfigs(requestBody)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.deleteCryptoConfigs(
    accountUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


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

# **getAccountBillingAddress**
> AccountAddress getAccountBillingAddress()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getAccountBillingAddress(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**AccountAddress**

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

# **getAccountBrandLogo**
> File getAccountBrandLogo()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; // (default to undefined)
let initials: boolean; //Get default avatar (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountBrandLogo(
    accountUuid,
    initials
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|
| **initials** | [**boolean**] | Get default avatar | (optional) defaults to undefined|


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

# **getAccountDetails**
> AccountDTO getAccountDetails()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAccountDetails(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AccountDTO**

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

# **getAccountLogo**
> File getAccountLogo()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; // (default to undefined)
let initials: boolean; //Get default avatar (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountLogo(
    accountUuid,
    initials
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] |  | defaults to undefined|
| **initials** | [**boolean**] | Get default avatar | (optional) defaults to undefined|


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

# **getAccountUsersImportFileExample**
> File getAccountUsersImportFileExample()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getAccountUsersImportFileExample(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


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

# **getAiTokens**
> Array<AccountAiTokenInfo> getAiTokens()

List all AI tokens for the account

### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountId: string; //Account ID (default to undefined)

const { status, data } = await apiInstance.getAiTokens(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Account ID | defaults to undefined|


### Return type

**Array<AccountAiTokenInfo>**

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

# **getCryptoConfigs**
> Array<CryptoConfigDTO> getCryptoConfigs()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getCryptoConfigs(
    accountUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**Array<CryptoConfigDTO>**

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

# **getMailbox**
> MailboxAccountSimpleDTO getMailbox()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.getMailbox(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**MailboxAccountSimpleDTO**

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

# **getUserMailboxesByAccount**
> PageDTOMailboxRolePermissionDTO getUserMailboxesByAccount()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let userUuid: string; //User UUID (default to undefined)
let hasPermissions: boolean; //Filter mailboxes by any user permission existence (optional) (default to undefined)
let keyword: string; //Keyword to search mailbox by or mailbox UUID (optional) (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.getUserMailboxesByAccount(
    accountUuid,
    userUuid,
    hasPermissions,
    keyword,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **userUuid** | [**string**] | User UUID | defaults to undefined|
| **hasPermissions** | [**boolean**] | Filter mailboxes by any user permission existence | (optional) defaults to undefined|
| **keyword** | [**string**] | Keyword to search mailbox by or mailbox UUID | (optional) defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOMailboxRolePermissionDTO**

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

# **getUserPolicies**
> AccountPoliciesDTO getUserPolicies()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)

const { status, data } = await apiInstance.getUserPolicies(
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**AccountPoliciesDTO**

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

# **getUsersPermissions**
> PageDTOUserMailboxPermissionsDTO getUsersPermissions(usersSearchFilterDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    UsersSearchFilterDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //UUID of Account (default to undefined)
let usersSearchFilterDTO: UsersSearchFilterDTO; //
let offset: number; //Offset, how much envelopes to skip (optional) (default to 0)
let limit: number; //Limit, how much envelopes to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.getUsersPermissions(
    accountUuid,
    usersSearchFilterDTO,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usersSearchFilterDTO** | **UsersSearchFilterDTO**|  | |
| **accountUuid** | [**string**] | UUID of Account | defaults to undefined|
| **offset** | [**number**] | Offset, how much envelopes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much envelopes to retrieve | (optional) defaults to 25|


### Return type

**PageDTOUserMailboxPermissionsDTO**

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

# **mailboxesReport**
> mailboxesReport(reportMailboxesRequestDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    ReportMailboxesRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let reportMailboxesRequestDTO: ReportMailboxesRequestDTO; //

const { status, data } = await apiInstance.mailboxesReport(
    accountUuid,
    reportMailboxesRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportMailboxesRequestDTO** | **ReportMailboxesRequestDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


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

# **resendCorporateUserWelcomeMessage**
> resendCorporateUserWelcomeMessage()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let userUuid: string; //User UUID (default to undefined)

const { status, data } = await apiInstance.resendCorporateUserWelcomeMessage(
    accountUuid,
    userUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **userUuid** | [**string**] | User UUID | defaults to undefined|


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

# **saveUserPolicies**
> saveUserPolicies(accountPoliciesDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    AccountPoliciesDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let accountPoliciesDTO: AccountPoliciesDTO; //

const { status, data } = await apiInstance.saveUserPolicies(
    accountUuid,
    accountPoliciesDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountPoliciesDTO** | **AccountPoliciesDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


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

# **searchAccountMailboxes**
> PageDTOAccountMailboxInfoDTO searchAccountMailboxes()


### Example

```typescript
import {
    AccountControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let keyword: string; //Keyword to search mailbox by or mailbox UUID (optional) (default to undefined)
let group: Set<string>; //Groups to filter by (optional) (default to undefined)
let _short: boolean; //Return only UUID and Name (optional) (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.searchAccountMailboxes(
    accountUuid,
    keyword,
    group,
    _short,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **keyword** | [**string**] | Keyword to search mailbox by or mailbox UUID | (optional) defaults to undefined|
| **group** | **Set&lt;string&gt;** | Groups to filter by | (optional) defaults to undefined|
| **_short** | [**boolean**] | Return only UUID and Name | (optional) defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOAccountMailboxInfoDTO**

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

# **updateAccountBillingAddress**
> AccountAddress updateAccountBillingAddress(accountAddress)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    AccountAddress
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let accountAddress: AccountAddress; //

const { status, data } = await apiInstance.updateAccountBillingAddress(
    accountUuid,
    accountAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountAddress** | **AccountAddress**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**AccountAddress**

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

# **updateAccountDetails**
> AccountDTO updateAccountDetails(updateAccountRequest)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    UpdateAccountRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let id: string; // (default to undefined)
let updateAccountRequest: UpdateAccountRequest; //

const { status, data } = await apiInstance.updateAccountDetails(
    id,
    updateAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountRequest** | **UpdateAccountRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AccountDTO**

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

# **usersReport**
> usersReport(reportUsersRequestDTO)


### Example

```typescript
import {
    AccountControllerApi,
    Configuration,
    ReportUsersRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AccountControllerApi(configuration);

let accountUuid: string; //UUID of Account (default to undefined)
let reportUsersRequestDTO: ReportUsersRequestDTO; //

const { status, data } = await apiInstance.usersReport(
    accountUuid,
    reportUsersRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportUsersRequestDTO** | **ReportUsersRequestDTO**|  | |
| **accountUuid** | [**string**] | UUID of Account | defaults to undefined|


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

