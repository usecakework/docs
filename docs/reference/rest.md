# REST

The endpoint is `https://api.cakework.com/v1`. To authorize requests, add your API key to the header with `X-Api-Key` as the key. Parameters are passed as JSON in the request body.

## Images

Use these APIs to get images into Cakework. You start VMs with Cakework images.

### importImage
Import a Cakework image from an existing AWS ECR Docker repository.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/import
```

#### Request
```json
{
    "imageUri": "string",
    "password": "string"
}
```
**`imageUri`** URI of the container image to import.  
**`password`** Password to the respository.

#### Response
```json
{
    "imageId": "string"
}
```
**`imageId`** The id used to reference this image.

### buildImageFromFiles
Build a Cakework image from a list of files. This API takes all of your file contents as strings. 

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/files
```

#### Request
```json
{
    "dockerfile": "string",
    "files": [
        {
            "dir": "string",
            "name": "string",
            "content": "string"
        }
    ],
}
```

**`dockerfile`** A Dockerfile describing the image you want to build as a string.  
** `files` ** A list of objects that describe all of the code files.    
&nbsp;&nbsp;&nbsp;&nbsp;`dir` The directory to put the file in. Use `.` for root.  
&nbsp;&nbsp;&nbsp;&nbsp;`name` The name of the file to write, e.g. handlers.json".  
&nbsp;&nbsp;&nbsp;&nbsp;`content` The content of the file as a string.  

#### Response
```json
{
    "imageId": "string"
}
```
**`imageId`** The id used to reference this image.

### buildImageFromGithub
Build a Cakework image from your user's Github repository. You supply a Dockerfile (so you can hide this from your user) and optionally a .dockerignore file.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/github
```

#### Request
```json
{
    "dockerfile": "string",
    "dockerignore": "string",
    "token": "string",
    "repository": "string",
    "branch": "string"
}
```

**`dockerfile`** A Dockerfile describing the container you want to deploy as a string.  
**`dockerignore`** (optional) The .dockerignore file as a string.  
**`token`** User token that your Github App fetches to access the user's Github repository.  
**`repository`** Github repository of your user's code, in the format ${my-org}/${my-repo}.  
**`branch`** Branch of user's Github repository, e.g. `main`. 

#### Response
```json
{
    "imageId": "string"
}
```
**`imageId`** The id used to reference this image.

### getBuildLogs
Get logs for an image build.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/[imageId]/logs
```

#### Response
```json
{
    "lines": [
        {
            "timestamp": 1676625938460,
            "level": "string",
            "message": "string"
        },
    ]
}
```
**`lines`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`timestamp` The unix timestamp in ms.  
&nbsp;&nbsp;&nbsp;&nbsp;`level` The log level (e.g. info/error).  
&nbsp;&nbsp;&nbsp;&nbsp;`message` The message.

## VMs
Use these APIs for one-time use VMs. These have a cold start of several seconds depending on the size of your image. Each VM runs in its own VPC.

### startVM
Start a virtual machine using an image.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/start
```

#### Request
```json
{
    "imageId": "string",
    "cpu": 1,
    "memory": 256,
    "port": 8080,
    "envVars": { "string": "string", "string": "string" },
    "diskSize": 3
}
```

**`imageId`** The id of the image to start the VM with.  
**`cpu`** The number of CPUs for the VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for the VM. Can be a number between 256 and 16384.  
**`port`** (optional) The internal port to open.  
**`envVars`** (optional) The environment variables as a map of string to string.  
**`diskSize`** (optional) The amount of persistent storage to attach to each VM, in GB. Can be a number between 1 and 500.

#### Response
```json
{
    "id": "string",
    "endpoint": "string"
}
```
**`id`** The id used to reference this VM.  
**`endpoint`** The endpoint used to access this VM.

### stopVM
Stop a running VM. This destroys the VM, as the start/stopVM commands are for one-time use VMs.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/[id]/stop
```

### getVMLogs
Get all of the logs for a VM. This currently just gets all logs and has no pagination or filtering.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vm/[id]/logs
```

#### Response
```json
{
    "lines": [
        {
            "timestamp": 1676625938460,
            "level": "string",
            "message": "string"
        },
    ]
}
```
**`lines`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`timestamp` The unix timestamp in ms.  
&nbsp;&nbsp;&nbsp;&nbsp;`level` The log level (e.g. info/error).  
&nbsp;&nbsp;&nbsp;&nbsp;`message` The message.

## Cached VMs
Use these APIs for re-usable VMs. This helps you get much faster cold starts.

### cacheVM
Cache a VM using an image. You still need to call ```startCachedVM``` to start a cached VM.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cache
```

#### Request
```json
{
    "imageId": "string",
    "cpu": 1,
    "memory": 256,
    "port": 8080,
    "envVars": { "string": "string", "string": "string" },
    "diskSize": 3
}
```

**`imageId`** The id of the image to cache the VM with.  
**`cpu`** The number of CPUs for the VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for the VM. Can be a number between 256 and 16384.  
**`port`** (optional) The internal port to open.  
**`envVars`** (optional) The evironment variables as a map of string to string.  
**`diskSize`** (optional) The amount of persistent storage to attach to each VM, in GB. Can be a number between 1 and 500.

#### Response
```json
{
    "id": "string",
    "endpoint": "string"
}
```
**`id`** The id used to reference this cached VM.  
**`endpoint`** The endpoint used to access this cached VM.

### startCachedVM
Start a cached VM.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cached/[id]/start
```

### stopCachedVM
Stop a cached VM. You can stop the cached VM by exiting the process as well.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cached/[id]/stop
```

### destroyCachedVM
Destroy a cached VM.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cached/[id]/destroy
```

### getCachedVMLogs
Get all of the logs for a cached VM. This currently just gets logs for all time and has no pagination or filtering.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vm/cached/[id]/logs
```

#### Response
```json
{
    "lines": [
        {
            "timestamp": 1676625938460,
            "level": "string",
            "message": "string"
        },
    ]
}
```
**`lines`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`timestamp` The unix timestamp in ms.  
&nbsp;&nbsp;&nbsp;&nbsp;`level` The log level (e.g. info/error).  
&nbsp;&nbsp;&nbsp;&nbsp;`message` The message.

## Snippets
Use these APIs to run a snippet of code. We infer dependencies from the code each time you run the snippet.

### runSnippet
on the way!