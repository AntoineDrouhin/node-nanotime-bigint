# NanoTime Bigint

Gets the current time in nanoseconds or microseconds.

In node.js you can get high resolution time with `process.hrtime()`, but it is from an unknown relative time, not epoch. So this library helps that by calculating the difference and adding it to the current time.

## Usage

```js
const nanoTime = require("nanotime-bigint");

nanoTime.nanoseconds(); // 15590662695712237087n
nanoTime.microseconds(); // 15590662695712458n
```

## Acknowledgement

This repository was inspired by https://raw.githubusercontent.com/sazze/node-nanotime

The original purpose was to rewrite the library in typescript and support node > 10.4.0 by returning a bigint.
