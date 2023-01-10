import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Getting Started

:::caution
We are not in production yet, so all the usual "alpha software" warnings apply. Reach out to us on [Discord](https://discord.gg/yB6GvheDcP), [Github](https://github.com/usecakework), or [email](mailto:eric@cakework.com) for help!
:::

## Install Cakework
Run the install script (macOS/Linux):

```
curl -L https://cakeworkctl-downloads.s3.us-west-2.amazonaws.com/install.sh | sh
```

After that, add the ```cakework``` directory to your shell rc file. Check the output of the install script for the exact command.

## Create an account

```
cakework signup
```

## Build Your Tasks

### Create a New Project
Create a new project with the Cakework CLI. We create a Python virtual environment to make sure only the required dependencies are deployed to Cakework.

```
cakework new yummy-new-project --lang python
cd yummy-new-project
```

### Write Your Task
You can write tasks as Python functions and add the task to your project. Using the client, you'll start tasks with this function signature and get the return value as a result. The arguments and return value need to be JSON-serializable.

Make sure your virtual environment is activated before you write your code.
```
source env/bin/activate
```

Here is sample code from your autogenerated ```src/main.py```. 

```python
# Write your task as a Python function.
from cakework import Cakework

def say_hello(name):
    return "hello " + name

if __name__ == "__main__":
    # Instantiate your project with a name.
    cakework = Cakework("hello_world")
    # Add your task to your project
    cakework.add_task(say_hello)
```

## Deploy Your Task
Deploy your task to Cakework, where your tasks will run serverlessly.
```
cakework deploy
```

## Run a Task
Once your task is deployed, you can run start running it using the Cakework client.

### Generate Client Token
You need to generate a token to authenticate your client with your project. Keep your token safe.

```
cakework create-client-token my-client
```

### Use the Client
You run your task by instantiating a client and using the same function signature that you wrote your task in. Starting a task returns a request id that you can use to get the status or result of your task. The result of the task is the what your task function returned.

Here is sample code that shows how to instantiate a client and run a task.

<Tabs groupId="lang">
<TabItem value="python" label="Python">

```python
from cakework import Client
import time

if __name__ == "__main__":

    # Instantiate a client with the project you created, and pass in your client token.
    client = Client("yummy-new-project", "CLIENT_TOKEN")

    # Start your task. You use the same function signature that you wrote in your task.
    request_id = client.say_hello("Jessie")

    # Poll the task until completion.
    status = client.get_status(request_id)
    while (status == "PENDING" or status == "IN_PROGRESS"):
        time.sleep(1)
        print(status)
        status = client.get_status(request_id)

    # Get the result once the task is complete!
    if (client.get_status(request_id) == "SUCCEEDED"):
        result = client.get_result(request_id)
        print(result)
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```
Coming soon!
```

</TabItem>
<TabItem value="rest" label="REST">

```
Coming soon!
```

</TabItem>
</Tabs>

## More!

### Installing Dependencies
You can install dependencies with pip3, just include it in your ```requirements.txt``` with ```pip3 freeze > requirements.txt```. Make sure you are in your virtual environment to prevent your global dependencies from deployed to Cakework.

```
source env/bin/activate
```

### Error Handling
Any exceptions or errors in your task function will send your task to a ```FAILED``` status.

### Debugging

Coming soon!

### Local Development

Coming soon!