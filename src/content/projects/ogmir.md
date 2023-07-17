---
title: ogmir
tech:
  - Go
  - Go Fiber
  - Go Rod
  - DevTools Protocol
  - SQLite
  - Fly.io
  - Docker
shortDescription: A blazingly-fast, batteries-included-but-swappable, Opengraph image generator rest endpoint using the DevTools API
github: "https://github.com/amir002001/ogmir"
image: "https://res.cloudinary.com/df3h8ffly/image/upload/q_auto:eco/v1689599180/portfolio/logo_lc1ttx.webp"
date: "2023-07-08T08:22:15-0400"
---

After realizing I had no users on my blog engine, I realized I needed to do something, and the first obvious reason why people wouldn't want to visit my portfolio had to be that my posts Open Graph images were off theme with my website, surely ⊂(◉‿◉)つ.

## Context

I attended a Go meetup called [Go Toronto](https://www.meetup.com/go-toronto/) where a certain individual called [Michael Fridman](https://github.com/mfridman) gave a talk on how he used the Go Graphics package to generate Open Graph images for his project.

I was intrigued and took down a note for later. Previously I'd taken down notes for the Vercel OG Image library as well but never interfaced with it.

Now that I had to make one I needed to pick what I wanted to go with, and I needed a reason behind the stack I chose.

## Playing Around

I started experimenting with Figma to create a template I would use for ogmir. I went hard on the shadows and used a lot of filters and didn't think twice about it. The result was gorgeous, and I couldn't be happier, but it was far from over.

Afterward, it was time to play around with [fogleman/gg](https://github.com/fogleman/gg), the Go Graphics library that was promising but failed to deliver. Jokes aside, this graphics library was amazing, and it had a super straightforward API. For 90% of your use cases, it would be absolutely fine to use this, but there was a small issue. I had shadows, gradients, filters, and a lot of other aspects the gg library would simply tap out on.

This was a blocker, and it made me take a step back. Do I really want to spend this much time and effort into implementing shadows for something that potentially is not even noticed by anyone? I mean seriously I have no users... The answer is:
![yes](https://res.cloudinary.com/df3h8ffly/image/upload/q_auto:eco/v1689615796/blog_assets/cover10_k7txmq.webp)

I needed a rich API that allowed me to style text and elements seamlessly, being flexible and easy to change at the same time. If only there was a markup language with a stylesheet solution baked into it that has been perfected over the ages. Since nothing of that kind exists, I decided to go with HTML/CSS. Vercel OG Images offered a solution where you would write your own JSX and the edge function running it would screenshot and return an octet stream of that JSX component. This sounded exactly like what I wanted! Slight issue though, it only worked on Vercel. After dabbling with gatekept open source, I decided to make my own solution.

## The Stack I Chose

I decided to go with Go. It's fast, simple, and makes me feel good about myself. It also has a very neat package for people interested in scraping and browser automation called Rod. It is based on the DevTools API vs. Selenium's WebDriver API, which gives you a plethora of new options that would not be available in Selenium solutions. You can read more about them [here](https://go-rod.github.io/#/why-rod).

The goal is simple. Use go templates to generate an HTML file based on a pre-existing template and query params coming in from the REST endpoint. Then launch a Chromium browser, screenshot the element, and return it as an octet stream.

## Challenges Down the Line

After giving birth to ogmir, I realized ogmir was a little slow and could use some optimization. The images I was sending over the endpoint were Cloudinary optimized webp images, and all the assets were loaded locally. The browser was a long-lasting process that the Go program would communicate over a socket. There was not much that could be optimized on that end.

There could however be use for a caching layer. The keys that I wanted to use for the cache were the title of the post and the image URL. I wanted it so that if the image exists already, I would return that same octet stream from the disk. Go Fiber gives a lot of good middleware options in that area, with a storage interface that could be hot-swapped with Redis, SQL, Blob Storage, S3, etc. I chose SQLite3 for now because I really didn't feel like setting up a blob store for this. But if I notice any bottlenecks or performance issues, It's a few lines of code to fix it.

## Prologue

Just like that ogmir is shipped to prod and working fast. It even has a rate-limiter. Good for them! I still have 0 users... ( •͡˘ \_•͡˘)
