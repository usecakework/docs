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
Create a client token that your Client SDK uses to authenticate with the app.

```
cakework create-client-token <name>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```name``` (string) | Yes | Name of the token to create. |

### ```cakework new```
Initialize a new Cakework app.

```
cakework new <name> --lang <lang>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```name``` (string) | Yes | Name of the app to create. This is used to reference your app and must be unique. |
| ```--lang``` (string) | Yes | Language of the app to create. Currently, only ```python``` is supported. |

### ```cakework deploy```
Deploy your Cakework app to our cloud. For Python, all of your requirements must go in a requirements.txt for us to correctly package and deploy your app.

```
cakework deploy
```

### ```cakework log``` (Task)
Get logs for a specific Task. Task logs shows information about all of the Requests to the Task.

```
cakework log <app> <task>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```app``` (string) | Yes | Name of the App that the Task is in. |
| ```task``` (string) | Yes | Name of the Task to get logs for. |
| ```--live``` (boolean) | No | Live update the log. Off by default. |

### ```cakework log``` (Request)
Get logs for a specific Request. Request logs show what happen during the specific execution of a Task.

```
cakework log <app> <task> <request>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```app``` (string) | Yes | Name of the App that the Request is in. |
| ```task``` (string) | Yes | Name of the Task that the Request is in. |
| ```request``` (string) | Yes | ID of the Request to get logs for. |
| ```--live``` (boolean) | No | Live update the log. Off by default. |

### ```cakework status``` (Task)
Get statuses across multiple Requests for a specific Task.

```
cakework status <app> <task> --status <status>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```app``` (string) | Yes | Name of the app that the Task is in. |
| ```task``` (string) | Yes | Name of the app to get statuses for. |
| ```--status``` (enum) | No | Filter requests by status. Options are described [here](../cakeworksdk/client/python/usage#get_status). |

### ```cakework status``` (Request)
Get the status of a specific Request. The status is described [here](../cakeworksdk/client/python/usage#get_status).

```
cakework status <app> <task> <request>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```app``` (string) | Yes | Name of the app that the Task is in. |
| ```task``` (string) | Yes | Name of the app to get logs for. |
| ```request``` (string) | Yes | ID of the request to get logs for. |