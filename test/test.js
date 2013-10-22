"use strict"

var pointInSimplex = require("../rpis.js")

require("tape")(function(t) {

  var triangle = [[0,0], [0,1], [1,0]]

  t.equals(pointInSimplex(triangle, [0.25, 0.25]), 1)
  t.equals(pointInSimplex(triangle, [0.5, 0.5]), 0)
  t.equals(pointInSimplex(triangle, [-1, 0.5]), -1)
  t.equals(pointInSimplex(triangle, [-1, -1]), -1)
  t.equals(pointInSimplex(triangle, [0.5, -1]), -1)
  t.equals(pointInSimplex(triangle, [1, 1]), -1)

  t.end()
})