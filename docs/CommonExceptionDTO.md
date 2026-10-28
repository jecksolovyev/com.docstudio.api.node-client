# CommonExceptionDTO

The DTO for exception details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | The code of the error | [default to undefined]
**data** | **any** |  | [optional] [default to undefined]
**message** | **string** | The message of the error | [default to undefined]
**messageArgs** | **Array&lt;any&gt;** |  | [optional] [default to undefined]
**messageLocalized** | **string** | Localized message of the error | [optional] [default to undefined]

## Example

```typescript
import { CommonExceptionDTO } from '@docstudio/api-client';

const instance: CommonExceptionDTO = {
    code,
    data,
    message,
    messageArgs,
    messageLocalized,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
