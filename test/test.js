"use strict"

var pointInSimplex = require("../rpis.js")
var sgn = require("signum")

require("tape")(function(t) {

  function test(triangle) {
    t.equals(sgn(pointInSimplex(triangle, [0.25, 0.25])), 1)
    t.equals(sgn(pointInSimplex(triangle, [0.5, 0.5])), 0)
    t.equals(sgn(pointInSimplex(triangle, [-1, 0.5])), -1)
    t.equals(sgn(pointInSimplex(triangle, [-1, -1])), -1)
    t.equals(sgn(pointInSimplex(triangle, [0.5, -1])), -1)
    t.equals(sgn(pointInSimplex(triangle, [1, 1])), -1)


    for(var i=0; i<3; ++i) {
      t.equals(pointInSimplex(triangle, triangle[i]), 0)
      var u = triangle[i]
      var v = triangle[(i+1)%3]
      t.equals(pointInSimplex(triangle, [0.5*(u[0]+v[0]), 0.5*(u[1]+v[1])]), 0)
    }
  }
  test([[0,0], [0,1], [1,0]])
  test([[0,0], [1,0], [0,1]])


  t.end()
})