---
title: Hello, world!
date: 2024-06-26
tags: [web, programming]
image: /src/content/blog/hello-world/hello_world.webp
excerpt: I've been meaning to create a blog about web and programming for a while and finally got around to it! Please enjoy occasional ramblings about web stuff and programming in general. Some personal stuff might sneak in as well.
---

# Hello, World!

I've been working with web for quite a while, and creating a blog about web and programming in general is something I've had in mind but never got around to doing. So here it is, my little corner of the internet where I'll aim to occasionally post ramblings about web development and things I've built.

## Building this site

I knew I wanted to build a simple blog website that's not encumbered by a ton of .js bloat (I'm looking at you Next.js!). I toyed with the idea of doing it in Rust using something like [Rocket](https://rocket.rs/) and [htmx](https://htmx.org/), but quickly realized that would not be the quick and easy project I wanted this to be. So I landed on using [Astro](https://astro.build/) which ticks all the boxes for me.

- [x] Static site generation (generating static HTML and css, everything can be served over a CDN and is easy to deploy).
- [x] Not dependent on a .js heavy framework like React to be shipped to the client. Just plain HTML and a sprinkle of vanilla js.
- [x] Super fast to get up and running writing markdown documents for blog posts.

## Sprinkling the "logo" with some eye candy

To spice things up a little bit, I made the "logo" in the header by rendering a transparent .png image of the blurred text, and manipulating it using a fragment shader in WebGL. I opted for the tiny but excellent [ogl](https://github.com/oframe/ogl) library for the boilerplate WebGL code. The effect was _very_ much inspired by the effect over at [blotter](https://blotter.js.org/), a cool WebGL text effect package. Below are the steps to achieve the effect.

1. Render the image of the blurred text to a canvas element.
   ![Blurred text](/logo.png)

2. Multiply the alpha channel by the red (or any other) channel of a noise image which scrolls across the canvas.
   ![Noise](/noise.jpg)

3. Multiply again by a more granular noise for a grain effect.

4. Add a mouse effect that multiplies the alpha more where the mouse is hovering.

And that's it!

<figure>
  <img src="/src/content/blog/hello-world/animated-logo.webp">
  <figcaption>Resulting effect</figcaption>
</figure>

You can read the source [here](https://github.com/alexanderflink/alexanderflink.com/blob/main/src/components/AnimatedLogo.astro) if you're interested in how I implemented this. Feel free to copy it and use as you like!

That's all I had to share for now. I look forward to writing more blog posts about all things web and programming related in the future. Thanks for reading!
