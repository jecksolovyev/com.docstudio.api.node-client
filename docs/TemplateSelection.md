# TemplateSelection

Selected text parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | ID of the document in the template | [default to undefined]
**endOffset** | **number** | Offset from the end of the XPath to the selected text | [optional] [default to undefined]
**endXpath** | **string** | XPath to the end of the selected text | [default to undefined]
**startOffset** | **number** | Offset from the start of the XPath to the selected text | [optional] [default to undefined]
**startXpath** | **string** | XPath to the start of the selected text | [default to undefined]

## Example

```typescript
import { TemplateSelection } from '@docstudio/api-client';

const instance: TemplateSelection = {
    documentId,
    endOffset,
    endXpath,
    startOffset,
    startXpath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
