var grid = require("../grid.js")

require("tap").test("grid-mesh", function(t) {

  var simple_grid = grid(1, 1)
  
  t.equals(simple_grid.positions.length, 4)
  t.equals(simple_grid.cells.length, 2)
  t.equals(simple_grid.positions[0][0], 0)


  var advanced_grid = grid(2, 3, [0, 0, 1], [1, 0, 0], [0, 1, 0])
  
  t.equals(advanced_grid.positions.length, 12)
  t.equals(advanced_grid.cells.length, 12)
  
  for(var i=0; i<10; ++i) {
    for(var j=0; j<10; ++j) {
      var g = grid(i,j)
      t.equals(g.positions.length, (i+1) * (j+1))
      t.equals(g.cells.length, 2 * i * j)
    }
  }

  t.end()
})