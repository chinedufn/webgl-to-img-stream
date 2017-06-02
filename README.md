webgl-to-img-stream [![npm version](https://badge.fury.io/js/webgl-to-img-stream.svg)](http://badge.fury.io/js/webgl-to-img-stream) [![Build Status](https://travis-ci.org/chinedufn/webgl-to-img-stream.svg?branch=master)](https://travis-ci.org/chinedufn/webgl-to-img-stream)
===============

> Convert a WebGL context's canvas' pixel data into an image, and write that image to a writable stream

## Background / Initial Motivation

This module is meant to help with testing WebGL components.

Say you have a WebGL component that takes your canvas' WebGL context and a model view matrix and draws
a fire particle effect at a location of your choice. You can verify that that works by rendering it in node
(using something like `require('gl')`) and then writing your rendering to a `.png` file on your file system
using `webgl-to-img-stream`. You can then use something like `image-diff` to make sure that your new `.png`
file matches the one that you expect.

## To Install

```sh
$ npm install --save webgl-to-img-stream
```

## Usage

```js
var webGlToImgStream = require('webgl-to-img-stream')
var fs = require('fs')

var canvasWidth = 128
var canvasHeight = 128
var gl = require('gl')(canvasWidth, canvasHeight)
// ... do whatever you want with your WebGL context ...

var outputFile = fs.createWriteStream('./image.png')
webGlToImgStream(gl, canvasWidth, canvasHeight, outputFile)

// Your canvas's contents have now been saved to your file system
```

## See Also

- [image-diff](https://github.com/uber-archive/image-diff)

## License

MIT
