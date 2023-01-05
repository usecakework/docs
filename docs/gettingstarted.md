import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Getting Started

:::caution
We are not in production yet, so all the usual "alpha software" warnings apply. Reach out to us on [Discord](https://discord.gg/yB6GvheDcP), [Github](https://github.com/usecakework), or [email](mailto:eric@cakework.com) if you have any issues. We'll help get you production-ready one way or another 😊.
:::

## Install Cakework
Run the install script (macOS/Linux):

```
curl -L https://cakeworkctl-downloads.s3.us-west-2.amazonaws.com/install.sh | sh
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
## Build Your App

### Create a New App
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

### Write a Task

### Install Dependencies

### Get Logs

## Deploy Your App

## Use Your App

### Call A Task

### Get Request Status

