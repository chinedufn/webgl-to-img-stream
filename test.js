var webGlToImgStream = require('./')

var test = require('tape')

var createContext = require('gl')

test(function (t) {
  t.plan(1)

  var canvasWidth = 256
  var canvasHeight = 256

  var gl = createContext(canvasWidth, canvasHeight)
  gl.clearColor(0, 0, 0, 1)
  gl.viewport(0, 0, canvasWidth, canvasHeight)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  // Create a writable stream to make sure that our
  // webGlToImgStream successfully finished writing
  var outputStream = {
    writeable: true,
    on: function () {},
    emit: function () {},
    removeListener: function () {},
    end: function () {
      t.ok('Our .png stream ended writing to our writable stream')
    }
  }
  webGlToImgStream(gl, canvasWidth, canvasHeight, outputStream)
})
