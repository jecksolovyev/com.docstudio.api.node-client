# SettingsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationName** | **string** | The name of the platform | [optional] [default to undefined]
**billing** | [**BillingProperties**](BillingProperties.md) | Billing properties | [optional] [default to undefined]
**buildVersion** | **string** | The version of the build | [optional] [default to undefined]
**chunkUpload** | [**ChunkUploadProps**](ChunkUploadProps.md) | Chunk Upload properties | [optional] [default to undefined]
**crypto** | [**CryptoProperties**](CryptoProperties.md) | Signature Providers and Region | [optional] [default to undefined]
**defaultEnvelopeListColumns** | [**DefaultEnvelopeListColumns**](DefaultEnvelopeListColumns.md) | Default envelope list columns | [optional] [default to undefined]
**emailProperties** | [**EmailProperties**](EmailProperties.md) | E-mails for support | [optional] [default to undefined]
**envelope** | [**EnvelopeRestrictions**](EnvelopeRestrictions.md) | Envelope Restrictions | [optional] [default to undefined]
**exchange** | [**ExchangeProperties**](ExchangeProperties.md) | Common properties for exchange protocols | [optional] [default to undefined]
**exchangeProtocols** | [**{ [key: string]: ExchangeProtocolProps; }**](ExchangeProtocolProps.md) | Available exchange protocols | [optional] [default to undefined]
**geolocation** | [**GeolocationProperties**](GeolocationProperties.md) | Geolocation properties | [optional] [default to undefined]
**googleMapsApiKey** | **string** | Google maps api key | [optional] [default to undefined]
**hideUnauthorizedFunctions** | **boolean** | Hide or disable unauthorized functions | [optional] [default to undefined]
**infoLinks** | [**Array&lt;ExternalLinkShortResponseDTO&gt;**](ExternalLinkShortResponseDTO.md) | Info menu links | [optional] [default to undefined]
**integrations** | [**ConnectorProperties**](ConnectorProperties.md) | Available integrations | [optional] [default to undefined]
**links** | [**AppLinks**](AppLinks.md) | Application Links | [optional] [default to undefined]
**locales** | [**AppLocales**](AppLocales.md) | Supported locales | [optional] [default to undefined]
**logosProperties** | [**LogosProperties**](LogosProperties.md) | Logos properties | [optional] [default to undefined]
**mailbox** | [**MailboxProperties**](MailboxProperties.md) | Mailbox properties | [optional] [default to undefined]
**oauthUrl** | **string** | OAuth service url | [optional] [default to undefined]
**pageScripts** | [**AppPageScripts**](AppPageScripts.md) | Additional JS scripts | [optional] [default to undefined]
**pdf** | [**PdfPropertiesDTO**](PdfPropertiesDTO.md) | PDF properties | [optional] [default to undefined]
**podName** | **string** | Kubernetes Pod Name | [optional] [default to undefined]
**sso** | [**SsoProperties**](SsoProperties.md) | SSO properties | [optional] [default to undefined]
**supportChatProvider** | **string** | Support live chat provider name | [optional] [default to undefined]
**supportedBarcodes** | [**Array&lt;SupportedBarcodeDTO&gt;**](SupportedBarcodeDTO.md) | Supported barcodes | [optional] [default to undefined]
**template** | [**TemplateRestriction**](TemplateRestriction.md) | Template Restrictions | [optional] [default to undefined]
**testMode** | **boolean** | Is Test Mode enabled? | [optional] [default to undefined]
**theme** | **string** | The name of the UI theme | [optional] [default to undefined]
**user** | [**UserProperties**](UserProperties.md) | User settings | [optional] [default to undefined]

## Example

```typescript
import { SettingsDTO } from '@docstudio/api-client';

const instance: SettingsDTO = {
    applicationName,
    billing,
    buildVersion,
    chunkUpload,
    crypto,
    defaultEnvelopeListColumns,
    emailProperties,
    envelope,
    exchange,
    exchangeProtocols,
    geolocation,
    googleMapsApiKey,
    hideUnauthorizedFunctions,
    infoLinks,
    integrations,
    links,
    locales,
    logosProperties,
    mailbox,
    oauthUrl,
    pageScripts,
    pdf,
    podName,
    sso,
    supportChatProvider,
    supportedBarcodes,
    template,
    testMode,
    theme,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
