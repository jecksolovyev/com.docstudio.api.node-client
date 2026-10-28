# MailboxGroupControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMailboxesToGroup**](#addmailboxestogroup) | **POST** /api/v1/account/{accountUuid}/mailbox-group/{groupUuid}/mailbox | Add mailboxes to group|
|[**createMailboxGroup**](#createmailboxgroup) | **POST** /api/v1/account/{accountUuid}/mailbox-group | Create mailbox group|
|[**deleteMailboxGroup**](#deletemailboxgroup) | **DELETE** /api/v1/account/{accountUuid}/mailbox-group/{groupUuid} | Delete mailbox group|
|[**getMailboxGroup**](#getmailboxgroup) | **GET** /api/v1/account/{accountUuid}/mailbox-group/{groupUuid} | Get mailbox group|
|[**getMailboxGroupsNames**](#getmailboxgroupsnames) | **POST** /api/v1/account/{accountUuid}/mailbox-group/info | Get groups names|
|[**removeMailboxesFromGroup**](#removemailboxesfromgroup) | **DELETE** /api/v1/account/{accountUuid}/mailbox-group/{groupUuid}/mailbox | Remove mailboxes from group|
|[**searchGroups**](#searchgroups) | **GET** /api/v1/account/{accountUuid}/mailbox-group | List/search groups|
|[**updateMailboxGroup**](#updatemailboxgroup) | **PATCH** /api/v1/account/{accountUuid}/mailbox-group/{groupUuid} | Update mailbox group|

# **addMailboxesToGroup**
> GroupInfoDTO addMailboxesToGroup(requestBody)


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let groupUuid: string; //Group UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.addMailboxesToGroup(
    accountUuid,
    groupUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **groupUuid** | [**string**] | Group UUID | defaults to undefined|


### Return type

**GroupInfoDTO**

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

# **createMailboxGroup**
> GroupInfoDTO createMailboxGroup(updateGroupDTO)


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration,
    UpdateGroupDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let updateGroupDTO: UpdateGroupDTO; //

const { status, data } = await apiInstance.createMailboxGroup(
    accountUuid,
    updateGroupDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupDTO** | **UpdateGroupDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|


### Return type

**GroupInfoDTO**

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

# **deleteMailboxGroup**
> deleteMailboxGroup()


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let groupUuid: string; //Group UUID (default to undefined)

const { status, data } = await apiInstance.deleteMailboxGroup(
    accountUuid,
    groupUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **groupUuid** | [**string**] | Group UUID | defaults to undefined|


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

# **getMailboxGroup**
> GroupInfoDTO getMailboxGroup()


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let groupUuid: string; //Group UUID (default to undefined)

const { status, data } = await apiInstance.getMailboxGroup(
    accountUuid,
    groupUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **groupUuid** | [**string**] | Group UUID | defaults to undefined|


### Return type

**GroupInfoDTO**

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

# **getMailboxGroupsNames**
> Array<NameUuidDTO> getMailboxGroupsNames(requestBody)

Search groups by UUID list and return list of name and uuid

### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.getMailboxGroupsNames(
    accountUuid,
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<NameUuidDTO>**

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

# **removeMailboxesFromGroup**
> GroupInfoDTO removeMailboxesFromGroup(requestBody)


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let groupUuid: string; //Group UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.removeMailboxesFromGroup(
    accountUuid,
    groupUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **groupUuid** | [**string**] | Group UUID | defaults to undefined|


### Return type

**GroupInfoDTO**

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

# **searchGroups**
> PageDTOGroupListInfoDTO searchGroups()


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let keyword: string; //Keyword to search group by or group UUID (optional) (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)
let asc: boolean; //Sort by name in ASC order (optional) (default to true)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.searchGroups(
    accountUuid,
    keyword,
    offset,
    limit,
    asc,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **keyword** | [**string**] | Keyword to search group by or group UUID | (optional) defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|
| **asc** | [**boolean**] | Sort by name in ASC order | (optional) defaults to true|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**PageDTOGroupListInfoDTO**

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

# **updateMailboxGroup**
> GroupInfoDTO updateMailboxGroup(updateGroupDTO)


### Example

```typescript
import {
    MailboxGroupControllerApi,
    Configuration,
    UpdateGroupDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new MailboxGroupControllerApi(configuration);

let accountUuid: string; //Account UUID (default to undefined)
let groupUuid: string; //Group UUID (default to undefined)
let updateGroupDTO: UpdateGroupDTO; //

const { status, data } = await apiInstance.updateMailboxGroup(
    accountUuid,
    groupUuid,
    updateGroupDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupDTO** | **UpdateGroupDTO**|  | |
| **accountUuid** | [**string**] | Account UUID | defaults to undefined|
| **groupUuid** | [**string**] | Group UUID | defaults to undefined|


### Return type

**GroupInfoDTO**

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

