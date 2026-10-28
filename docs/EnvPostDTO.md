# EnvPostDTO

Envelope to send

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **string** | Envelope XML | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Envelope metadata | [optional] [default to undefined]
**uuid** | **string** | UUID of envelope | [optional] [default to undefined]

## Example

```typescript
import { EnvPostDTO } from '@docstudio/api-client';

const instance: EnvPostDTO = {
    data,
    metadata,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
