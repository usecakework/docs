# CLI Usage
The ```cakework``` command is the primary way of interacting with Cakework.

### ```cakework signup```
Sign up for Cakework.

```
cakework signup
```

### ```cakework login```
Log into Cakework.

```
cakework login
```

### ```cakework logout```
Log out from Cakework.

```
cakework logout
```

### ```cakework create-client-token```
Create a client token that your Client SDK uses to authenticate with the project.

```
cakework create-client-token <name>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```name``` (string) | Yes | Name of the token to create. |

### ```cakework new```
Initialize a new Cakework project.

```
cakework new [flags] <name> 
```

| Argument | Required | Description |
| --- | --- | --- |
| ```name``` (string) | Yes | Name of the project to create. This is used to reference your project and must be unique. |
| ```--lang``` (string) | Yes | Language of the project to create. Currently, only ```python``` is supported. |

### ```cakework deploy```
Deploy your Cakework tasks to our cloud. For Python, all of your requirements must go in a requirements.txt for us to correctly package and deploy your tasks.

```
cakework deploy
```

### ```cakework task logs```
Get logs for a specific Task. Task logs shows information about all of the Requests to the Task.

```
cakework task logs [flags] <project> <task>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```project``` (string) | Yes | Name of the Project the Task is in. |
| ```task``` (string) | Yes | Name of the Task to get logs for. |
| ```--status``` (string) | No | Status to filter your logs by. |

### ```cakework request logs```
Get logs for a specific Request. Request logs show what happen during the specific execution of a Task.

```
cakework request logs <request>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```request``` (string) | Yes | ID of the Request to get logs for. |

### ```cakework request status```
Get the status of a specific Request. The status is described [here](../cakeworksdk/client/python/usage#get_status).

```
cakework request status <request>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```request``` (string) | Yes | ID of the request to get status for. |