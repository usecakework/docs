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
cakework new <name> --lang <lang>
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

### ```cakework request-log```
Get logs for a specific Request. Request logs show what happen during the specific execution of a Task.

```
cakework log <project> <task> <request>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```project``` (string) | Yes | Name of the Project that the Request is in. |
| ```task``` (string) | Yes | Name of the Task that the Request is in. |
| ```request``` (string) | Yes | ID of the Request to get logs for. |
| ```--live``` (boolean) | No | Live update the log. Off by default. |

### ```cakework status```
Get statuses across multiple Requests for a specific Task.

```
cakework status <project> <task> --status <status>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```project``` (string) | Yes | Name of the project that the Task is in. |
| ```task``` (string) | Yes | Name of the project to get statuses for. |
| ```--status``` (enum) | No | Filter requests by status. Options are described [here](../cakeworksdk/client/python/usage#get_status). |

### ```cakework request-status```
Get the status of a specific Request. The status is described [here](../cakeworksdk/client/python/usage#get_status).

```
cakework status <project> <task> <request>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```project``` (string) | Yes | Name of the project that the Task is in. |
| ```task``` (string) | Yes | Name of the project to get logs for. |
| ```request``` (string) | Yes | ID of the request to get logs for. |