# SessionPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedIps** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**blockedIps** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**maxAttemptsTimeoutMinutes** | **number** |  | [optional] [default to undefined]
**maxLoginAttempts** | **number** |  | [optional] [default to undefined]
**sessionHours** | **number** |  | [optional] [default to undefined]
**singleIpSession** | **boolean** |  | [optional] [default to undefined]
**singleSession** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SessionPolicy } from '@docstudio/api-client';

const instance: SessionPolicy = {
    allowedIps,
    blockedIps,
    maxAttemptsTimeoutMinutes,
    maxLoginAttempts,
    sessionHours,
    singleIpSession,
    singleSession,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
