"use strict"

var orientation = require("robust-orientation")
var sgn = require("signum")

module.exports = inSimplex

function inSimplex(simplex, point) {
  var s = orientation.apply(undefined,simplex)
  var scopy = simplex.slice()
  var boundary = false
  var mind = Infinity
  for(var i=0; i<simplex.length; ++i) {
    scopy[i] = point
    var o = orientation.apply(undefined,scopy)
    scopy[i] = simplex[i]
    if(o) {
      if(sgn(o) !== s) {
        return o
      }
    } else {
      boundary = true
    }
    mind = Math.min(mind, o)
  }
  if(boundary) {
    return 0
  }
  return mind
}