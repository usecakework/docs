# REST

The endpoint is `https://api.cakework.com/v1`. To authorize requests, add your API key to the header with `X-Api-Key` as the key. Parameters are passed as JSON in the request body.

## Images

Use these APIs to get images into Cakework. You start VMs and deploy services with imported images.

### importImage
Import a container image from an existing Docker repository.

#### Endpoint
```txt title="GET"
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
Build a container image from your user's Github repository. You supply the Dockerfile and optionally a .dockerignore file.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/github
```
Select `form-data` as the body type.

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

**`dockerfile`** Path to Dockerfile.

**`dockerignore`** (Optional) Path to dockerignore file.  
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
Use these APIs to use individual VMs.

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

**`imageId`** The id of the image to deploy.  
**`cpu`** The number of CPUs for each VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for each VM. Can be a number between 256 and 16384.  
**`port`** The internal port to open.  

#### Response
```json
{
    "id": "string"
}
```
**`id`** The id used to reference this vm.


### stopVM
on the way!

### getLogs
Get all of the logs for a VM. This currently just gets all logs and has no pagination or filtering.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vm/[vmId]/logs
```

#### Request
No request parameters.

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

## Services
Use these APIs to deploy services to groups of VMs load balanced behind an endpoint. Each service runs in its own VPC and is networked to the outside with SSL. 

### createService
Create a new Service.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/service/create
```

#### Request
No request parameters.

#### Response
```json
{
    "id": "string",
    "endpoint": "string",
}
```
**`id`** The id used to reference this service.  
**`endpoint`** The endpoint used to access this service.

### deployService
Deploy an image to a Service. We will keep minVMs running and autoscale up to maxVMs. If you set minVMs to 0, we will turn all of the VMs off 10s after we received the last request. The cold start coming back should be in seconds. Deployments are blue/green.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/service/[serviceId]/deploy
```

#### Request
```json
{
    "imageId": "string",
    "cpu": 1,
    "memory": 256,
    "port": 8080,
    "minVms": 0,
    "maxVms": 1,
}
```

**`imageId`** The id of the image to deploy.  
**`cpu`** The number of CPUs for each VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for each VM. Can be a number between 256 and 16384.  
**`port`** The internal port to open.  
**`minVms`** The minimum number of VMs to keep running. If 0, we'll scale down to zero 10s after we received the last request. Can currently only be 0 or 1.  
**`maxVms`** The maximum number of VMs to run. Must be >= `minVms`. Can currently only be one.

#### Response
No response.

### getLogs
Get all of the logs for a service. This currently just gets all logs and has no pagination or filtering.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/service/[serviceId]/logs
```

#### Request
No request parameters.

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

### createCert
on the way!

### getCerts
on the way!

### getIPs
on the way!

### destroyService
on the way!

## Snippets
Use these APIs to run a snippet of code. We infer dependencies from the code each time you run the snippet.

### runSnippet
on the way!
