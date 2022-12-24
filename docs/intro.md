---
slug: /
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Getting Started

Cakework helps you build, launch, and operate async backends in production with zero infrastructure.
Rather than setting up task queues, workers/lambdas, and databases or hosting Celery, you write your logic and just hit "start". We take care of hosting, scaling, and provide features like status tracking and the ability to query for and rerun failed tasks. You can use Cakework for any longer running task that completes in the background, such as document processing using GPT-3.

:::caution
We are not in production yet, so all the usual "alpha software" warnings apply! Reach out to us on [Discord](https://discord.gg/yB6GvheDcP), [Github](https://github.com/usecakework), or [email](mailto:eric@cakework.com) if you have any issues. We'll help get you production-ready one way or another 😊.
:::

## Install Cakework CLI (macOS/Linux)
Run the install script:

```
curl -L https://raw.githubusercontent.com/usecakework/cakeworkctl/main/install.sh | sh
```

After that, add the ```cakework``` directory to your shell rc file. Check the output of the install script for the exact command.

## Create an account
Create an account with:
```
cakework auth signup
```

If you already have an account, login with:
```
cakework auth login
```

## Create Your App
Create a new app with the Cakework CLI, and install dependencies.

<Tabs groupId="lang">
<TabItem value="python" label="Python">

```
cakework new hello-world python
cd hello-world
pip install -r requirements.txt
```

</TabItem>
</Tabs>


## Run Your App
Start running your app with the Cakework CLI. Cakework runs your app directly in the cloud, so you don't need to set up a local development environment.

<Tabs groupId="lang">
<TabItem value="python" label="Python">

```
cakework deploy
```

You can use the CLI to call your Task and get a result.

```
cakework run
```

</TabItem>
</Tabs>

## Calling Your App
You can call your app programmatically using the Cakework SDK. To install it, run:

<Tabs groupId="lang">
<TabItem value="python" label="Python">

```
pip install cakework
```

</TabItem>
</Tabs>

## Modifying Your App

Talk about the main.py here

```
```

### Installing Dependencies
something or other

TODO turn this into concepts (like celery) and create a quickstart instead? where to talk about asyncronicity etc?
TODO add something about tasks concept somewhere.
TODO see pandas - "getting started / package overview", and "getting started / quickstart"