"use strict"

var orientation = require("robust-orientation")

module.exports = inSimplex

function inSimplex(simplex, point) {
  var s = orientation(simplex)
  var scopy = simplex.slice()
  var boundary = false
  for(var i=0; i<simplex.length; ++i) {
    scopy[i] = point
    var o = orientation(scopy)
    scopy[i] = simplex[i]
    if(o) {
      if(o !== s) {
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