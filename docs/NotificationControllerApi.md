# NotificationControllerApi

All URIs are relative to *https://api.docstudio.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountPreferences**](#getaccountpreferences) | **GET** /api/v1/notification/account-preferences | Get account related notification preferences|
|[**getCorporateUserAccountPreferences**](#getcorporateuseraccountpreferences) | **GET** /api/v1/notification/user/{userUuid}/account/{accountUuid}/account-preferences | Get corporate user account related notification preferences|
|[**getMailboxPreferences**](#getmailboxpreferences) | **GET** /api/v1/notification/mailbox-preferences | Get mailbox related notification preferences|
|[**getMailboxPreferencesForUser**](#getmailboxpreferencesforuser) | **GET** /api/v1/notification/user/{userUuid}/account/{accountUuid}/mailbox-preferences | Get corporate user mailbox related notification preferences|
|[**getUnreadNotifications**](#getunreadnotifications) | **GET** /api/v1/notification | Get unread notifications|
|[**markAllNotificationRead**](#markallnotificationread) | **POST** /api/v1/notification/read-all | Mark notifications as read|
|[**markNotificationRead**](#marknotificationread) | **POST** /api/v1/notification/read | Mark notifications as read|
|[**saveAccountPreferences**](#saveaccountpreferences) | **POST** /api/v1/notification/account-preferences | Update account related notification preferences|
|[**saveMailboxPreferences**](#savemailboxpreferences) | **POST** /api/v1/notification/mailbox-preferences | Update mailbox related notification preferences|
|[**setCorporateUserAccountPreferences**](#setcorporateuseraccountpreferences) | **POST** /api/v1/notification/user/{userUuid}/account/{accountUuid}/account-preferences | Update corporate user account related notification preferences|
|[**setMailboxPreferences**](#setmailboxpreferences) | **POST** /api/v1/notification/user/{userUuid}/account/{accountUuid}/mailbox-preferences | Update corporate user mailbox related notification preferences|

# **getAccountPreferences**
> { [key: string]: Array<number>; } getAccountPreferences()


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

const { status, data } = await apiInstance.getAccountPreferences();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: Array<number>; }**

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

# **getCorporateUserAccountPreferences**
> { [key: string]: Array<number>; } getCorporateUserAccountPreferences()


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let userUuid: string; //User uuid (default to undefined)
let accountUuid: string; //Account uuid (default to undefined)

const { status, data } = await apiInstance.getCorporateUserAccountPreferences(
    userUuid,
    accountUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | User uuid | defaults to undefined|
| **accountUuid** | [**string**] | Account uuid | defaults to undefined|


### Return type

**{ [key: string]: Array<number>; }**

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

# **getMailboxPreferences**
> MailboxNotificationPreferences getMailboxPreferences()


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let mailbox: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMailboxPreferences(
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailbox** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MailboxNotificationPreferences**

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

# **getMailboxPreferencesForUser**
> MailboxNotificationPreferences getMailboxPreferencesForUser()


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let userUuid: string; //User uuid (default to undefined)
let accountUuid: string; //Account uuid (default to undefined)
let mailbox: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMailboxPreferencesForUser(
    userUuid,
    accountUuid,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUuid** | [**string**] | User uuid | defaults to undefined|
| **accountUuid** | [**string**] | Account uuid | defaults to undefined|
| **mailbox** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MailboxNotificationPreferences**

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

# **getUnreadNotifications**
> PageDTOUserNotificationResponseDTO getUnreadNotifications()


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let offset: number; //Offset records (optional) (default to 0)
let limit: number; //Limit records, max is 1000 (optional) (default to 25)

const { status, data } = await apiInstance.getUnreadNotifications(
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

**PageDTOUserNotificationResponseDTO**

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

# **markAllNotificationRead**
> markAllNotificationRead()


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

const { status, data } = await apiInstance.markAllNotificationRead();
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

# **markNotificationRead**
> markNotificationRead(singleUuidDTO)


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let singleUuidDTO: Array<SingleUuidDTO>; //

const { status, data } = await apiInstance.markNotificationRead(
    singleUuidDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **singleUuidDTO** | **Array<SingleUuidDTO>**|  | |


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

# **saveAccountPreferences**
> saveAccountPreferences(requestBody)


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let requestBody: { [key: string]: Array<number>; }; //

const { status, data } = await apiInstance.saveAccountPreferences(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: Array<number>; }**|  | |


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

# **saveMailboxPreferences**
> saveMailboxPreferences(mailboxNotificationPreferences)


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration,
    MailboxNotificationPreferences
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let mailboxNotificationPreferences: MailboxNotificationPreferences; //
let mailbox: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.saveMailboxPreferences(
    mailboxNotificationPreferences,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxNotificationPreferences** | **MailboxNotificationPreferences**|  | |
| **mailbox** | [**string**] |  | (optional) defaults to undefined|


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

# **setCorporateUserAccountPreferences**
> setCorporateUserAccountPreferences(requestBody)


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let userUuid: string; //User uuid (default to undefined)
let accountUuid: string; //Account uuid (default to undefined)
let requestBody: { [key: string]: Array<number>; }; //

const { status, data } = await apiInstance.setCorporateUserAccountPreferences(
    userUuid,
    accountUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: Array<number>; }**|  | |
| **userUuid** | [**string**] | User uuid | defaults to undefined|
| **accountUuid** | [**string**] | Account uuid | defaults to undefined|


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

# **setMailboxPreferences**
> setMailboxPreferences(mailboxNotificationPreferences)


### Example

```typescript
import {
    NotificationControllerApi,
    Configuration,
    MailboxNotificationPreferences
} from '@docstudio/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationControllerApi(configuration);

let userUuid: string; //User uuid (default to undefined)
let accountUuid: string; //Account uuid (default to undefined)
let mailboxNotificationPreferences: MailboxNotificationPreferences; //
let mailbox: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.setMailboxPreferences(
    userUuid,
    accountUuid,
    mailboxNotificationPreferences,
    mailbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailboxNotificationPreferences** | **MailboxNotificationPreferences**|  | |
| **userUuid** | [**string**] | User uuid | defaults to undefined|
| **accountUuid** | [**string**] | Account uuid | defaults to undefined|
| **mailbox** | [**string**] |  | (optional) defaults to undefined|


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

