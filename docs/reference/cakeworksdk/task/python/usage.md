# Task SDK Usage

Use the ```Cakework``` class to manage your Project and Tasks. It must be run from your ```main.py``` and imported from the cakework module.

```py
from cakework import Cakework
```

## Constructor

### ```Cakework```

```py
Cakework(name)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```name``` | str | Yes | Name of the project to deploy to, generated with [cakework new](../../../cli/usage#cakework-new). If you change this value, it will create a new project.  |


## Methods

### ```add_task```

```py
add_task(task_function)
```

| Parameter | Type | Required | Description |a
| --- | --- | --- | --- |
| ```task_function``` | function | Yes | Function that has your Task logic. Each task is externally callable, and each call to a task runs in its own VM with 1 vCPU and and 256MB of RAM. The name of the function must be unique within the project since you will use the name to call it or trace logs. You can use any JSON serializable parameters in the function you pass in, and can return any JSON serializable Python object. |