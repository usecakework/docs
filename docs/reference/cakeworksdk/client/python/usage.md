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

### ```your_task_name```
You can call your Task with same function signature that you [added to your App](../../app/python/usage.md#add_task).

```py
your_task_name(your_args)
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ```your_args``` | 🤔 | Yes | The arguments described by your Task. |

#### Returns
Whatever your Task function returns!