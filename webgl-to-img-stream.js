var ndArray = require('ndarray')
var savePixels = require('save-pixels')

module.exports = webGlToImgStream

/**
 * Given a WebGL context, create an image and pipe that image back to an
 * output stream.
 *
 * This is useful for testing WebGL components in Node.js
 * You pass your WebGL component a `require('gl')` context and let it render.
 *
 * You then write that context to an image and verify that it is correct
 * using something like `require('image-diff')`
 */
function webGlToImgStream (gl, canvasWidth, canvasHeight, outputStream) {
  // Create a Uint8Array to hold our canvas's pixel data
  var canvasPixels = new Uint8Array(canvasWidth * canvasHeight * 4)
  // Write our canvas's pixel data into our Uint8Array
  gl.readPixels(0, 0, canvasWidth, canvasHeight, gl.RGBA, gl.UNSIGNED_BYTE, canvasPixels)
  // Save our pixel data into a .png file on the filesystem
  var nd = ndArray(canvasPixels, [canvasWidth, canvasHeight, 4])

  savePixels(nd, '.png')
  .pipe(outputStream)
}
