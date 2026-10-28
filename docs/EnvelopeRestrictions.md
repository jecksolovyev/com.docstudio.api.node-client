# EnvelopeRestrictions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment** | [**AttachmentRestriction**](AttachmentRestriction.md) |  | [optional] [default to undefined]
**deleteFromBinAfterDays** | **number** |  | [optional] [default to undefined]
**einkFooter** | **string** |  | [optional] [default to undefined]
**field** | [**FieldRestriction**](FieldRestriction.md) |  | [optional] [default to undefined]
**hideUserIdentifier** | **boolean** |  | [optional] [default to undefined]
**listColumns** | [**Array&lt;EnvelopeListColumn&gt;**](EnvelopeListColumn.md) |  | [optional] [default to undefined]
**listExtraColumn** | [**EnvelopeListColumnExtra**](EnvelopeListColumnExtra.md) |  | [optional] [default to undefined]
**search** | [**SearchRestriction**](SearchRestriction.md) |  | [optional] [default to undefined]
**searchField** | [**SearchFieldRestriction**](SearchFieldRestriction.md) |  | [optional] [default to undefined]
**share** | [**ShareRestriction**](ShareRestriction.md) |  | [optional] [default to undefined]
**spelledCurrency** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**table** | [**EnvTableRestriction**](EnvTableRestriction.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnvelopeRestrictions } from '@docstudio/api-client';

const instance: EnvelopeRestrictions = {
    attachment,
    deleteFromBinAfterDays,
    einkFooter,
    field,
    hideUserIdentifier,
    listColumns,
    listExtraColumn,
    search,
    searchField,
    share,
    spelledCurrency,
    table,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
