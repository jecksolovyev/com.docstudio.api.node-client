# EnvelopeInvitationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptUserPendingInvitations**](#acceptuserpendinginvitations) | **POST** /api/v1/envelope/invitations | Accept user\&#39;s pending invitations|
|[**checkUserHasInvitations**](#checkuserhasinvitations) | **HEAD** /api/v1/envelope/invitations | Check user has pending invitations|
|[**confirmInvite**](#confirminvite) | **POST** /api/v1/envelope/confirm-invite | Accept/confirm invitations|
|[**getActionLinkForUser**](#getactionlinkforuser) | **GET** /api/v1/envelope/{id}/action-link | |
|[**getEnvelopeInviteAuthorized**](#getenvelopeinviteauthorized) | **GET** /api/v1/envelope/invite-authorized-info | Get information about envelope by the invitation code (by already registered user)|
|[**getEnvelopeInviteUnauthorized**](#getenvelopeinviteunauthorized) | **GET** /api/v1/envelope/invite-info | Get information about envelope by the invitation code (by unauthenticated user)|
|[**getUserPendingInvitations**](#getuserpendinginvitations) | **GET** /api/v1/envelope/invitations | Get user\&#39;s pending invitations|

# **acceptUserPendingInvitations**
> acceptUserPendingInvitations(requestBody)


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Array<string>; //
let type: 'envelope-invite' | 'approval-invite' | 'review-invite'; //Type of the invitations (optional) (default to undefined)

const { status, data } = await apiInstance.acceptUserPendingInvitations(
    mailbox,
    requestBody,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **type** | [**&#39;envelope-invite&#39; | &#39;approval-invite&#39; | &#39;review-invite&#39;**]**Array<&#39;envelope-invite&#39; &#124; &#39;approval-invite&#39; &#124; &#39;review-invite&#39;>** | Type of the invitations | (optional) defaults to undefined|


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

# **checkUserHasInvitations**
> checkUserHasInvitations()


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

const { status, data } = await apiInstance.checkUserHasInvitations();
```

### Parameters
This endpoint does not have any parameters.


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

# **confirmInvite**
> confirmInvite(envelopeConfirmInviteDTO)


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration,
    EnvelopeConfirmInviteDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

let envelopeConfirmInviteDTO: EnvelopeConfirmInviteDTO; //

const { status, data } = await apiInstance.confirmInvite(
    envelopeConfirmInviteDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeConfirmInviteDTO** | **EnvelopeConfirmInviteDTO**|  | |


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

# **getActionLinkForUser**
> ActionLinkResponse getActionLinkForUser()


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

let id: string; //UUID of envelope (default to undefined)
let email: string; //Email of user assigned to a role (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getActionLinkForUser(
    id,
    email,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of envelope | defaults to undefined|
| **email** | [**string**] | Email of user assigned to a role | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ActionLinkResponse**

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

# **getEnvelopeInviteAuthorized**
> InvitedEnvelopeInfoDTO getEnvelopeInviteAuthorized()


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

let code: string; //Invitation code from email (default to undefined)

const { status, data } = await apiInstance.getEnvelopeInviteAuthorized(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Invitation code from email | defaults to undefined|


### Return type

**InvitedEnvelopeInfoDTO**

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

# **getEnvelopeInviteUnauthorized**
> InvitedEnvelopeInfoDTO getEnvelopeInviteUnauthorized()


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

let code: string; //Invitation code from email (default to undefined)

const { status, data } = await apiInstance.getEnvelopeInviteUnauthorized(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Invitation code from email | defaults to undefined|


### Return type

**InvitedEnvelopeInfoDTO**

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

# **getUserPendingInvitations**
> PageDTOEnvelopeToMailboxDTO getUserPendingInvitations()


### Example

```typescript
import {
    EnvelopeInvitationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeInvitationControllerApi(configuration);

let type: 'envelope-invite' | 'approval-invite' | 'review-invite'; //Invitation type (optional) (default to undefined)
let offset: number; //Offset, how much envelopes to skip (optional) (default to 0)
let limit: number; //Limit, how much envelopes to retrieve (optional) (default to 25)

const { status, data } = await apiInstance.getUserPendingInvitations(
    type,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;envelope-invite&#39; | &#39;approval-invite&#39; | &#39;review-invite&#39;**]**Array<&#39;envelope-invite&#39; &#124; &#39;approval-invite&#39; &#124; &#39;review-invite&#39;>** | Invitation type | (optional) defaults to undefined|
| **offset** | [**number**] | Offset, how much envelopes to skip | (optional) defaults to 0|
| **limit** | [**number**] | Limit, how much envelopes to retrieve | (optional) defaults to 25|


### Return type

**PageDTOEnvelopeToMailboxDTO**

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

