# LabelDTO

Label to save

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colorBg** | **string** | Label background color, hex, 6 symbols | [default to undefined]
**colorText** | **string** | Label text color, hex, 6 symbols | [default to undefined]
**name** | **string** | Label name | [optional] [default to undefined]
**uuid** | **string** | UUID of Label. Only for entity read from server. | [optional] [default to undefined]

## Example

```typescript
import { LabelDTO } from '@docstudio/api-client';

const instance: LabelDTO = {
    colorBg,
    colorText,
    name,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
