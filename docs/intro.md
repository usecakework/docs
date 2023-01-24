---
slug: /
---

# Intro

Cakework helps you build serverless async backends with no cloud resources to manage. You launch a new backend in minutes, iterate with just your code and dependencies, and get everything you need to do devops. Each request to your backend runs on its own micro VM with no timeout limitations and CPU and memory you specify. Cakework is built for work that takes time or more compute such as file processing, data analysis, or report generation.

## Features

Cakework is a "batteries-included" solution that replaces complex systems composed of queues and workers. Features include:
* No cloud resources to manage. Your backend is just code. We take care of queues, workers, and data storage behind the scenes.
* Compute with no timeout limitations. Choose CPU and memory per request!
* Pre-built client SDKs to run tasks, get status, and get results.
* Monitor and debug your application with the CLI, querying for failures and seeing inputs, outputs, and logs for each request.

## How It Works

Write your backend as regular Python functions and deploy them with our CLI. Use our client SDK to make requests, track status, and get results. Our CLI lets you query for failures and view inputs, outputs, and logs for each request. 

Under the covers, we package your code as a Docker container (which you can totally tweak!). We queue each request on a NATs cluster, spin up a microVM on Fly Machines to handle each request, and turn it off when its done.

[Get Started](./gettingstarted) or check out some [examples](./examples)!

## Let's Talk 😊

It's still super early days. Reach out to us on [Discord](https://discord.gg/yB6GvheDcP), [Github](https://github.com/usecakework), or [email](mailto:eric@cakework.com) and help us build something just for *you*!