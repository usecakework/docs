---
slug: /
---

# Intro

Cakework helps you build serverless async backends without needing to manage any infrastructure. Cakework is built for work that takes time or more compute such as file processing, data analysis, or report generation.

## Features

Cakework is a "batteries-included" solution that replaces complex systems composed of queues and workers. Features include:
* Production-ready in minutes with no infrastructure or config.
* Each request runs serverless with CPU and memory you pick and no timeout limitations.
* Client SDKs to run tasks, get status, and get results.
* Monitor and debug your application with the CLI, querying for failures and seeing inputs, outputs, and logs for each request.

## How It Works

You write your tasks as regular Python functions and deploy them with our CLI. Use our client SDK to run your tasks, track status, and get results. Each request runs serverlessly with compute parameters you specify and no timeout limitations. Our CLI has ops tools for searching failures and viewing inputs, outputs, and logs. 

Under the covers, we package your code as a Docker container (which you can totally tweak!) and spin up a Fly Machines microVM for each request. We handle queuing and databases behind the scenes.

[Get Started](./gettingstarted) or check out some [examples](./examples)!

## Let's Talk 😊

It's still super early days. Reach out to us on [Discord](https://discord.gg/yB6GvheDcP), [Github](https://github.com/usecakework), or [email](mailto:eric@cakework.com) and help us build something just for *you*!