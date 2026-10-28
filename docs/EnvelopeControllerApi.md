# EnvelopeControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptUserPendingInvitations**](#acceptuserpendinginvitations) | **POST** /api/v1/envelope/invitations | Accept user\&#39;s pending invitations|
|[**addEnvelopesIntoChain**](#addenvelopesintochain) | **PUT** /api/v1/envelope/chain/{chainId} | Add envelopes into chain|
|[**addReviewers**](#addreviewers) | **PUT** /api/v1/envelope/editorial-review/{id}/flow | Add reviewers to a running editorial review|
|[**approve**](#approve) | **POST** /api/v1/envelope/approve | Approve envelope|
|[**archiveEnvelope**](#archiveenvelope) | **PATCH** /api/v1/envelope/archive/{flag} | Archive envelopes|
|[**cancelApprovalFlow**](#cancelapprovalflow) | **DELETE** /api/v1/envelope/{id}/approval/{flowUuid} | Cancel envelope approval|
|[**cancelEnvelopeDelegation**](#cancelenvelopedelegation) | **DELETE** /api/v1/envelope/delegate | Cancel envelope delegation|
|[**cancelEnvelopes**](#cancelenvelopes) | **DELETE** /api/v1/envelope/cancel | Cancel envelopes|
|[**check**](#check) | **POST** /api/v1/envelope/check | Check an envelope|
|[**checkEnvelopeHasActiveRole**](#checkenvelopehasactiverole) | **HEAD** /api/v1/envelope/{id}/has-active-role | Check envelope has active role|
|[**checkUserHasInvitations**](#checkuserhasinvitations) | **HEAD** /api/v1/envelope/invitations | Check user has pending invitations|
|[**cloneAttachment**](#cloneattachment) | **POST** /api/v1/envelope/clone-attachment | Clone an existing attachment|
|[**confirmInvite**](#confirminvite) | **POST** /api/v1/envelope/confirm-invite | Accept/confirm invitations|
|[**continueScenarioStep**](#continuescenariostep) | **POST** /api/v1/envelope/{id}/scenario/{stepId} | Continue scenario flow with step|
|[**createAttachment**](#createattachment) | **POST** /api/v1/envelope/attachment | Create/upload new attachment|
|[**createEnvelope**](#createenvelope) | **POST** /api/v1/envelope | Create draft envelope|
|[**createEnvelopeComment**](#createenvelopecomment) | **POST** /api/v1/envelope/{id}/comment | Create envelope comment thread|
|[**createPdfAttachment**](#createpdfattachment) | **POST** /api/v1/envelope/pdf-attachment | Create/upload new PDF attachment|
|[**delegateEnvelopes**](#delegateenvelopes) | **POST** /api/v1/envelope/delegate | Delegate envelopes|
|[**deleteDrafts**](#deletedrafts) | **DELETE** /api/v1/envelope | Delete draft envelopes|
|[**deleteEnvelopeComment**](#deleteenvelopecomment) | **DELETE** /api/v1/envelope/{id}/comment | Delete envelope comment in thread or the whole thread|
|[**deleteEnvelopeMetadata**](#deleteenvelopemetadata) | **DELETE** /api/v1/envelope/{id}/metadata | Delete envelope metadata|
|[**downloadEnvelopeAttachment**](#downloadenvelopeattachment) | **GET** /api/v1/envelope/attachment | Download attachment with specific type or raw|
|[**downloadFinalPdf**](#downloadfinalpdf) | **GET** /api/v1/envelope/{id}/download-final-pdf | Download final PDF|
|[**downloadSharedAttachment**](#downloadsharedattachment) | **GET** /api/v1/envelope/shared-attachment | Download shared attachment for specific provider|
|[**envelopeApproval**](#envelopeapproval) | **PUT** /api/v1/envelope/approval | Approve or Reject envelopes|
|[**envelopeApprovalHistory**](#envelopeapprovalhistory) | **GET** /api/v1/envelope/{id}/approval-history | Get approval history|
|[**fill**](#fill) | **PUT** /api/v1/envelope/fill | Fill envelope|
|[**generateStamp**](#generatestamp) | **POST** /api/v1/envelope/generate-stamp | Generate stamp by certificate|
|[**getActiveRoles**](#getactiveroles) | **GET** /api/v1/envelope/{id}/activeRoles | Get active roles by Envelope UUID|
|[**getApprovalFlow**](#getapprovalflow) | **GET** /api/v1/envelope/{id}/approval/{flowUuid} | Get envelope approval|
|[**getArchiveInfo**](#getarchiveinfo) | **GET** /api/v1/envelope/attachment/archive-info | Get attachment archive info (p7s, asice, pdf)|
|[**getAttachmentPageSizes**](#getattachmentpagesizes) | **GET** /api/v1/envelope/attachment/page-sizes | Get attachment page sizes|
|[**getChainEnvelopes**](#getchainenvelopes) | **GET** /api/v1/envelope/chain/{chainId} | Get chain envelopes list|
|[**getDocumentFileForSign**](#getdocumentfileforsign) | **GET** /api/v1/envelope/{id}/for-sign-file | Get BINARY or XML for signing|
|[**getDocumentPrintVersion**](#getdocumentprintversion) | **GET** /api/v1/envelope/{id}/for-print | Get document PDF for printing|
|[**getDocumentsForSign**](#getdocumentsforsign) | **POST** /api/v1/envelope/{id}/for-sign | BINARYs and XMLs for signing|
|[**getEnvelopeByUuid**](#getenvelopebyuuid) | **GET** /api/v1/envelope/{envelopeUuid} | Retrieve envelope by UUID|
|[**getEnvelopeComments**](#getenvelopecomments) | **GET** /api/v1/envelope/{id}/comment | Get envelope comments for each document|
|[**getEnvelopeInviteAuthorized**](#getenvelopeinviteauthorized) | **GET** /api/v1/envelope/invite-authorized-info | Get information about envelope by the invitation code (by already registered user)|
|[**getEnvelopeInviteUnauthorized**](#getenvelopeinviteunauthorized) | **GET** /api/v1/envelope/invite-info | Get information about envelope by the invitation code (by unauthenticated user)|
|[**getEnvelopeSharedZip**](#getenvelopesharedzip) | **GET** /api/v1/envelope/download-shared | Get shared zip archive|
|[**getEnvelopeZip**](#getenvelopezip) | **GET** /api/v1/envelope/{id}/zip | Get envelope or document zip archive|
|[**getMassSigningReport**](#getmasssigningreport) | **GET** /api/v1/envelope/signing-report/{sessionId} | Get mass signing report|
|[**getPaymentDetails**](#getpaymentdetails) | **GET** /api/v1/envelope/payment-details/{accessCode} | Get payment details of a payment link for the checkout page|
|[**getPaymentLink**](#getpaymentlink) | **POST** /api/v1/envelope/{id}/payment-link | Get the public checkout link of a QR pay field; the role of the field must be completed|
|[**getUserPendingInvitations**](#getuserpendinginvitations) | **GET** /api/v1/envelope/invitations | Get user\&#39;s pending invitations|
|[**markEnvelopesAsRead**](#markenvelopesasread) | **POST** /api/v1/envelope/mark-as-read | Mark envelopes as read by mailbox|
|[**mergeEnvelopesIntoChain**](#mergeenvelopesintochain) | **POST** /api/v1/envelope/chain | Merge envelopes into chain|
|[**numberToText**](#numbertotext) | **POST** /api/v1/envelope/number-to-text | Convert a numeric amount to words|
|[**oneTimeSend**](#onetimesend) | **POST** /api/v1/envelope/one-time-send | The envelope will be sent just once (template will be marked as deleted)|
|[**publicQuickSendWithOneExternalDocument**](#publicquicksendwithoneexternaldocument) | **POST** /api/v1/envelope/public-quick-send | Public quick send envelope with one external document|
|[**quickSendExternalDocuments**](#quicksendexternaldocuments) | **POST** /api/v1/envelope/quick-send | Quick send envelope with external documents only|
|[**recycleBin**](#recyclebin) | **PATCH** /api/v1/envelope/recycle-bin/{flag} | Archive envelopes|
|[**removeEnvelopeFromChain**](#removeenvelopefromchain) | **DELETE** /api/v1/envelope/{id}/chain | Remove envelope from chain|
|[**removeEnvelopesFromChain**](#removeenvelopesfromchain) | **PUT** /api/v1/envelope/unchain | Remove envelopes from chain|
|[**resendNotifications**](#resendnotifications) | **POST** /api/v1/envelope/notify | Resend notifications for active roles|
|[**resolvedEnvelopeComment**](#resolvedenvelopecomment) | **POST** /api/v1/envelope/{id}/resolve-comment | Set Resolved Flag for comment thread|
|[**revokeEnvelopeSharing**](#revokeenvelopesharing) | **DELETE** /api/v1/envelope/share-copy | Revoke sharing an envelope copy|
|[**reworkEditorialReview**](#reworkeditorialreview) | **POST** /api/v1/envelope/editorial-review/{id}/rework | Send editorial review back for rework|
|[**send**](#send) | **POST** /api/v1/envelope/send | Send envelope|
|[**sendByTemplateCode**](#sendbytemplatecode) | **POST** /api/v1/envelope/send-by-share-code | Send envelope by template code|
|[**sendForApproval**](#sendforapproval) | **PUT** /api/v1/envelope/send-for-approval | Send envelope for approval|
|[**shareEnvelopesByEmail**](#shareenvelopesbyemail) | **POST** /api/v1/envelope/share-archive | Share envelopes by email|
|[**shareEnvelopesCopy**](#shareenvelopescopy) | **POST** /api/v1/envelope/share-copy | Share envelopes copies|
|[**signEnvelope**](#signenvelope) | **PUT** /api/v1/envelope/{id}/sign | Sign envelope documents|
|[**signSES**](#signses) | **POST** /api/v1/envelope/{id}/sign-ses | Sign envelope with SES|
|[**startEditorialReviewForExternalDocuments**](#starteditorialreviewforexternaldocuments) | **POST** /api/v1/envelope/editorial-review | Start editorial review of DOC, DOCX|
|[**updateEnvelope**](#updateenvelope) | **PUT** /api/v1/envelope | Update envelope without sending|
|[**updateEnvelopeComment**](#updateenvelopecomment) | **PUT** /api/v1/envelope/{id}/comment | Add/Update envelope comment in thread|
|[**updateEnvelopeCommentAccess**](#updateenvelopecommentaccess) | **PUT** /api/v1/envelope/{id}/comment-access | Update envelope comment thread access level|
|[**updateEnvelopeMetadata**](#updateenvelopemetadata) | **PUT** /api/v1/envelope/{id}/metadata | Update envelope metadata. Will be saved on the account level|
|[**updateFlow**](#updateflow) | **POST** /api/v1/envelope/{id}/flow-update | Update recipient email/mailbox for not finished roles in a sent envelope|

# **acceptUserPendingInvitations**
> acceptUserPendingInvitations(requestBody)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **addEnvelopesIntoChain**
> addEnvelopesIntoChain(requestBody)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **addReviewers**
> addReviewers(reviewFlowUpdateRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    ReviewFlowUpdateRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope of the editorial review (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reviewFlowUpdateRequest: ReviewFlowUpdateRequest; //

const { status, data } = await apiInstance.addReviewers(
    id,
    mailbox,
    reviewFlowUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewFlowUpdateRequest** | **ReviewFlowUpdateRequest**|  | |
| **id** | [**string**] | Envelope of the editorial review | defaults to undefined|
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

# **approve**
> SingleUuidDTO approve(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.approve(
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
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

# **archiveEnvelope**
> archiveEnvelope(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let flag: boolean; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.archiveEnvelope(
    flag,
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
| **flag** | [**boolean**] |  | defaults to undefined|
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

# **cancelApprovalFlow**
> cancelApprovalFlow()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope to approve (default to undefined)
let flowUuid: string; //Flow to approve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.cancelApprovalFlow(
    id,
    flowUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope to approve | defaults to undefined|
| **flowUuid** | [**string**] | Flow to approve | defaults to undefined|
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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelEnvelopeDelegation**
> cancelEnvelopeDelegation(envelopeCancelDelegationDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvelopeCancelDelegationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeCancelDelegationDTO: EnvelopeCancelDelegationDTO; //

const { status, data } = await apiInstance.cancelEnvelopeDelegation(
    mailbox,
    envelopeCancelDelegationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeCancelDelegationDTO** | **EnvelopeCancelDelegationDTO**|  | |
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

# **cancelEnvelopes**
> SingleUuidDTO cancelEnvelopes(envCancellationRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvCancellationRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envCancellationRequestDTO: EnvCancellationRequestDTO; //

const { status, data } = await apiInstance.cancelEnvelopes(
    mailbox,
    envCancellationRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envCancellationRequestDTO** | **EnvCancellationRequestDTO**|  | |
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

# **check**
> ValidationResponseDTO check(envDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envDTO: EnvDTO; //

const { status, data } = await apiInstance.check(
    mailbox,
    envDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envDTO** | **EnvDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**ValidationResponseDTO**

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

# **checkEnvelopeHasActiveRole**
> checkEnvelopeHasActiveRole()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //UUID of envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.checkEnvelopeHasActiveRole(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of envelope | defaults to undefined|
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

# **checkUserHasInvitations**
> checkUserHasInvitations()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **cloneAttachment**
> UploadedAttachmentDTO cloneAttachment()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let attachmentUuid: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.cloneAttachment(
    attachmentUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentUuid** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**UploadedAttachmentDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmInvite**
> confirmInvite(envelopeConfirmInviteDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvelopeConfirmInviteDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **continueScenarioStep**
> Array<SingleUuidDTO> continueScenarioStep()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let stepId: string; //Step id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.continueScenarioStep(
    id,
    stepId,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **stepId** | [**string**] | Step id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<SingleUuidDTO>**

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

# **createAttachment**
> UploadedAttachmentDTO createAttachment()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let file: File; // (default to undefined)
let type: 'all' | 'document' | 'file' | 'image' | 'archive'; // (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.createAttachment(
    file,
    type,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **type** | [**&#39;all&#39; | &#39;document&#39; | &#39;file&#39; | &#39;image&#39; | &#39;archive&#39;**]**Array<&#39;all&#39; &#124; &#39;document&#39; &#124; &#39;file&#39; &#124; &#39;image&#39; &#124; &#39;archive&#39;>** |  | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**UploadedAttachmentDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEnvelope**
> SingleUuidDTO createEnvelope(envPostDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envPostDTO: EnvPostDTO; //

const { status, data } = await apiInstance.createEnvelope(
    mailbox,
    envPostDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envPostDTO** | **EnvPostDTO**|  | |
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

# **createEnvelopeComment**
> CommentThreadDTO createEnvelopeComment(commentPostDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    CommentPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **createPdfAttachment**
> UploadedAttachmentDTO createPdfAttachment()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let file: File; // (default to undefined)
let action: 'DELETE' | 'KEEP' | 'KEEP_SAFE'; //Action for fields inside the PDF file (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.createPdfAttachment(
    file,
    action,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **action** | [**&#39;DELETE&#39; | &#39;KEEP&#39; | &#39;KEEP_SAFE&#39;**]**Array<&#39;DELETE&#39; &#124; &#39;KEEP&#39; &#124; &#39;KEEP_SAFE&#39;>** | Action for fields inside the PDF file | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**UploadedAttachmentDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delegateEnvelopes**
> SingleUuidDTO delegateEnvelopes(envDelegationDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvDelegationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envDelegationDTO: EnvDelegationDTO; //

const { status, data } = await apiInstance.delegateEnvelopes(
    mailbox,
    envDelegationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envDelegationDTO** | **EnvDelegationDTO**|  | |
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

# **deleteDrafts**
> deleteDrafts(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.deleteDrafts(
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
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

# **deleteEnvelopeComment**
> CommentThreadDTO deleteEnvelopeComment()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **deleteEnvelopeMetadata**
> deleteEnvelopeMetadata()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let key: Set<string>; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEnvelopeMetadata(
    id,
    mailbox,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **key** | **Set&lt;string&gt;** |  | (optional) defaults to undefined|


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

# **downloadEnvelopeAttachment**
> File downloadEnvelopeAttachment()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let accept: string; // (default to undefined)
let attachmentUuid: string; //Attachment UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeUuid: string; //Envelope UUID (optional) (default to undefined)

const { status, data } = await apiInstance.downloadEnvelopeAttachment(
    accept,
    attachmentUuid,
    mailbox,
    envelopeUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | defaults to undefined|
| **attachmentUuid** | [**string**] | Attachment UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFinalPdf**
> File downloadFinalPdf()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document ID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)

const { status, data } = await apiInstance.downloadFinalPdf(
    id,
    documentId,
    mailbox,
    wait
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document ID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadSharedAttachment**
> File downloadSharedAttachment()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let provider: string; //Sharing provider name (default to undefined)
let attachmentUuid: string; //Attachment UUID (default to undefined)

const { status, data } = await apiInstance.downloadSharedAttachment(
    provider,
    attachmentUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | Sharing provider name | defaults to undefined|
| **attachmentUuid** | [**string**] | Attachment UUID | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **envelopeApproval**
> envelopeApproval(approvalStatusDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    ApprovalStatusDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let approvalStatusDTO: ApprovalStatusDTO; //

const { status, data } = await apiInstance.envelopeApproval(
    mailbox,
    approvalStatusDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approvalStatusDTO** | **ApprovalStatusDTO**|  | |
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

# **envelopeApprovalHistory**
> Array<EnvelopeApprovalHistoryDTO> envelopeApprovalHistory()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.envelopeApprovalHistory(
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

**Array<EnvelopeApprovalHistoryDTO>**

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

# **fill**
> fill(envDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envDTO: EnvDTO; //

const { status, data } = await apiInstance.fill(
    mailbox,
    envDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envDTO** | **EnvDTO**|  | |
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

# **generateStamp**
> File generateStamp(stampRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    StampRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let stampRequestDTO: StampRequestDTO; //

const { status, data } = await apiInstance.generateStamp(
    mailbox,
    stampRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stampRequestDTO** | **StampRequestDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveRoles**
> Array<SingleUuidDTO> getActiveRoles()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //UUID of envelope to get active roles from (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getActiveRoles(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of envelope to get active roles from | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<SingleUuidDTO>**

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

# **getApprovalFlow**
> EnvelopeApprovalHistoryDTO getApprovalFlow()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope to approve (default to undefined)
let flowUuid: string; //Flow to approve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getApprovalFlow(
    id,
    flowUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope to approve | defaults to undefined|
| **flowUuid** | [**string**] | Flow to approve | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**EnvelopeApprovalHistoryDTO**

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

# **getArchiveInfo**
> ArchiveAttachmentInfo getArchiveInfo()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let attachmentId: string; //Attachment UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeId: string; //Envelope UUID (optional) (default to undefined)
let convert2Pdf: boolean; //Convert to PDF (optional) (default to undefined)

const { status, data } = await apiInstance.getArchiveInfo(
    attachmentId,
    mailbox,
    envelopeId,
    convert2Pdf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] | Attachment UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **envelopeId** | [**string**] | Envelope UUID | (optional) defaults to undefined|
| **convert2Pdf** | [**boolean**] | Convert to PDF | (optional) defaults to undefined|


### Return type

**ArchiveAttachmentInfo**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAttachmentPageSizes**
> PdfPageSizes getAttachmentPageSizes()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let attachmentUuid: string; //Attachment UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeUuid: string; //Envelope UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getAttachmentPageSizes(
    attachmentUuid,
    mailbox,
    envelopeUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentUuid** | [**string**] | Attachment UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | (optional) defaults to undefined|


### Return type

**PdfPageSizes**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

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
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **getDocumentFileForSign**
> File getDocumentFileForSign()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document ID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let xml: boolean; //Is XML? (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentFileForSign(
    id,
    documentId,
    mailbox,
    xml
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document ID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **xml** | [**boolean**] | Is XML? | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentPrintVersion**
> File getDocumentPrintVersion()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document id (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentPrintVersion(
    id,
    documentId,
    mailbox,
    wait
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document id | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|


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

# **getDocumentsForSign**
> Array<DocumentForSigningDTO> getDocumentsForSign(documentsForSignRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    DocumentsForSignRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let documentsForSignRequestDTO: DocumentsForSignRequestDTO; //
let sessionId: string; //Mass signing session UUID (optional) (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)
let forceGost: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentsForSign(
    id,
    mailbox,
    documentsForSignRequestDTO,
    sessionId,
    wait,
    forceGost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentsForSignRequestDTO** | **DocumentsForSignRequestDTO**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **sessionId** | [**string**] | Mass signing session UUID | (optional) defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|
| **forceGost** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<DocumentForSigningDTO>**

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvelopeByUuid**
> EnvelopeWithTemplateDTO getEnvelopeByUuid()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let envelopeUuid: string; //UUID of envelope to retrieve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getEnvelopeByUuid(
    envelopeUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeUuid** | [**string**] | UUID of envelope to retrieve | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**EnvelopeWithTemplateDTO**

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
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **getEnvelopeInviteAuthorized**
> InvitedEnvelopeInfoDTO getEnvelopeInviteAuthorized()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **getEnvelopeSharedZip**
> File getEnvelopeSharedZip()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let code: string; //Code for downloading (default to undefined)

const { status, data } = await apiInstance.getEnvelopeSharedZip(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Code for downloading | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvelopeZip**
> File getEnvelopeZip()

Anonymous users download it with the access code of a payment link; files visible only to some roles are not included

### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let documentId: string; //Document ID (optional) (default to undefined)
let excludeFiles: string; //Mask to exclude some files. c - for signature/processing Certificate, p - for Printable version, a - for Audit trail (optional) (default to undefined)
let zipStructureName: string; //The name of pre-saved zip structure in the template (optional) (default to undefined)
let wait: boolean; //Wait for a file instead of 425 error (optional) (default to undefined)
let accessCode: string; //Access code of a payment link, for anonymous users (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvelopeZip(
    id,
    documentId,
    excludeFiles,
    zipStructureName,
    wait,
    accessCode,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **documentId** | [**string**] | Document ID | (optional) defaults to undefined|
| **excludeFiles** | [**string**] | Mask to exclude some files. c - for signature/processing Certificate, p - for Printable version, a - for Audit trail | (optional) defaults to undefined|
| **zipStructureName** | [**string**] | The name of pre-saved zip structure in the template | (optional) defaults to undefined|
| **wait** | [**boolean**] | Wait for a file instead of 425 error | (optional) defaults to undefined|
| **accessCode** | [**string**] | Access code of a payment link, for anonymous users | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMassSigningReport**
> File getMassSigningReport()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let sessionId: string; //Mass signing session UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getMassSigningReport(
    sessionId,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] | Mass signing session UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


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

# **getPaymentDetails**
> PaymentDetails getPaymentDetails()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let accessCode: string; //Access code from the payment link (default to undefined)

const { status, data } = await apiInstance.getPaymentDetails(
    accessCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accessCode** | [**string**] | Access code from the payment link | defaults to undefined|


### Return type

**PaymentDetails**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentLink**
> PaymentLink getPaymentLink(paymentLinkRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    PaymentLinkRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let paymentLinkRequest: PaymentLinkRequest; //

const { status, data } = await apiInstance.getPaymentLink(
    id,
    mailbox,
    paymentLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentLinkRequest** | **PaymentLinkRequest**|  | |
| **id** | [**string**] | Envelope UUID | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**PaymentLink**

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

# **getUserPendingInvitations**
> PageDTOEnvelopeToMailboxDTO getUserPendingInvitations()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **markEnvelopesAsRead**
> markEnvelopesAsRead(markAsReadRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    MarkAsReadRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let markAsReadRequest: MarkAsReadRequest; //

const { status, data } = await apiInstance.markEnvelopesAsRead(
    mailbox,
    markAsReadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markAsReadRequest** | **MarkAsReadRequest**|  | |
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

# **mergeEnvelopesIntoChain**
> SingleUuidDTO mergeEnvelopesIntoChain(requestBody)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **numberToText**
> string numberToText(numberToTextRequest)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    NumberToTextRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let numberToTextRequest: NumberToTextRequest; //

const { status, data } = await apiInstance.numberToText(
    numberToTextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **numberToTextRequest** | **NumberToTextRequest**|  | |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oneTimeSend**
> SingleUuidDTO oneTimeSend(oneTimeSendDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    OneTimeSendDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let oneTimeSendDTO: OneTimeSendDTO; //

const { status, data } = await apiInstance.oneTimeSend(
    mailbox,
    oneTimeSendDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oneTimeSendDTO** | **OneTimeSendDTO**|  | |
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

# **publicQuickSendWithOneExternalDocument**
> IdResult publicQuickSendWithOneExternalDocument()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    PublicQuickSend
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let data: PublicQuickSend; // (default to undefined)
let file: File; //File for external document (default to undefined)

const { status, data } = await apiInstance.publicQuickSendWithOneExternalDocument(
    data,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **PublicQuickSend** |  | defaults to undefined|
| **file** | [**File**] | File for external document | defaults to undefined|


### Return type

**IdResult**

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

# **quickSendExternalDocuments**
> SingleUuidDTO quickSendExternalDocuments()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    QuickSendDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let data: QuickSendDTO; // (default to undefined)
let files: Array<File>; //Files for external documents (default to undefined)

const { status, data } = await apiInstance.quickSendExternalDocuments(
    mailbox,
    data,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **data** | **QuickSendDTO** |  | defaults to undefined|
| **files** | **Array&lt;File&gt;** | Files for external documents | defaults to undefined|


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

# **recycleBin**
> recycleBin(bulkEnvelopeActionDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    BulkEnvelopeActionDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let flag: boolean; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let bulkEnvelopeActionDTO: BulkEnvelopeActionDTO; //

const { status, data } = await apiInstance.recycleBin(
    flag,
    mailbox,
    bulkEnvelopeActionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEnvelopeActionDTO** | **BulkEnvelopeActionDTO**|  | |
| **flag** | [**boolean**] |  | defaults to undefined|
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

# **removeEnvelopeFromChain**
> removeEnvelopeFromChain()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **resendNotifications**
> resendNotifications(reportEnvelopeRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    ReportEnvelopeRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reportEnvelopeRequestDTO: ReportEnvelopeRequestDTO; //

const { status, data } = await apiInstance.resendNotifications(
    mailbox,
    reportEnvelopeRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportEnvelopeRequestDTO** | **ReportEnvelopeRequestDTO**|  | |
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
    EnvelopeControllerApi,
    Configuration,
    ResolveCommentThreadDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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
    EnvelopeControllerApi,
    Configuration,
    EnvelopeSharedCopyRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **reworkEditorialReview**
> reworkEditorialReview()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    ReviewReworkRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Id of envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let reviewReworkRequest: ReviewReworkRequest; // (optional)

const { status, data } = await apiInstance.reworkEditorialReview(
    id,
    mailbox,
    reviewReworkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewReworkRequest** | **ReviewReworkRequest**|  | |
| **id** | [**string**] | Id of envelope | defaults to undefined|
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

# **send**
> SingleUuidDTO send(envPostDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvPostDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envPostDTO: EnvPostDTO; //

const { status, data } = await apiInstance.send(
    mailbox,
    envPostDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envPostDTO** | **EnvPostDTO**|  | |
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

# **sendByTemplateCode**
> LoginEnvelopeResponseDTO sendByTemplateCode(sendEnvByCodeDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    SendEnvByCodeDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let sendEnvByCodeDTO: SendEnvByCodeDTO; //

const { status, data } = await apiInstance.sendByTemplateCode(
    sendEnvByCodeDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEnvByCodeDTO** | **SendEnvByCodeDTO**|  | |


### Return type

**LoginEnvelopeResponseDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | OK |  -  |
|**405** | Method disabled by configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendForApproval**
> SingleUuidDTO sendForApproval(envelopeApprovalRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvelopeApprovalRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeApprovalRequestDTO: EnvelopeApprovalRequestDTO; //

const { status, data } = await apiInstance.sendForApproval(
    mailbox,
    envelopeApprovalRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeApprovalRequestDTO** | **EnvelopeApprovalRequestDTO**|  | |
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

# **shareEnvelopesByEmail**
> shareEnvelopesByEmail(envelopeSharedArchiveRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvelopeSharedArchiveRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeSharedArchiveRequestDTO: EnvelopeSharedArchiveRequestDTO; //

const { status, data } = await apiInstance.shareEnvelopesByEmail(
    mailbox,
    envelopeSharedArchiveRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeSharedArchiveRequestDTO** | **EnvelopeSharedArchiveRequestDTO**|  | |
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
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shareEnvelopesCopy**
> ShareEnvelopesResult shareEnvelopesCopy(envelopeSharedCopyRequestDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvelopeSharedCopyRequestDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **signEnvelope**
> signEnvelope(envelopeDocumentSignaturesDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope to update (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envelopeDocumentSignaturesDTO: Array<EnvelopeDocumentSignaturesDTO>; //
let sessionId: string; //Mass signing session UUID (optional) (default to undefined)

const { status, data } = await apiInstance.signEnvelope(
    id,
    mailbox,
    envelopeDocumentSignaturesDTO,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envelopeDocumentSignaturesDTO** | **Array<EnvelopeDocumentSignaturesDTO>**|  | |
| **id** | [**string**] | Envelope to update | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **sessionId** | [**string**] | Mass signing session UUID | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth), [formAuth](../README.md#formAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signSES**
> signSES(body)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //Envelope to fill (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let body: string; //
let sessionId: string; //Mass signing session UUID (optional) (default to undefined)

const { status, data } = await apiInstance.signSES(
    id,
    mailbox,
    body,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **id** | [**string**] | Envelope to fill | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **sessionId** | [**string**] | Mass signing session UUID | (optional) defaults to undefined|


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

# **startEditorialReviewForExternalDocuments**
> SingleUuidDTO startEditorialReviewForExternalDocuments()


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EditorialReviewInitRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let data: EditorialReviewInitRequest; // (default to undefined)
let files: Array<File>; //Files for external documents (default to undefined)

const { status, data } = await apiInstance.startEditorialReviewForExternalDocuments(
    mailbox,
    data,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **data** | **EditorialReviewInitRequest** |  | defaults to undefined|
| **files** | **Array&lt;File&gt;** | Files for external documents | defaults to undefined|


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

# **updateEnvelope**
> updateEnvelope(envPutDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    EnvPutDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let envPutDTO: EnvPutDTO; //

const { status, data } = await apiInstance.updateEnvelope(
    mailbox,
    envPutDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **envPutDTO** | **EnvPutDTO**|  | |
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

# **updateEnvelopeComment**
> CommentThreadDTO updateEnvelopeComment(commentPutDTO)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration,
    CommentPutDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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
    EnvelopeControllerApi,
    Configuration,
    CommentAccessDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

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

# **updateEnvelopeMetadata**
> updateEnvelopeMetadata(requestBody)


### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; // (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.updateEnvelopeMetadata(
    id,
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |
| **id** | [**string**] |  | defaults to undefined|
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

# **updateFlow**
> updateFlow(flowUpdate)

Sender can change addressee for any role whose invitation has not been accepted yet. Old invitation codes are revoked and new notifications are sent. Limited to one change per envelope per minute.

### Example

```typescript
import {
    EnvelopeControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new EnvelopeControllerApi(configuration);

let id: string; //UUID of envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let flowUpdate: Array<FlowUpdate>; //

const { status, data } = await apiInstance.updateFlow(
    id,
    mailbox,
    flowUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowUpdate** | **Array<FlowUpdate>**|  | |
| **id** | [**string**] | UUID of envelope | defaults to undefined|
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

