import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CLI Installation

The Cakework CLI is a command-line interface for using Cakework. You do just about everything in Cakework with the ```cakework``` command, from creating your projects to pulling logs.

## Prerequisites
<Tabs groupId="os">
<TabItem value="osx" label="macOS">

- Python 3.7 or above

</TabItem>
<TabItem value="linux" label="Linux">

- Python 3.7 or above

</TabItem>
</Tabs>

## Installation

<Tabs groupId="os">
<TabItem value="osx" label="macOS">

To install the Cakework CLI, run the install script:

```
curl -L https://raw.githubusercontent.com/usecakework/cakework/main/cli/install.sh | sh
```

After that, add the ```cakework``` directory to your shell rc file. Check the output of the install script for the exact command.
</TabItem>
<TabItem value="linux" label="Linux">


To install the Cakework CLI, run the install script:

```
curl -L https://raw.githubusercontent.com/usecakework/cakework/main/cli/install.sh | sh
```

After that, add the ```cakework``` directory to your shell rc file. Check the output of the install script for the exact command.

</TabItem>
</Tabs>

## Upgrade

To upgrade, run the install command again.