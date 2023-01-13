---
slug: /
---

# Intro

Cakework helps you build serverless, long-running tasks without needing to manage any infrastructure. Use Cakework for any operation where your client does not wait for a response, such as file processing, data analysis, or report generation.

We built Cakework because we got tired of wiring together and managing queues, dbs, and workers/lambdas to build long-running tasks. Our prototypical use case is machine learning that takes some time behind the scenes. [Here](https://github.com/usecakework/examples/tree/main/image_generation) is a simple example of generating an image with Stable Diffusion and uploading to S3.

## Features

Cakework is a "batteries-included" solution that replaces complex systems composed of queues and workers. Features include:
* Production-ready in minutes with no infrastructure or config
* Serverless with no timeout limitations
* Client SDKs to run tasks, get status, and get results
* Operations tooling for identifying failed requests, viewing logs, and redriving

## How It Works

Write your task as a Python function using the [Task SDK](./reference/cakeworksdk/task/python/usage.md) and deploy it using the [CLI](./reference/cli/usage). Use the Python [Client SDK](./reference/cakeworksdk/client/python/usage.md) to start making requests. Each request returns an ID that you can use with the Client SDK or CLI to get status or processing results.

Get started with a [tutorial](./gettingstarted) or check out some [examples](./examples)!

## Let's Talk 😊

It's still super early days. Reach out to us on [Discord](https://discord.gg/yB6GvheDcP), [Github](https://github.com/usecakework), or [email](mailto:eric@cakework.com) and help us build something just for *you*!
