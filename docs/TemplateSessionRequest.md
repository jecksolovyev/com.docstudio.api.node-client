# TemplateSessionRequest

Initialize template AI assistant session request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selection** | [**TemplateSelection**](TemplateSelection.md) | Selected text in the template | [optional] [default to undefined]
**templateXml** | **string** | Current version of the template XML | [default to undefined]

## Example

```typescript
import { TemplateSessionRequest } from '@docstudio/api-client';

const instance: TemplateSessionRequest = {
    selection,
    templateXml,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
