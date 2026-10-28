# AiAssistantControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**envelopeAssistConversationGet**](#envelopeassistconversationget) | **GET** /api/v1/ai-assistant/envelope/{id}/history | Retrieve existing chat with AI assistant for envelope|
|[**envelopeAssistRequest**](#envelopeassistrequest) | **GET** /api/v1/ai-assistant/envelope/{id} | Chat with AI assistant|
|[**startTemplateSession**](#starttemplatesession) | **POST** /api/v1/ai-assistant/template | Start template session with AI assistant|
|[**templateAssistRequest**](#templateassistrequest) | **GET** /api/v1/ai-assistant/template-session/{id} | Chat with AI assistant|

# **envelopeAssistConversationGet**
> AiAssistantConversation envelopeAssistConversationGet()

Empty conversation will be returned if no conversation exists

### Example

```typescript
import {
    AiAssistantControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AiAssistantControllerApi(configuration);

let id: string; //UUID of Envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.envelopeAssistConversationGet(
    id,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of Envelope | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**AiAssistantConversation**

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

# **envelopeAssistRequest**
> string envelopeAssistRequest()

Ask question or request summary about the envelope

### Example

```typescript
import {
    AiAssistantControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AiAssistantControllerApi(configuration);

let id: string; //UUID of Envelope (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let message: string; //User message (optional) (default to undefined)

const { status, data } = await apiInstance.envelopeAssistRequest(
    id,
    mailbox,
    message
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | UUID of Envelope | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **message** | [**string**] | User message | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Server sent events stream |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startTemplateSession**
> IdResult startTemplateSession(templateSessionRequest)

Send template context

### Example

```typescript
import {
    AiAssistantControllerApi,
    Configuration,
    TemplateSessionRequest
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AiAssistantControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateSessionRequest: TemplateSessionRequest; //
let id: string; //Template ID (optional) (default to undefined)

const { status, data } = await apiInstance.startTemplateSession(
    mailbox,
    templateSessionRequest,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateSessionRequest** | **TemplateSessionRequest**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **id** | [**string**] | Template ID | (optional) defaults to undefined|


### Return type

**IdResult**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templateAssistRequest**
> string templateAssistRequest()

Ask question within the template context

### Example

```typescript
import {
    AiAssistantControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new AiAssistantControllerApi(configuration);

let id: string; //Session ID (default to undefined)
let message: string; //User message (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.templateAssistRequest(
    id,
    message,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Session ID | defaults to undefined|
| **message** | [**string**] | User message | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Server sent events stream |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

