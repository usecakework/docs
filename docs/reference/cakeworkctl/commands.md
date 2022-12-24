# Usage
The ```cakework``` command is the primary way of interacting with Cakework.

### ```cakework new```
Initialize a new Cakework app.

```
cakework new <appName> <language>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```appName``` | Yes | Name of the app to create. This is used to reference your app and must be unique. |
| ```language``` | Yes | Language of the app to create. Currently, only ```python``` is supported. |

### ```cakework deploy```
Deploy your Cakework app to our cloud.

```
cakework deploy
```

### ```cakework log task```
Get logs for a specific Task.

```
cakework log <appName> <taskName>  
```

| Argument | Required | Description |
| --- | --- | --- |
| ```appName``` | Yes | Name of the app that the Task is in. |
| ```taskName``` | Yes | Name of the app to get logs for. |
| ```tail``` | No | Tail the log. |

### ```cakework log request```
Get logs for a specific request.

```
cakework log <requestId>
```

| Argument | Required | Description |
| --- | --- | --- |
| ```requestId``` | Yes | Language of the app to create. Currently, only ```python``` is supported. |