# TemplateRestriction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultPageSize** | **string** |  | [optional] [default to undefined]
**expireAfterDays** | **number** |  | [optional] [default to undefined]
**image** | [**ImageRestriction**](ImageRestriction.md) |  | [optional] [default to undefined]
**logo** | [**LogoImageRestriction**](LogoImageRestriction.md) |  | [optional] [default to undefined]
**maxExternalDocsCount** | **number** |  | [optional] [default to undefined]
**notifyInDays** | **number** |  | [optional] [default to undefined]
**patterns** | [**Array&lt;TextFieldPattern&gt;**](TextFieldPattern.md) |  | [optional] [default to undefined]
**supportedPageSizes** | [**Array&lt;DocumentPageSizeDTO&gt;**](DocumentPageSizeDTO.md) |  | [optional] [default to undefined]
**table** | [**TemplTableRestriction**](TemplTableRestriction.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TemplateRestriction } from '@docstudio/api-client';

const instance: TemplateRestriction = {
    defaultPageSize,
    expireAfterDays,
    image,
    logo,
    maxExternalDocsCount,
    notifyInDays,
    patterns,
    supportedPageSizes,
    table,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
