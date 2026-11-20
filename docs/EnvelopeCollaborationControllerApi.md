# EnvelopeCollaborationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addEnvelopesIntoChain**](#addenvelopesintochain) | **PUT** /api/v1/envelope/chain/{chainId} | Add envelopes into chain|
|[**createEnvelopeComment**](#createenvelopecomment) | **POST** /api/v1/envelope/{id}/comment | Create envelope comment thread|
|[**deleteEnvelopeComment**](#deleteenvelopecomment) | **DELETE** /api/v1/envelope/{id}/comment | Delete envelope comment in thread or the whole thread|
|[**getChainEnvelopes**](#getchainenvelopes) | **GET** /api/v1/envelope/chain/{chainId} | Get chain envelopes list|
|[**getEnvelopeComments**](#getenvelopecomments) | **GET** /api/v1/envelope/{id}/comment | Get envelope comments for each document|
|[**mergeEnvelopesIntoChain**](#mergeenvelopesintochain) | **POST** /api/v1/envelope/chain | Merge envelopes into chain|
|[**removeEnvelopeFromChain**](#removeenvelopefromchain) | **DELETE** /api/v1/envelope/{id}/chain | Remove envelope from chain|
|[**removeEnvelopesFromChain**](#removeenvelopesfromchain) | **PUT** /api/v1/envelope/unchain | Remove envelopes from chain|
|[**resolvedEnvelopeComment**](#resolvedenvelopecomment) | **POST** /api/v1/envelope/{id}/resolve-comment | Set Resolved Flag for comment thread|
|[**revokeEnvelopeSharing**](#revokeenvelopesharing) | **DELETE** /api/v1/envelope/share-copy | Revoke sharing an envelope copy|
|[**shareEnvelopesCopy**](#shareenvelopescopy) | **POST** /api/v1/envelope/share-copy | Share envelopes copies|
|[**updateEnvelopeComment**](#updateenvelopecomment) | **PUT** /api/v1/envelope/{id}/comment | Add/Update envelope comment in thread|
|[**updateEnvelopeCommentAccess**](#updateenvelopecommentaccess) | **PUT** /api/v1/envelope/{id}/comment-access | Update envelope comment thread access level|

# **addEnvelopesIntoChain**
> addEnvelopesIntoChain(requestBody)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let chainId: string; //Chain UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.addEnvelopesIntoChain(
    chainId,
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
| **chainId** | [**string**] | Chain UUID | defaults to undefined|
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

# **createEnvelopeComment**
> CommentThreadDTO createEnvelopeComment(commentPostDTO)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration,
    CommentPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let commentPostDTO: CommentPostDTO; //

const { status, data } = await apiInstance.createEnvelopeComment(
    id,
    mailbox,
    commentPostDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentPostDTO** | **CommentPostDTO**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**CommentThreadDTO**

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

# **deleteEnvelopeComment**
> CommentThreadDTO deleteEnvelopeComment()


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let threadUuid: string; //Thread UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let messageId: number; //Message ID (optional) (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEnvelopeComment(
    id,
    threadUuid,
    mailbox,
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **threadUuid** | [**string**] | Thread UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **messageId** | [**number**] | Message ID (optional) | (optional) defaults to undefined|


### Return type

**CommentThreadDTO**

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

# **getChainEnvelopes**
> Array<ChainEnvelopeDTO> getChainEnvelopes()


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let chainId: string; //Chain UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getChainEnvelopes(
    chainId,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chainId** | [**string**] | Chain UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<ChainEnvelopeDTO>**

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

# **getEnvelopeComments**
> Array<DocumentCommentsDTO> getEnvelopeComments()


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getEnvelopeComments(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<DocumentCommentsDTO>**

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

# **mergeEnvelopesIntoChain**
> SingleUuidDTO mergeEnvelopesIntoChain(requestBody)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.mergeEnvelopesIntoChain(
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeEnvelopeFromChain**
> removeEnvelopeFromChain()


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.removeEnvelopeFromChain(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
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

# **removeEnvelopesFromChain**
> removeEnvelopesFromChain(requestBody)

Remove one or more envelopes from chain. Send list of envelope UUIDs in the request body to be removed from the chain. 

### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Set<string>; //

const { status, data } = await apiInstance.removeEnvelopesFromChain(
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Set<string>**|  | |
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

# **resolvedEnvelopeComment**
> resolvedEnvelopeComment(resolveCommentThreadDTO)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration,
    ResolveCommentThreadDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let resolveCommentThreadDTO: ResolveCommentThreadDTO; //

const { status, data } = await apiInstance.resolvedEnvelopeComment(
    id,
    mailbox,
    resolveCommentThreadDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveCommentThreadDTO** | **ResolveCommentThreadDTO**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
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

# **revokeEnvelopeSharing**
> revokeEnvelopeSharing(envelopeSharedCopyRequestDTO)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration,
    EnvelopeSharedCopyRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeSharedCopyRequestDTO: EnvelopeSharedCopyRequestDTO; //

const { status, data } = await apiInstance.revokeEnvelopeSharing(
    mailbox,
    envelopeSharedCopyRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeSharedCopyRequestDTO** | **EnvelopeSharedCopyRequestDTO**|  | |
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

# **shareEnvelopesCopy**
> ShareEnvelopesResult shareEnvelopesCopy(envelopeSharedCopyRequestDTO)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration,
    EnvelopeSharedCopyRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeSharedCopyRequestDTO: EnvelopeSharedCopyRequestDTO; //

const { status, data } = await apiInstance.shareEnvelopesCopy(
    mailbox,
    envelopeSharedCopyRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeSharedCopyRequestDTO** | **EnvelopeSharedCopyRequestDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ShareEnvelopesResult**

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

# **updateEnvelopeComment**
> CommentThreadDTO updateEnvelopeComment(commentPutDTO)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration,
    CommentPutDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let commentPutDTO: CommentPutDTO; //

const { status, data } = await apiInstance.updateEnvelopeComment(
    id,
    mailbox,
    commentPutDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentPutDTO** | **CommentPutDTO**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**CommentThreadDTO**

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

# **updateEnvelopeCommentAccess**
> CommentThreadDTO updateEnvelopeCommentAccess(commentAccessDTO)


### Example

```typescript
import {
    EnvelopeCollaborationControllerApi,
    Configuration,
    CommentAccessDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeCollaborationControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let commentAccessDTO: CommentAccessDTO; //

const { status, data } = await apiInstance.updateEnvelopeCommentAccess(
    id,
    mailbox,
    commentAccessDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentAccessDTO** | **CommentAccessDTO**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**CommentThreadDTO**

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

