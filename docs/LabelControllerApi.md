# LabelControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignments**](#assignments) | **POST** /api/v1/label/assignments | Assign label to envelopes|
|[**createLabel**](#createlabel) | **POST** /api/v1/label | Save label to DB|
|[**deAssignments**](#deassignments) | **DELETE** /api/v1/label/assignments | Unassign label from envelopes|
|[**deleteLabel**](#deletelabel) | **DELETE** /api/v1/label/{uuid} | Delete label|
|[**getAllLabels**](#getalllabels) | **GET** /api/v1/label | Retrieve all labels for mailbox for authorized user|
|[**updateLabel**](#updatelabel) | **PUT** /api/v1/label/{id} | Update label|

# **assignments**
> assignments(labelAssociationDTO)


### Example

```typescript
import {
    LabelControllerApi,
    Configuration,
    LabelAssociationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new LabelControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let labelAssociationDTO: LabelAssociationDTO; //

const { status, data } = await apiInstance.assignments(
    mailbox,
    labelAssociationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelAssociationDTO** | **LabelAssociationDTO**|  | |
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

# **createLabel**
> LabelDTO createLabel(labelDTO)


### Example

```typescript
import {
    LabelControllerApi,
    Configuration,
    LabelDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new LabelControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let labelDTO: LabelDTO; //

const { status, data } = await apiInstance.createLabel(
    mailbox,
    labelDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelDTO** | **LabelDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**LabelDTO**

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

# **deAssignments**
> deAssignments(labelAssociationDTO)


### Example

```typescript
import {
    LabelControllerApi,
    Configuration,
    LabelAssociationDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new LabelControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let labelAssociationDTO: LabelAssociationDTO; //

const { status, data } = await apiInstance.deAssignments(
    mailbox,
    labelAssociationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelAssociationDTO** | **LabelAssociationDTO**|  | |
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

# **deleteLabel**
> deleteLabel()


### Example

```typescript
import {
    LabelControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new LabelControllerApi(configuration);

let uuid: string; //UUID of label to delete (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteLabel(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of label to delete | defaults to undefined|
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

# **getAllLabels**
> Array<LabelDTO> getAllLabels()


### Example

```typescript
import {
    LabelControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new LabelControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getAllLabels(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<LabelDTO>**

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

# **updateLabel**
> LabelDTO updateLabel(labelDTO)


### Example

```typescript
import {
    LabelControllerApi,
    Configuration,
    LabelDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new LabelControllerApi(configuration);

let id: string; //UUID of label to update (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let labelDTO: LabelDTO; //

const { status, data } = await apiInstance.updateLabel(
    id,
    mailbox,
    labelDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelDTO** | **LabelDTO**|  | |
| **id** | [**string**] | UUID of label to update | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**LabelDTO**

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

