# REST

The endpoint is `https://api.cakework.com/v1`. To authorize requests, add your API key to the header with `X-Api-Key` as the key. Parameters are passed as JSON in the request body.

## Images

Use these APIs to get images into Cakework. You start VMs and deploy to VMGroups with imported images.

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
on its way!

## VMs
Use these APIs to use individual VMs.

### startVM
on the way!

### stopVM
on the way!

### getLogs
on the way!

## VM Groups
Use these APIs to use groups of VMs that are load balanced behind an endpoint. Each VMGroup runs in its own VPC and is networked to the outside with SSL. 

### createVMGroup
Create a new VM Group.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vmgroup/create
```

#### Request
No request parameters.

#### Response
```json
{
    "vmGroupId": "string",
    "endpoint": "string",
}
```
**`vmGroupId`** The id used to reference this VMGroup.  
**`endpoint`** The endpoint used to access this VMGroup.

### deployVMGroup
Deploy an image to a VMGroup. We will keep minVMs running and autoscale up to maxVMs. If you set minVMs to 0, we will turn all of the VMs off 10s after we received the last request. The cold start coming back should be in seconds. Deployments are blue/green.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vmgroup/[vmGroupId]/deploy
```

#### Request
```json
{
    "vmGroupId": "string",
    "imageId": "string",
    "envVars": {
        "key": "value"
    },
    "cpu": 1,
    "memory": 256,
    "ports": [
        8080,
        8081
    ],
    "minVms": 0,
    "maxVms": 1,
}
```

**`vmGroupId`**: The id of the VMGroup to deploy to.  
**`imageId`** The id of the image to deploy.  
**`envVars`** The environment variables the application needs.  
**`cpu`** The number of CPUs for each VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for each VM. Can be a number between 256 and 16384.  
**`ports`** A list of ports to open.  
**`minVms`** The minimum number of VMs to keep running. If 0, we'll scale down to zero 10s after we received the last request. Can currently only be 0 or 1.  
**`maxVms`** The maximum number of VMs to run. Must be >= `minVms`. Can currently only be one.

#### Response
No response.

### getLogs
Get all of the logs for a VMGroup. This currently just gets all logs and has no pagination or filtering.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vmgroup/[vmGroupId]/logs
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

### destroyVMGroup
on the way!

## Snippets
Use these APIs to run a snippet of code. We infer dependencies from the code each time you run the snippet.

### runSnippet
on the way!