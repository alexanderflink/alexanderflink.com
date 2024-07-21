---
title: Switching from NeoVim to Zed
date: 2024-07-21
tags: [programming, computer setup]
image: /src/content/blog/nvim-to-zed/nvim-to-zed.jpg
excerpt: Coming back to coding after parental leave for a year, I was met with a whole bunch of errors from different packages in NeoVim. I ended up ditching it for Zed which is fast(er?) and seems to work perfectly out of the box.
---

# Switching from NeoVim to Zed

After using Vim for almost a year, I went on parental leave. I had gained muscle memory in using the most common vim motions and I had a setup I enjoyed with [LazyVim](https://www.lazyvim.org/). However, when opening NeoVim to get back into coding after almost a year of hardly using the computer, I was met with countless errors. I would say I have a rather minimal config, which you can find [here](https://github.com/alexanderflink/.config/tree/main/nvim), but the act of simply updating those few plugins I do have using LazyVims sync functionality seemed to break a bunch of stuff related to snippets and auto formatting. I am aware I could (and probably should) have locked down the package versions to avoid updating everything at once, but then I would also have been stuck on really old versions which I would have to update one by one to find when something breaks.

I think this is the core issue with a "no batteries included" editor like NeoVim for me. Everything relies on third party packages to work, and for those third party packages to work together. It becomes almost like a second job just to maintain all your editor dependencies and make sure nothing breaks. It's the last thing I wanted to do when getting back into coding after a long parental leave.

## A quick detour of Helix

So, frustrated with not being able to simply fire up a side project and do some coding without first debugging my editor, I decided to give [Helix](https://helix-editor.com/) editor a spin. I did enjoy it, it is a modal terminal based editor, which I like, since I'm spending a lot of time there anyway. It is really fast to start up, and It comes with all the LSP and Tresitter features I need included. However, it uses different keybindings from vim. Specifically, it uses object -> motion commands instead of motion -> object like vim. While I think Helix is onto something here as it may make more sense, I wasn't keen on re-learning all that muscle memory I had with vim bindings. Also, there is something to be said for being able to use `vim` efficiently on any linux server you happen to be accessing.

## Enter Zed

Since I had heard of a fast new editor called Zed, and I wasn't going to retreat to VSCode anytime soon (I stay as far away from electron apps as I possibly can) I decided to give it a try. I was immediately struck with how fast it feels. It actually feels faster than running NeoVim inside the [Alacritty](https://alacritty.org/) terminal which I use. I don't have a benchmark to show it, so this is totally anecdotal, but it just _feels_ a bit snappier to me. Though this is most likely due to the third party packages I have installed in NeoVim as I can't imagine anything being much faster than vanilla NeoVim, but vanilla NeoVim isn't very useful to me.

I of course enabled vim mode the first thing I did, and It is quite workable. It seems to support mostly everything I use in vim. It even has some [vim-surround](https://github.com/tpope/vim-surround) like keybindings (i.e `ysa"(` to surround a string with parenthesis which is great.

### A drawback of Zed

A drawback of using Zed might be that I will in time forget how to navigate buffers, windows and tabs in vim / NeoVim. You could however make the argument that window and buffer navigation is so drastically different in LazyVim from vanilla NeoVim that that still applies. I'm sure I would feel a bit lost in vanilla vim on a Linux server either way.

Anyways, I am quite happy using Zed so far. Everything runs smoothly and I have most, if not all, the tools I need to be productive. I will probably uninstall LazyVim and just use NeoVim as-is for minor text editing when tinkering in the terminal.

Until next time! 👋
