# CLI Usage
The ```cakework``` command is the primary way of interacting with Cakework.

### ```cakework signup```
Sign up for Cakework.

```
cakework signup
```
| Argument | Required | Description |
| --- | --- | --- |
| ```--headless``` (string) | No | Specify this when running from a machine where a browser is not accessible (e.g. via ssh) |


### ```cakework login```
Log into Cakework.

```
cakework login
```
| Argument | Required | Description |
| --- | --- | --- |
| ```--headless``` (string) | No | Specify this when running from a machine where a browser is not accessible (e.g. via ssh) |

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
Get logs for a specific Task. Task logs shows information about all of the Runs to the Task.

```
cakework task logs [flags] <project> <task>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```project``` (string) | Yes | Name of the Project the Task is in. |
| ```task``` (string) | Yes | Name of the Task to get logs for. |
| ```--status``` (string) | No | Status to filter your logs by. |

### ```cakework run logs```
Get logs for a specific Run. Run logs show what happen during the specific execution of a Task.

```
cakework run logs <run>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```run``` (string) | Yes | ID of the Run to get logs for. |

### ```cakework run status```
Get the status of a specific Run. The status is described [here](../cakeworksdk/client/python/usage#get_run_status).

```
cakework run status <run>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```run``` (string) | Yes | ID of the Run to get status for. |