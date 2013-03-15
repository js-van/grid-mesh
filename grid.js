"use strict"

function p(x,y,nx) { return x + (nx+1)*y; };

//Creates a grid mesh
function gridMesh(nx, ny) {
  var positions = new Array((nx+1) * (ny+1));
  for(var j=0; j<=ny; ++j) {
    for(var i=0; i<=nx; ++i) {
      positions[i + (nx+1)*j] = [i, j, 0];
    }
  }
  var cells = [];
  for(var j=0; j<ny; ++j) {
    for(var i=0; i<nx; ++i) {
      cells.push([ p(i,j,nx), p(i+1, j,nx), p(i, j+1,nx) ]);
      cells.push([ p(i+1,j,nx), p(i+1,j+1,nx), p(i,j+1,nx) ]);
    }
  }
  return {positions: positions, cells: cells};
}

module.exports = gridMesh