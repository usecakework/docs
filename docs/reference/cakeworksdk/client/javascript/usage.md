# Client SDK Usage

Use the ```Client``` class for for calling and getting information about your Tasks. You can import the client from the cakework module.

```js
import Client from cakework
```

## Constructor

### ```Client```

```js
Client(name)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```name``` | str | Yes | Name of the app to call, created in the [App SDK](../../app/python/usage#app). |

## Methods

### Call Your Task
You can call your Task with same function signature of the task you [added to your App](../../app/python/usage#add_task).

For example, if you added ```hello_friend(firstname, lastname)```, you would call it with ```client.hello_friend(firstname, lastname)```.

**Returns**  
A request id (str) that you can use to query for the status of the Task and to get the result.

### ```get_status```
```js
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
```js
get_result(request_id)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```request_id``` | str | Yes | The request_id to get result for. Provided when you [call your Task](#call-your-task). |

**Returns**  
The result of a request, as returned by your [Task](../../app/python/usage#add_task). ```None``` if the request is not found or still processing.
