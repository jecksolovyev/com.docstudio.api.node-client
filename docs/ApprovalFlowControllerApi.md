# ApprovalFlowControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApprovalFlow**](#createapprovalflow) | **POST** /api/v1/approvalFlow | Create approval flow|
|[**deleteApprovalFlow**](#deleteapprovalflow) | **DELETE** /api/v1/approvalFlow | Delete approval flows|
|[**retrieve**](#retrieve) | **GET** /api/v1/approvalFlow/{flowUuid} | Retrieve approval flow|
|[**search**](#search) | **GET** /api/v1/approvalFlow | Retrieve approval flows|
|[**updateApprovalFlow**](#updateapprovalflow) | **PUT** /api/v1/approvalFlow/{flowUuid} | Update approval flow|

# **createApprovalFlow**
> SingleUuidDTO createApprovalFlow(mailboxApprovalFlowDTO)


### Example

```typescript
import {
    ApprovalFlowControllerApi,
    Configuration,
    MailboxApprovalFlowDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalFlowControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let mailboxApprovalFlowDTO: MailboxApprovalFlowDTO; //

const { status, data } = await apiInstance.createApprovalFlow(
    mailbox,
    mailboxApprovalFlowDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxApprovalFlowDTO** | **MailboxApprovalFlowDTO**|  | |
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

# **deleteApprovalFlow**
> deleteApprovalFlow(requestBody)


### Example

```typescript
import {
    ApprovalFlowControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalFlowControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Array<string>; //

const { status, data } = await apiInstance.deleteApprovalFlow(
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |
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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve**
> MailboxApprovalFlowGetDTO retrieve()


### Example

```typescript
import {
    ApprovalFlowControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalFlowControllerApi(configuration);

let flowUuid: string; //UUID of the approval flow (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.retrieve(
    flowUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowUuid** | [**string**] | UUID of the approval flow | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**MailboxApprovalFlowGetDTO**

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

# **search**
> PageDTOMailboxApprovalFlowGetDTO search()


### Example

```typescript
import {
    ApprovalFlowControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalFlowControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let keyword: string; //Keyword to search approval flow by name (optional) (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.search(
    mailbox,
    keyword,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **keyword** | [**string**] | Keyword to search approval flow by name | (optional) defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOMailboxApprovalFlowGetDTO**

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

# **updateApprovalFlow**
> updateApprovalFlow(mailboxApprovalFlowDTO)


### Example

```typescript
import {
    ApprovalFlowControllerApi,
    Configuration,
    MailboxApprovalFlowDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalFlowControllerApi(configuration);

let flowUuid: string; //UUID of the approval flow (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let mailboxApprovalFlowDTO: MailboxApprovalFlowDTO; //

const { status, data } = await apiInstance.updateApprovalFlow(
    flowUuid,
    mailbox,
    mailboxApprovalFlowDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxApprovalFlowDTO** | **MailboxApprovalFlowDTO**|  | |
| **flowUuid** | [**string**] | UUID of the approval flow | defaults to undefined|
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

