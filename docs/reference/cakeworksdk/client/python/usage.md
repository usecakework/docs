# Client SDK Usage

Use the ```Client``` class for for calling and getting information about your Tasks. You can import the client from the cakework module.

```py
from cakework import Client
```

## Constructor

### ```Client```

```py
Client(name, client_token)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```name``` | str | Yes | Name of the project to call, created in the [Task SDK](../../task/python/usage#cakework). |
| ```client_token``` | str | Yes | Your client token used to authenticate, created with the [CLI](../../../cli/usage#cakework-create-client-token). |

## Methods

### Call Your Task
You can call your Task with same function signature of the task you [added to your Project](../../task/python/usage#add_task). For example, if you added

```hello_friend(firstname, lastname)```

you would call it with

```request_id = client.hello_friend(firstname, lastname)```.

You can also call your task with different CPU and memory parameters, per request. Like so:

```request_id = client.say_hello("Jessie", compute={'cpu': 2, 'memory': 1024})```

CPU can be a number between 1 and 8, and memory (MB) can be between 256 and 16384.


**Returns**  
A request id (str) that you can use to query for the status of the Task and to get the result.

### ```get_status```
```py
get_status(request_id)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```request_id``` | str | Yes | The request_id to get status for. Provided when you [call your Task](#call-your-task). |


**Returns**  
A status describing the processing status of a request. ```None``` if the request is not found. Statuses can be one of the following:

| Status | Description |
| --- | --- |
| ```PENDING``` | The request has been received. |
| ```IN_PROGRESS``` | The request is currently being processed. |
| ```SUCCEEDED``` | The request has succeeded processing and the result is available. |
| ```FAILED``` | The request has failed processing. |

### ```get_result```
```py
get_result(request_id)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```request_id``` | str | Yes | The request_id to get result for. Provided when you [call your Task](#call-your-task). |

**Returns**  
The result of a request, as returned by your [Task](../../task/python/usage#add_task). ```None``` if the request is not found or still processing.
