# TemplateControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addZipStructure**](#addzipstructure) | **PUT** /api/v1/template/{uuid}/zip-structure | Add new files structure for zip archive|
|[**archiveTemplate**](#archivetemplate) | **PATCH** /api/v1/template/{uuid}/archive | Make template archived|
|[**checkTemplateExistsByUuid**](#checktemplateexistsbyuuid) | **HEAD** /api/v1/template/{uuid} | Check template exists by UUID|
|[**clone**](#clone) | **POST** /api/v1/template/{uuid}/clone | Clone template|
|[**createTemplate**](#createtemplate) | **POST** /api/v1/template | Create new template|
|[**deleteShareCode**](#deletesharecode) | **DELETE** /api/v1/template/{uuid}/share-code | Delete share code for template|
|[**deleteZipStructure**](#deletezipstructure) | **DELETE** /api/v1/template/{uuid}/zip-structure/{title} | Delete structure for zip archive|
|[**downloadTemplateImage**](#downloadtemplateimage) | **GET** /api/v1/template/{uuid}/image | Download template image|
|[**downloadTemplatePdf**](#downloadtemplatepdf) | **GET** /api/v1/template/{uuid}/pdf | Download template PDF|
|[**getPdfPageSizes**](#getpdfpagesizes) | **GET** /api/v1/template/{uuid}/pdf-page-sizes | Get PDF page sizes|
|[**getRecentlyUsedTemplates**](#getrecentlyusedtemplates) | **GET** /api/v1/template/recently-used | Get up to 10 recently used templates|
|[**getRecommendedTemplates**](#getrecommendedtemplates) | **GET** /api/v1/template/recommended | Get up to 4 recommended templates|
|[**getSavedZipStructureNames**](#getsavedzipstructurenames) | **GET** /api/v1/template/{uuid}/zip-structure-titles | Get saved structure titles for zip archive|
|[**getShareCode**](#getsharecode) | **GET** /api/v1/template/{uuid}/share-code | Retrieve share code for template|
|[**getTemplateByShareCode**](#gettemplatebysharecode) | **GET** /api/v1/template/by-share-code/{code} | Retrieve template by share code|
|[**getTemplateByUuid**](#gettemplatebyuuid) | **GET** /api/v1/template/{uuid} | Retrieve template by UUID|
|[**getTemplateVersionsByUuid**](#gettemplateversionsbyuuid) | **GET** /api/v1/template/{uuid}/versions | Retrieve template versions by UUID|
|[**getZipStructure**](#getzipstructure) | **GET** /api/v1/template/{uuid}/zip-structure | Get structure with all files for zip archive|
|[**removeTemplateFavoriteFlag**](#removetemplatefavoriteflag) | **DELETE** /api/v1/template/{uuid}/favorite | Remove favorite flag|
|[**searchTemplates**](#searchtemplates) | **GET** /api/v1/template | Get paged templates list|
|[**setTemplateFavoriteFlag**](#settemplatefavoriteflag) | **PUT** /api/v1/template/{uuid}/favorite | Mark template as favorite|
|[**updateName**](#updatename) | **PATCH** /api/v1/template/{uuid}/name | Update name in template|
|[**updateTemplate**](#updatetemplate) | **PUT** /api/v1/template/{uuid} | Update template. Category in template could be null|
|[**updateTemplateCategories**](#updatetemplatecategories) | **PATCH** /api/v1/template/{uuid}/categories | Update categories in template|
|[**uploadImage**](#uploadimage) | **POST** /api/v1/template/image | Upload new image|
|[**uploadPdf**](#uploadpdf) | **POST** /api/v1/template/pdf | Upload new PDF|
|[**validateTemplate**](#validatetemplate) | **GET** /api/v1/template/validate | Validate template by UUID or version|

# **addZipStructure**
> addZipStructure(newTemplateZipStructureDTO)


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration,
    NewTemplateZipStructureDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let newTemplateZipStructureDTO: NewTemplateZipStructureDTO; //
let templateVersion: string; //UUID of version (optional) (default to undefined)

const { status, data } = await apiInstance.addZipStructure(
    uuid,
    mailbox,
    newTemplateZipStructureDTO,
    templateVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newTemplateZipStructureDTO** | **NewTemplateZipStructureDTO**|  | |
| **uuid** | [**string**] | UUID of template | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **templateVersion** | [**string**] | UUID of version | (optional) defaults to undefined|


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

# **archiveTemplate**
> archiveTemplate()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.archiveTemplate(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Template UUID | defaults to undefined|
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

# **checkTemplateExistsByUuid**
> checkTemplateExistsByUuid()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template to retrieve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.checkTemplateExistsByUuid(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template to retrieve | defaults to undefined|
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

# **clone**
> FullTemplateResponseDTO clone()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID to clone (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.clone(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Template UUID to clone | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FullTemplateResponseDTO**

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

# **createTemplate**
> FullTemplateResponseDTO createTemplate(templateCreateDTO)


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration,
    TemplateCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateCreateDTO: TemplateCreateDTO; //

const { status, data } = await apiInstance.createTemplate(
    mailbox,
    templateCreateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateCreateDTO** | **TemplateCreateDTO**|  | |
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FullTemplateResponseDTO**

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

# **deleteShareCode**
> deleteShareCode()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.deleteShareCode(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
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

# **deleteZipStructure**
> deleteZipStructure()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let title: string; //Title of zip structure (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateVersion: string; //UUID of version (optional) (default to undefined)

const { status, data } = await apiInstance.deleteZipStructure(
    uuid,
    title,
    mailbox,
    templateVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
| **title** | [**string**] | Title of zip structure | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **templateVersion** | [**string**] | UUID of version | (optional) defaults to undefined|


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

# **downloadTemplateImage**
> string downloadTemplateImage()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID (default to undefined)
let imageUuid: string; //Image UUID (default to undefined)

const { status, data } = await apiInstance.downloadTemplateImage(
    uuid,
    imageUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Template UUID | defaults to undefined|
| **imageUuid** | [**string**] | Image UUID | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadTemplatePdf**
> string downloadTemplatePdf()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID (default to undefined)
let pdfUuid: string; //Pdf UUID (default to undefined)
let envelopeUuid: string; //Envelope UUID (optional) (default to undefined)
let clearFields: boolean; //Clear non-readonly fields (optional) (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (optional) (default to undefined)

const { status, data } = await apiInstance.downloadTemplatePdf(
    uuid,
    pdfUuid,
    envelopeUuid,
    clearFields,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Template UUID | defaults to undefined|
| **pdfUuid** | [**string**] | Pdf UUID | defaults to undefined|
| **envelopeUuid** | [**string**] | Envelope UUID | (optional) defaults to undefined|
| **clearFields** | [**boolean**] | Clear non-readonly fields | (optional) defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | (optional) defaults to undefined|


### Return type

**string**

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

# **getPdfPageSizes**
> PdfPageSizes getPdfPageSizes()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID (default to undefined)
let pdfUuid: string; //Pdf UUID (default to undefined)

const { status, data } = await apiInstance.getPdfPageSizes(
    uuid,
    pdfUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Template UUID | defaults to undefined|
| **pdfUuid** | [**string**] | Pdf UUID | defaults to undefined|


### Return type

**PdfPageSizes**

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

# **getRecentlyUsedTemplates**
> Array<RecentlyUsedTemplateResponseDTO> getRecentlyUsedTemplates()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getRecentlyUsedTemplates(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<RecentlyUsedTemplateResponseDTO>**

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

# **getRecommendedTemplates**
> Array<RecommendedTemplateResponseDTO> getRecommendedTemplates()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.getRecommendedTemplates(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**Array<RecommendedTemplateResponseDTO>**

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

# **getSavedZipStructureNames**
> TemplateZipStructureTitlesDTO getSavedZipStructureNames()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateVersion: string; //UUID of version (optional) (default to undefined)

const { status, data } = await apiInstance.getSavedZipStructureNames(
    uuid,
    mailbox,
    templateVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **templateVersion** | [**string**] | UUID of version | (optional) defaults to undefined|


### Return type

**TemplateZipStructureTitlesDTO**

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

# **getShareCode**
> SharedCodeDTO getShareCode()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let generate: boolean; //Code has to be re-generated if exists (optional) (default to undefined)

const { status, data } = await apiInstance.getShareCode(
    uuid,
    mailbox,
    generate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **generate** | [**boolean**] | Code has to be re-generated if exists | (optional) defaults to undefined|


### Return type

**SharedCodeDTO**

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

# **getTemplateByShareCode**
> FullTemplateResponseDTO getTemplateByShareCode()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let code: string; //Share code of template (default to undefined)

const { status, data } = await apiInstance.getTemplateByShareCode(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Share code of template | defaults to undefined|


### Return type

**FullTemplateResponseDTO**

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

# **getTemplateByUuid**
> FullTemplateResponseDTO getTemplateByUuid()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template to retrieve (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateVersion: string; //UUID of version (optional) (default to undefined)
let checkEnvelopeCreation: boolean; //Check if envelope can be created using this template (optional) (default to undefined)

const { status, data } = await apiInstance.getTemplateByUuid(
    uuid,
    mailbox,
    templateVersion,
    checkEnvelopeCreation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template to retrieve | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **templateVersion** | [**string**] | UUID of version | (optional) defaults to undefined|
| **checkEnvelopeCreation** | [**boolean**] | Check if envelope can be created using this template | (optional) defaults to undefined|


### Return type

**FullTemplateResponseDTO**

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

# **getTemplateVersionsByUuid**
> PageDTODataMap getTemplateVersionsByUuid()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)
let versionUuid: string; //UUID of version, only this one will be returned (optional) (default to undefined)

const { status, data } = await apiInstance.getTemplateVersionsByUuid(
    uuid,
    mailbox,
    offset,
    limit,
    versionUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|
| **versionUuid** | [**string**] | UUID of version, only this one will be returned | (optional) defaults to undefined|


### Return type

**PageDTODataMap**

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

# **getZipStructure**
> TemplateZipStructureDTO getZipStructure()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateVersion: string; //UUID of version (optional) (default to undefined)
let title: string; //Title of zip structure (to mark files as selected) (optional) (default to undefined)

const { status, data } = await apiInstance.getZipStructure(
    uuid,
    mailbox,
    templateVersion,
    title
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **templateVersion** | [**string**] | UUID of version | (optional) defaults to undefined|
| **title** | [**string**] | Title of zip structure (to mark files as selected) | (optional) defaults to undefined|


### Return type

**TemplateZipStructureDTO**

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

# **removeTemplateFavoriteFlag**
> removeTemplateFavoriteFlag()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.removeTemplateFavoriteFlag(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
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

# **searchTemplates**
> PageDTOSearchTemplateDTO searchTemplates()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let level: 'mailbox' | 'account' | 'public' | 'official' | 'shared' | 'public-hidden'; //Template access level (optional) (default to undefined)
let keyword: string; //Keyword to search template by or template UUID (optional) (default to undefined)
let category: string; //Category id to search template in (optional) (default to undefined)
let extended: boolean; //Add extended info to each template (access, account, categories) (optional) (default to false)
let favorite: boolean; //Filter only favorite or not favorite templates (optional) (default to undefined)
let excludeCategorized: boolean; //Exclude templates if they are located in any other category, except categoryId, within same access level (optional) (default to undefined)
let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.searchTemplates(
    mailbox,
    level,
    keyword,
    category,
    extended,
    favorite,
    excludeCategorized,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **level** | [**&#39;mailbox&#39; | &#39;account&#39; | &#39;public&#39; | &#39;official&#39; | &#39;shared&#39; | &#39;public-hidden&#39;**]**Array<&#39;mailbox&#39; &#124; &#39;account&#39; &#124; &#39;public&#39; &#124; &#39;official&#39; &#124; &#39;shared&#39; &#124; &#39;public-hidden&#39;>** | Template access level | (optional) defaults to undefined|
| **keyword** | [**string**] | Keyword to search template by or template UUID | (optional) defaults to undefined|
| **category** | [**string**] | Category id to search template in | (optional) defaults to undefined|
| **extended** | [**boolean**] | Add extended info to each template (access, account, categories) | (optional) defaults to false|
| **favorite** | [**boolean**] | Filter only favorite or not favorite templates | (optional) defaults to undefined|
| **excludeCategorized** | [**boolean**] | Exclude templates if they are located in any other category, except categoryId, within same access level | (optional) defaults to undefined|
| **offset** | [**number**] | Offset records | (optional) defaults to 0|
| **limit** | [**number**] | Limit records, max is 1000 | (optional) defaults to 25|


### Return type

**PageDTOSearchTemplateDTO**

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

# **setTemplateFavoriteFlag**
> setTemplateFavoriteFlag()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //UUID of template (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)

const { status, data } = await apiInstance.setTemplateFavoriteFlag(
    uuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of template | defaults to undefined|
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

# **updateName**
> updateName(body)


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let body: string; //

const { status, data } = await apiInstance.updateName(
    uuid,
    mailbox,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **uuid** | [**string**] | Template UUID | defaults to undefined|
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

# **updateTemplate**
> FullTemplateResponseDTO updateTemplate(templateCreateDTO)


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration,
    TemplateCreateDTO
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template uuid (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateCreateDTO: TemplateCreateDTO; //

const { status, data } = await apiInstance.updateTemplate(
    uuid,
    mailbox,
    templateCreateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateCreateDTO** | **TemplateCreateDTO**|  | |
| **uuid** | [**string**] | Template uuid | defaults to undefined|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|


### Return type

**FullTemplateResponseDTO**

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

# **updateTemplateCategories**
> updateTemplateCategories(requestBody)


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let uuid: string; //Template UUID (default to undefined)
let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let requestBody: Array<string>; //

const { status, data } = await apiInstance.updateTemplateCategories(
    uuid,
    mailbox,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |
| **uuid** | [**string**] | Template UUID | defaults to undefined|
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

# **uploadImage**
> UploadedImageDTO uploadImage()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadImage(
    mailbox,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**UploadedImageDTO**

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

# **uploadPdf**
> UploadedPdfDTO uploadPdf()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let file: File; // (default to undefined)
let action: 'PARSE' | 'DELETE' | 'KEEP' | 'PARSE_SAFE' | 'KEEP_SAFE'; //Action for fields inside the PDF file (optional) (default to undefined)
let clearFields: boolean; //Clear non-readonly fields in response PDF (only for PARSE action) (optional) (default to undefined)

const { status, data } = await apiInstance.uploadPdf(
    mailbox,
    file,
    action,
    clearFields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|
| **action** | [**&#39;PARSE&#39; | &#39;DELETE&#39; | &#39;KEEP&#39; | &#39;PARSE_SAFE&#39; | &#39;KEEP_SAFE&#39;**]**Array<&#39;PARSE&#39; &#124; &#39;DELETE&#39; &#124; &#39;KEEP&#39; &#124; &#39;PARSE_SAFE&#39; &#124; &#39;KEEP_SAFE&#39;>** | Action for fields inside the PDF file | (optional) defaults to undefined|
| **clearFields** | [**boolean**] | Clear non-readonly fields in response PDF (only for PARSE action) | (optional) defaults to undefined|


### Return type

**UploadedPdfDTO**

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

# **validateTemplate**
> TemplateValidateResponseDTO validateTemplate()


### Example

```typescript
import {
    TemplateControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new TemplateControllerApi(configuration);

let mailbox: string; //Mailbox context, HTTP Header with current mailbox UUID (default to undefined)
let templateUuid: string; //UUID of template (optional) (default to undefined)
let versionUuid: string; //Version of template (optional) (default to undefined)

const { status, data } = await apiInstance.validateTemplate(
    mailbox,
    templateUuid,
    versionUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] | Mailbox context, HTTP Header with current mailbox UUID | defaults to undefined|
| **templateUuid** | [**string**] | UUID of template | (optional) defaults to undefined|
| **versionUuid** | [**string**] | Version of template | (optional) defaults to undefined|


### Return type

**TemplateValidateResponseDTO**

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

