# MailboxControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMailbox**](#createmailbox) | **POST** /api/v1/mailbox/account/{uuid} | Create mailbox|
|[**customizeDashboard**](#customizedashboard) | **PUT** /api/v1/mailbox/{mailboxUuid}/dashboard | Customize mailbox dashboard|
|[**deleteMailbox**](#deletemailbox) | **DELETE** /api/v1/mailbox | Delete mailbox by UUID in the header.|
|[**deleteMailboxUsers**](#deletemailboxusers) | **DELETE** /api/v1/mailbox/{mailboxUuid}/users | Delete mailbox users except requester|
|[**deleteViewPreferences**](#deleteviewpreferences) | **DELETE** /api/v1/mailbox/view-preferences | Delete mailbox view preferences|
|[**getAccountLogoByMailbox**](#getaccountlogobymailbox) | **GET** /api/v1/mailbox/{mailboxUuid}/logo | Retrieve mailbox account logo|
|[**getActivityLog**](#getactivitylog) | **GET** /api/v1/mailbox/activity-log | Audit trail feed for mailbox|
|[**getAllForUser**](#getallforuser) | **GET** /api/v1/mailbox/user-view | Retrieve user\&#39;s mailbox list|
|[**getAllForUserWithPagination**](#getallforuserwithpagination) | **GET** /api/v1/mailbox | Retrieve user\&#39;s mailbox list with pagination|
|[**getAutoDelegation**](#getautodelegation) | **GET** /api/v1/mailbox/{mailboxUuid}/auto-delegation | Get auto delegation settings|
|[**getCustomizedDashboard**](#getcustomizeddashboard) | **GET** /api/v1/mailbox/{mailboxUuid}/dashboard | Get mailbox dashboard|
|[**getCustomizedDashboardHtml**](#getcustomizeddashboardhtml) | **GET** /api/v1/mailbox/dashboard.html | Get mailbox dashboard html|
|[**getMailboxEssentials**](#getmailboxessentials) | **GET** /api/v1/mailbox/essentials | Get mailbox essentials|
|[**getMailboxesInfo**](#getmailboxesinfo) | **POST** /api/v1/mailbox/info | Retrieve mailboxes info|
|[**getStat**](#getstat) | **GET** /api/v1/mailbox/stat | Get number of unread envelopes in every scope|
|[**getUsedTemplates**](#getusedtemplates) | **GET** /api/v1/mailbox/templates/used | List of used templates|
|[**getViewPreferences**](#getviewpreferences) | **GET** /api/v1/mailbox/view-preferences | Get mailbox view preferences|
|[**leaveMailbox**](#leavemailbox) | **DELETE** /api/v1/mailbox/{mailboxUuid}/leave | Leave mailbox if possible|
|[**patchMailbox**](#patchmailbox) | **PATCH** /api/v1/mailbox/{mailboxUuid} | Patch mailbox, return patched mailbox w/o users count|
|[**pinMailbox**](#pinmailbox) | **PUT** /api/v1/mailbox/{mailboxUuid}/pin | Mark mailbox as pinned|
|[**searchMailboxes**](#searchmailboxes) | **GET** /api/v1/mailbox/search | Search mailboxes by name, contact, alias, user|
|[**unpinMailbox**](#unpinmailbox) | **DELETE** /api/v1/mailbox/{mailboxUuid}/pin | Unmark mailbox as pinned|
|[**updateAutoDelegation**](#updateautodelegation) | **PUT** /api/v1/mailbox/{mailboxUuid}/auto-delegation | Update auto delegation settings|
|[**updateMailbox**](#updatemailbox) | **PUT** /api/v1/mailbox/{mailboxUuid} | Update mailbox|
|[**updateViewPreferences**](#updateviewpreferences) | **PUT** /api/v1/mailbox/view-preferences | Save mailbox view preferences|

# **createMailbox**
> User2MailboxDTO createMailbox(mailboxCreateDTO)


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration,
    MailboxCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let uuid: string; //UUID of account for which to create a mailbox (default to undefined)
let mailboxCreateDTO: MailboxCreateDTO; //
let code: string; //Invitation code from email (optional) (default to undefined)
let codeType: 'envelopeInvite' | 'accountInvite' | 'emailValidation' | 'sharedByEmail' | 'externalAuth'; //Type of code (optional) (default to undefined)

const { status, data } = await apiInstance.createMailbox(
    uuid,
    mailboxCreateDTO,
    code,
    codeType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxCreateDTO** | **MailboxCreateDTO**|  | |
| **uuid** | [**string**] | UUID of account for which to create a mailbox | defaults to undefined|
| **code** | [**string**] | Invitation code from email | (optional) defaults to undefined|
| **codeType** | [**&#39;envelopeInvite&#39; | &#39;accountInvite&#39; | &#39;emailValidation&#39; | &#39;sharedByEmail&#39; | &#39;externalAuth&#39;**]**Array<&#39;envelopeInvite&#39; &#124; &#39;accountInvite&#39; &#124; &#39;emailValidation&#39; &#124; &#39;sharedByEmail&#39; &#124; &#39;externalAuth&#39;>** | Type of code | (optional) defaults to undefined|


### Return type

**User2MailboxDTO**

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

# **customizeDashboard**
> customizeDashboard(mailboxDashboardDTO)


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration,
    MailboxDashboardDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)
let mailboxDashboardDTO: MailboxDashboardDTO; //

const { status, data } = await apiInstance.customizeDashboard(
    mailboxUuid,
    mailboxDashboardDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxDashboardDTO** | **MailboxDashboardDTO**|  | |
| **mailboxUuid** | [**string**] |  | defaults to undefined|


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

# **deleteMailbox**
> deleteMailbox()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let checkMessage: string; //Proof message (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let moveEntitiesToMailbox: string; //Move entities to chosen mailbox (optional) (default to undefined)

const { status, data } = await apiInstance.deleteMailbox(
    checkMessage,
    mailbox,
    moveEntitiesToMailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkMessage** | [**string**] | Proof message | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **moveEntitiesToMailbox** | [**string**] | Move entities to chosen mailbox | (optional) defaults to undefined|


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

# **deleteMailboxUsers**
> deleteMailboxUsers()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; //Mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteMailboxUsers(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] | Mailbox UUID | defaults to undefined|


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

# **deleteViewPreferences**
> deleteViewPreferences()

Deletes specified keys from mailbox view preferences. If no keys are provided, all preferences will be deleted.

### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let key: Set<string>; //Keys of preferences to delete (optional) (default to undefined)

const { status, data } = await apiInstance.deleteViewPreferences(
    mailbox,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **key** | **Set&lt;string&gt;** | Keys of preferences to delete | (optional) defaults to undefined|


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

# **getAccountLogoByMailbox**
> File getAccountLogoByMailbox()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getAccountLogoByMailbox(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] |  | defaults to undefined|


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

# **getActivityLog**
> PageDTOActivityLogRecordDTO getActivityLog()

Records sorted by date in descending order

### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let from: string; //A datetime value in \'ISO-8601\' format, lowest record date, default - 3 days ago (optional) (default to undefined)
let to: string; //A datetime value in \'ISO-8601\' format, highest record date, default - now (optional) (default to undefined)
let offset: number; //Offset, how much records to skip (optional) (default to 0)
let limit: number; //Limit, how much records to retrieve, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.getActivityLog(
    mailbox,
    from,
    to,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **from** | [**string**] | A datetime value in \&#39;ISO-8601\&#39; format, lowest record date, default - 3 days ago | (optional) defaults to undefined|
| **to** | [**string**] | A datetime value in \&#39;ISO-8601\&#39; format, highest record date, default - now | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how much records to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much records to retrieve, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOActivityLogRecordDTO**

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

# **getAllForUser**
> Array<User2MailboxDTO> getAllForUser()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let pinned: boolean; //Return all pinned mailboxes (optional) (default to undefined)
let mailboxesForAccount: number; //Return mailboxes for each account (max 5) (optional) (default to undefined)
let requiredMailboxId: string; //Required mailbox in the response (optional) (default to undefined)

const { status, data } = await apiInstance.getAllForUser(
    pinned,
    mailboxesForAccount,
    requiredMailboxId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pinned** | [**boolean**] | Return all pinned mailboxes | (optional) defaults to undefined|
| **mailboxesForAccount** | [**number**] | Return mailboxes for each account (max 5) | (optional) defaults to undefined|
| **requiredMailboxId** | [**string**] | Required mailbox in the response | (optional) defaults to undefined|


### Return type

**Array<User2MailboxDTO>**

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

# **getAllForUserWithPagination**
> PageDTOUser2MailboxDTO getAllForUserWithPagination()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let invited: boolean; //Filter mailboxes user was invited to (optional) (default to undefined)
let accountId: string; //Filter by account UUID (optional) (default to undefined)
let keyword: string; //Search by mailbox name or alias (optional) (default to undefined)
let permission: number; //Required mailbox permission in a specific account (optional) (default to undefined)
let offset: number; //Offset, how much mailboxes to skip (optional) (default to 0)
let limit: number; //Limit, how much mailboxes to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.getAllForUserWithPagination(
    invited,
    accountId,
    keyword,
    permission,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invited** | [**boolean**] | Filter mailboxes user was invited to | (optional) defaults to undefined|
| **accountId** | [**string**] | Filter by account UUID | (optional) defaults to undefined|
| **keyword** | [**string**] | Search by mailbox name or alias | (optional) defaults to undefined|
| **permission** | [**number**] | Required mailbox permission in a specific account | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how much mailboxes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much mailboxes to retrieve | (optional) defaults to 25|


### Return type

**PageDTOUser2MailboxDTO**

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

# **getAutoDelegation**
> MailboxDelegationDTO getAutoDelegation()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getAutoDelegation(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] |  | defaults to undefined|


### Return type

**MailboxDelegationDTO**

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

# **getCustomizedDashboard**
> MailboxDashboardDTO getCustomizedDashboard()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getCustomizedDashboard(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] |  | defaults to undefined|


### Return type

**MailboxDashboardDTO**

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

# **getCustomizedDashboardHtml**
> string getCustomizedDashboardHtml()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getCustomizedDashboardHtml(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMailboxEssentials**
> MailboxEssentialsDTO getMailboxEssentials()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getMailboxEssentials(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**MailboxEssentialsDTO**

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

# **getMailboxesInfo**
> { [key: string]: MailboxInfoDTO; } getMailboxesInfo(requestBody)


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let requestBody: Array<string>; //
let accountName: boolean; //Including account name (optional) (default to false)
let accountITN: boolean; //Including account ITN (optional) (default to false)

const { status, data } = await apiInstance.getMailboxesInfo(
    requestBody,
    accountName,
    accountITN
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |
| **accountName** | [**boolean**] | Including account name | (optional) defaults to false|
| **accountITN** | [**boolean**] | Including account ITN | (optional) defaults to false|


### Return type

**{ [key: string]: MailboxInfoDTO; }**

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

# **getStat**
> StatDTO getStat()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getStat(
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
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsedTemplates**
> PageDTOUsedTemplateDTO getUsedTemplates()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let name: string; //Template name to search by (optional) (default to undefined)
let offset: number; //Offset, how much envelopes to skip (optional) (default to 0)
let limit: number; //Limit, how much envelopes to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.getUsedTemplates(
    mailbox,
    name,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **name** | [**string**] | Template name to search by | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how much envelopes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much envelopes to retrieve | (optional) defaults to 25|


### Return type

**PageDTOUsedTemplateDTO**

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

# **getViewPreferences**
> { [key: string]: string; } getViewPreferences()

Retrieve preferences for mailbox view, such as templates view mode. If preferences are not set or keys are not found, returns empty preferences.

### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let key: Set<string>; //Keys of preferences to retrieve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getViewPreferences(
    key,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | **Set&lt;string&gt;** | Keys of preferences to retrieve | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**{ [key: string]: string; }**

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

# **leaveMailbox**
> leaveMailbox()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)

const { status, data } = await apiInstance.leaveMailbox(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] |  | defaults to undefined|


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

# **patchMailbox**
> AccountMailboxInfoDTO patchMailbox(mailboxPatchRequestDTO)


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration,
    MailboxPatchRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; //UUID of mailbox (default to undefined)
let mailboxPatchRequestDTO: MailboxPatchRequestDTO; //

const { status, data } = await apiInstance.patchMailbox(
    mailboxUuid,
    mailboxPatchRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxPatchRequestDTO** | **MailboxPatchRequestDTO**|  | |
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


### Return type

**AccountMailboxInfoDTO**

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

# **pinMailbox**
> pinMailbox()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; //UUID of mailbox (default to undefined)

const { status, data } = await apiInstance.pinMailbox(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


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

# **searchMailboxes**
> Array<MailboxSearchResultDTO> searchMailboxes()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let q: string; //String to search by alias, contact, user email, mailbox name or UUID (default to '')
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let type: 'ALIAS' | 'UUID'; //Search type: name, alias or uuid. Default - all values (optional) (default to undefined)

const { status, data } = await apiInstance.searchMailboxes(
    q,
    mailbox,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | String to search by alias, contact, user email, mailbox name or UUID | defaults to ''|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **type** | [**&#39;ALIAS&#39; | &#39;UUID&#39;**]**Array<&#39;ALIAS&#39; &#124; &#39;UUID&#39;>** | Search type: name, alias or uuid. Default - all values | (optional) defaults to undefined|


### Return type

**Array<MailboxSearchResultDTO>**

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

# **unpinMailbox**
> unpinMailbox()


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; //UUID of mailbox (default to undefined)

const { status, data } = await apiInstance.unpinMailbox(
    mailboxUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


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

# **updateAutoDelegation**
> updateAutoDelegation(mailboxDelegationDTO)


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration,
    MailboxDelegationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; // (default to undefined)
let mailboxDelegationDTO: MailboxDelegationDTO; //

const { status, data } = await apiInstance.updateAutoDelegation(
    mailboxUuid,
    mailboxDelegationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxDelegationDTO** | **MailboxDelegationDTO**|  | |
| **mailboxUuid** | [**string**] |  | defaults to undefined|


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

# **updateMailbox**
> AccountMailboxInfoDTO updateMailbox(mailboxUpdateRequestDTO)


### Example

```typescript
import {
    MailboxControllerApi,
    Configuration,
    MailboxUpdateRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailboxUuid: string; //UUID of mailbox (default to undefined)
let mailboxUpdateRequestDTO: MailboxUpdateRequestDTO; //

const { status, data } = await apiInstance.updateMailbox(
    mailboxUuid,
    mailboxUpdateRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxUpdateRequestDTO** | **MailboxUpdateRequestDTO**|  | |
| **mailboxUuid** | [**string**] | UUID of mailbox | defaults to undefined|


### Return type

**AccountMailboxInfoDTO**

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

# **updateViewPreferences**
> { [key: string]: string; } updateViewPreferences(requestBody)

Saves preferences for mailbox view, such as templates view mode. If preferences are not set, creates new preferences with provided values.

### Example

```typescript
import {
    MailboxControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.updateViewPreferences(
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |
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

