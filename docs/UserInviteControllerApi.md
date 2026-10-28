# UserInviteControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptInvite**](#acceptinvite) | **POST** /api/v1/user/invite/accept/{inviteCode} | Accept invite|
|[**createInvitation**](#createinvitation) | **POST** /api/v1/user/invite | Create invitation to join account or mailbox with defined permissions|
|[**declineInvite**](#declineinvite) | **DELETE** /api/v1/user/invite/decline/{inviteCode} | Decline invite|
|[**getInvites**](#getinvites) | **GET** /api/v1/user/invites | Get paged invites list|
|[**updateInvitation**](#updateinvitation) | **PUT** /api/v1/user/invite/{id} | Update invitation by userUuid|

# **acceptInvite**
> acceptInvite()


### Example

```typescript
import {
    UserInviteControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserInviteControllerApi(configuration);

let inviteCode: string; //Invite code (default to undefined)

const { status, data } = await apiInstance.acceptInvite(
    inviteCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteCode** | [**string**] | Invite code | defaults to undefined|


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

# **createInvitation**
> SingleUuidDTO createInvitation(invitationPostDTO)


### Example

```typescript
import {
    UserInviteControllerApi,
    Configuration,
    InvitationPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserInviteControllerApi(configuration);

let invitationPostDTO: InvitationPostDTO; //

const { status, data } = await apiInstance.createInvitation(
    invitationPostDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationPostDTO** | **InvitationPostDTO**|  | |


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

# **declineInvite**
> declineInvite()


### Example

```typescript
import {
    UserInviteControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserInviteControllerApi(configuration);

let inviteCode: string; //Invite code (default to undefined)

const { status, data } = await apiInstance.declineInvite(
    inviteCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteCode** | [**string**] | Invite code | defaults to undefined|


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

# **getInvites**
> PageDTOUserInvitationDTO getInvites()


### Example

```typescript
import {
    UserInviteControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserInviteControllerApi(configuration);

let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.getInvites(
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOUserInvitationDTO**

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

# **updateInvitation**
> updateInvitation(invitationPutDTO)


### Example

```typescript
import {
    UserInviteControllerApi,
    Configuration,
    InvitationPutDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new UserInviteControllerApi(configuration);

let id: string; // (default to undefined)
let invitationPutDTO: InvitationPutDTO; //

const { status, data } = await apiInstance.updateInvitation(
    id,
    invitationPutDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationPutDTO** | **InvitationPutDTO**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

