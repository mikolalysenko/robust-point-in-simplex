robust-point-in-simplex
=======================
Exact point in simplex predicate.

## Example

```javascript
var pointInSimplex = require("robust-point-in-simplex")

var simplex = [
  [0,0],
  [0,1],
  [1,0]
]

console.log(pointInSimplex(simplex, [0.25, 0.25]))
```

### `require("robust-point-in-simplex")(simplex, point)`
Exactly tests if a given point is contained in a simplex.

* `simplex` is an array of `n+1` points
* `point` is a length `n` array of floats

**Returns** An integer indicating where the point lies on the simplex

* `+1` if the point is contained in the simplex
* `-1` if the point is outside the simplex
* `0` if the point lies on the boundary of the simplex

## Credits
(c) 2013 Mikola Lysenko. MIT License