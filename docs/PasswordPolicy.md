# PasswordPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowWhitespace** | **boolean** |  | [optional] [default to undefined]
**digit** | **number** |  | [optional] [default to undefined]
**expirationDays** | **number** |  | [optional] [default to undefined]
**lowercase** | **number** |  | [optional] [default to undefined]
**maxLength** | **number** |  | [optional] [default to undefined]
**minLength** | **number** |  | [optional] [default to undefined]
**notifyBeforeDays** | **number** |  | [optional] [default to undefined]
**preventCommonPasswords** | **boolean** |  | [optional] [default to undefined]
**preventCommonWords** | **boolean** |  | [optional] [default to undefined]
**preventReuseCount** | **number** |  | [optional] [default to undefined]
**preventReuseMonths** | **number** |  | [optional] [default to undefined]
**repeatCharacter** | **number** |  | [optional] [default to undefined]
**specialSymbol** | **number** |  | [optional] [default to undefined]
**uppercase** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PasswordPolicy } from '@docstudio/api-client';

const instance: PasswordPolicy = {
    allowWhitespace,
    digit,
    expirationDays,
    lowercase,
    maxLength,
    minLength,
    notifyBeforeDays,
    preventCommonPasswords,
    preventCommonWords,
    preventReuseCount,
    preventReuseMonths,
    repeatCharacter,
    specialSymbol,
    uppercase,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
