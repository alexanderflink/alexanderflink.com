---
title: Hello, world!
date: 2024-06-26
tags: [web, programming]
image: /hello_world.webp
excerpt: I've been meaning to create a blog about web and programming for a while and finally got around to it! Please enjoy occasional ramblings about web stuff and programming in general. Some personal stuff might sneak in as well.
---

![Hello, World!](/hello_world.webp)
# Hello, World!

I've been working with web for almost 11 years, and creating a blog about web and programming in general is something I've had in mind for quite a while but never got around to doing. So here it is, my little corner of the internet where I'll aim to occasionally post ramblings about web development, stuff I've done and thoughts.

## Building this site
I knew I wanted to build a simple blog website that's not encumbered by a ton of .js bloat (I'm looking at you Next.js!). I toyed with the idea of doing it in Rust using something like [Rocket](https://rocket.rs/) and [htmx](https://htmx.org/), but quickly realized that would not be the one-week quick and easy project I wanted this to be. So I landed on using [Astro](https://astro.build/) which ticks all the boxes for me.

- [x] Static site generation (generating static HTML and css, everything can be served over a CDN).
- [x] Not dependent on a .js heavy framework like React to be shipped to the client. Just plain HTML and a sprinkle of vanilla js.
- [x] Super fast to get up and running writing markdown documents for blog posts.

## Sprinkling some magic on top
To spice things up a little bit, I made the "logo" in the top left by adding a small canvas running the tiny but great Webgl helper library [ogl](https://github.com/oframe/ogl). It seemed completely overkill to load something like [three.js](https://threejs.org/) or [Pixi.js](https://pixijs.com/) just to run a tiny Webgl canvas with a fragment shader in it to create the effect...
