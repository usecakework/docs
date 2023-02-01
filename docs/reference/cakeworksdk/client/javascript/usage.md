# Client SDK Usage

Use the ```CakeworkClient``` class for for calling and getting information about your Tasks. You can import the client from the ```@cakework/client``` module.

```js
import CakeworkClient from "@cakework/client"
```

## Constructor

### ```CakeworkClient```

```py
CakeworkClient(project, token)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```project``` | str | Yes | Name of the project to call, created in the [Task SDK](../../task/python/usage#cakework). |
| ```token``` | str | Yes | Your client token used to authenticate, created with the [CLI](../../../cli/usage#cakework-create-client-token). |

## Methods

### ```run```
```js
run(task, parameters, compute)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```task``` | str | Yes | The name of the [Task](../../task/python/usage#add_task) to run. |
| ```parameters``` | str | Yes | An object of parameters that you can access in your [Task]. Must be JSON serializable. |
| ```compute``` | str | No | CPU and memory parameters to run the request with. Looks like `{cpu: 2, memory: 1024}`. CPU can be a number between 1 and 8, and memory (MB) can be between 256 and 16384. |

**Returns**  
A run id (str) that you can use to query for the status of the Task and to get the result.

### ```get_run_status```
```js
getRunStatus(runId)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```runId``` | str | Yes | The run_id to get status for. |

**Returns**  
A status describing the processing status of a run. ```None``` if the run is not found. Statuses can be one of the following:

| Status | Description |
| --- | --- |
| ```PENDING``` | The run has been received. |
| ```IN_PROGRESS``` | The run is currently being processed. |
| ```SUCCEEDED``` | The run has succeeded processing and the result is available. |
| ```FAILED``` | The run has failed processing. |

### ```get_run_result```
```js
getRunResult(runId)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```runId``` | str | Yes | The run_id to get result for. |

**Returns**  
The result of a run, as returned by your [Task](../../task/python/usage#add_task). ```None``` if the run is not found or still processing.
