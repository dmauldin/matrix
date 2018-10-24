const Matrix = require('./matrix');

let matrix = {};

console.log("5x5 Matrix - plain");
matrix = (new Matrix(5)).rows();
console.log(formatMatrix(matrix));


console.log("5x5 Matrix - flipped top-right to bottom-left");
matrix = (new Matrix(5)).flipTRtoBL().rows();
console.log(formatMatrix(matrix));

function formatMatrix (matrix) {
  let tempMatrix = matrix.slice();
  for (let i = 0; i < tempMatrix.length; i++) {
    tempMatrix[i] = tempMatrix[i].map((n) => { return n.toString().padStart(3)});
  }
  return tempMatrix.join("\n");
}
