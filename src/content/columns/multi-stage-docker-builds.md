---
title: Multi-stage builds and debugging scratch images
shortDescription: have a stage where you do all your dirty work and copy the build output to a scratch image and end of story right? Not quite. If you don't have even apk installed, how does one debug? let's take a look!
image: https://res.cloudinary.com/df3h8ffly/image/upload/q_auto:eco/v1691626593/blog_assets/frbackground_texture_metal_scratches-image-kybe8i5q.jpg_qxg2ep.webp
publishDate: 2023-08-09
---

have a stage where you do all your dirty work and copy the build output to a
scratch image and end of story right? Not quite. If you don't have even apk
installed, how does one debug? let's take a look!

## Multi-stage builds

Multi-stage builds are wonderful. They have many use cases, but one I most
commonly use is for building and testing my application, and only output the
executable and necessary files to later stages. This not only gives me a much
slimmer image but also allows me to boast that my application is running on a
scratch image, which we will look at in a bit.

## Why am I writing this

I recently migrated [ogmir](https://github.com/amir002001/ogmir) to a
multi-stage build and I saw it shrink from 1.5GB to just 500MB roughly. This has
led me to do the same thing at work with practically every dockerfile I can get
my hands on. Yet, there is an issue that you commonly run into with this
scenario and I want to share what I have found to be best practices when dealing
with that. While ogmir's final image sits on Alpine since it needs a chromium
binary, most of my images at work are going to be based on scratch.

## What are scratch images?

Many think containers are VMs and base their image on the something on the
juiciest image out there. If you're using ubuntu:latest as your base image,
there is a good chance you're doing it wrong. There are many problems with this
approach. First off, these containers come with a lot of bloat. Even if you have
Alpine as your base, there are a lot of utilities that your application will not
use, and those tools not only end up bloating your image size, they come back to
haunt you once CVEs get discovered within them. That's why scratch images are
awesome. Take everything out, except for the binary, but wait, what happens when
prod breaks down and I want to debug what went wrong???

## Debugging scratch images

Let's get this very clear. It is a horrible practice to attach to a container to
debug it. If you have a robust enough platform, where you can get logs and
metrics from your system running in production, that should be more than enough
to get a problem solved. Even if your application doesn't support OpenTelemetry,
installing an eBPF agent should get you up and running in no time.

But I understand there are desperate times, and they require desperate measures.
In those times, I suggest a few hacks/tricks I came across throughout the
incidents I was assigned to. Let's dive in!

### Approach 1: ephemeral containers

If your application has the privilege of running in Kubernetes, I have good news
for you. Kubectl (correctly pronounced cube cuttle), since version 1.25, has the
option to spin up ephemeral containers. These containers run temporarily in an
existing pod and allow us to do just what we want: debug our application. An
option is to deploy these containers in the same pod and attach them to the
running application. There is a problem however, the container doesn't just go
away after the debugging is complete. After getting the pod using Kubectl, it
will ironically state that the ephemeral container is still running. The only
way to get rid of it is to delete the pod and that just leaves the taste of ash
in my mouth.

### Approach 2: ephemeral containers with copy-to

A different approach is to use the copy-to flag of kubectl to copy the pod and
attach an ephemeral container to the copy. This way once we're done debugging,
we just delete the pod! This approach is well documented
[here](https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/).
There are downsides to this approach. You won't have the same load on the copy
compared to the running process, but remember that this isn't the right way to
do it in the first place.
