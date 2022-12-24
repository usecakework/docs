# Client

Use the ```Client``` class for for calling and getting information about your Tasks. You can import the client from the cakework module.

```py
from cakework import Client
```

## Constructor

### ```Client```

```py
Client(name=str)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```name``` | str | Yes | Name of the app to call, created in the [App SDK](../../app/python/usage.md#app). |

## Methods

### Call Your Task
You can call your Task with same function signature that you [added to your App](../../app/python/usage.md#add_task).

```py
your_task_name(your_args)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```your_args``` | 🤔 | Yes | The arguments described by your Task. |

#### Returns
A request id (str) that you can use to query for the status of the Task and to get the result.

### ```get_status```
```py
get_status(request_id)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```request_id``` | str | Yes | The request_id to get status for. Provided when you [call your Task](#your_task_name) |


**Returns**  
A status describing the processing status of a request. ```None``` if the request is not found. Statuses can be one of the following:

| Status | Description |
| --- | --- |
| ```IN_PROGRESS``` | The request is still processing. |
| ```SUCCESS``` | The request has succeeded processing and the result is available. |
| ```FAILED``` | The request has failed processing. |

### ```get_result```
```py
get_result(request_id)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```request_id``` | str | Yes | The request_id to get result for. Provided when you [call your Task](#your_task_name). |

**Returns**  
The result of a request, as returned by your [Task](../../app/python/usage.md#add_task). ```None``` if the request is not found or still processing.
