# REST

The endpoint is `https://api.cakework.com/v1`. To authorize requests, add your API key to the header with `X-Api-Key` as the key. Parameters are passed as JSON in the request body.

## Images

Use these APIs to get images into Cakework. You start VMs with Cakework images.

### importImage
Import a container image from an existing Docker repository.

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

### buildImageFromGithub
Build a container image from your user's Github repository. You supply a Dockerfile (so you can hide this from your user) and optionally a .dockerignore file.

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
**`dockerignore`** (Optional) The .dockerignore file as a string.  
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

## VMs
Use these APIs for one-time use VMs. These have a cold start of several seconds depending on the size of your image.

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
    "port": 8080
}
```

**`imageId`** The id of the image to start the VM with.  
**`cpu`** The number of CPUs for the VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for the VM. Can be a number between 256 and 16384.  
**`port`** The internal port to open.  

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
Stop a running VM. You can also stop a started VM by exiting the process in your code.

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
    "port": 8080
}
```

**`imageId`** The id of the image to cache the VM with.  
**`cpu`** The number of CPUs for the VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for the VM. Can be a number between 256 and 16384.  
**`port`** The internal port to open.  

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