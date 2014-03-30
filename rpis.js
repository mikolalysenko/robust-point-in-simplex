"use strict"

var orientation = require("robust-orientation")
var sgn = require("signum")

module.exports = inSimplex

function inSimplex(simplex, point) {
  var s = sgn(orientation.apply(undefined,simplex))
  var scopy = simplex.slice()
  var boundary = false
  for(var i=0; i<simplex.length; ++i) {
    scopy[i] = point
    var o = sgn(orientation.apply(undefined,scopy))
    scopy[i] = simplex[i]
    if(o) {
      if(sgn(o) !== s) {
        return -1
      }
    } else {
      boundary = true
    }
  }
  if(boundary) {
    return 0
  }
  return 1
}