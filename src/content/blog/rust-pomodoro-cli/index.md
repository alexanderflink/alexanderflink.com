---
title: A Pomodoro CLI written in Rust
date: 2024-08-02 19:50:00
tags: [programming, rust]
excerpt: I built a small Pomodoro CLI in Rust and learned Async Rust is difficult.
---
# A Pomodoro CLI written in Rust

I just built a small [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) CLI in Rust. I actually started this project quite some time ago, but just recently managed to summon the time and motivation to get it in a working state. I tried a handful of other CLI's, but noticed that all of them relied on saving the current pomodoro timer state to a file, and then reading that file whenever you run the command to check the current timer. Since I wanted to display this timer in my custom status bar in macOS, that would mean polling the CLI every second, and it just didn't feel right to read from disk every second for such a simple task. Also, this was a great opportunity to learn some Rust as this project would need to involve async / await.

You can install the CLI from [crates.io](https://crates.io/crates/pomo-cli) using `cargo install pomo-cli`.

## Async Rust is hard
I started out using Rusts built in `std::thread`s, for the main process when running `pomo start` which starts a timer and listens on a Unix socket for incoming messages from other pomo processes such as `pomo pause` and `pomo next`. However, I quickly ran into issues when I needed recursion (a running timer should be able to start the next timer when it is finished). For this I reached for the [tokio](https://tokio.rs/) async runtime which works great. I also learned I needed some sort of channel system to send messages from my [Timer](https://github.com/alexanderflink/pomo/blob/main/src/timer.rs) objects to the [Controller](https://github.com/alexanderflink/pomo/blob/main/src/controller.rs) object which is responsible for creating, starting and stopping timers. I ended up using [flume](https://github.com/zesterer/flume) for this.

Another complication of the async nature of this code was that I needed to make certain methods on the [Timer](https://github.com/alexanderflink/pomo/blob/main/src/timer.rs) struct static methods in order to be able to pass timers around inside an `Arc<Mutex<>>`. Arc and Mutex is necessary in order to share memory across threads (Arc) and allow that memory to be mutaded in multiple places (Mutex). This made the interface of the Timer object quite ugly, but I didn't find any other way of making this work. For example, the method to start a timer needs to be called like `Timer::start(&timer)` where `&timer` is of type `Arc<Mutex<Timer>>`.

I do feel like this project became unecessarily complex. I probably shouldn't have to pull in a bunch of third party libraries and an async runtime for such a simple CLI. Perhaps this is why most other Pomodoro CLI's I've seen simply writes the current time to a file on disk and reads that.

You can read the source code [here](https://github.com/alexanderflink/pomo). Feel free to open an issue and tell me how stupid this code is! I'm eager to learn Rust better and I feel like this could be much simpler.
