class Matrix {
  constructor(size) {
    this.size = size;
    this.list = Array(size * size).fill(0).map((_, i) => i + 1);
  }

  flipTRtoBL () {
    for (let r = 0; r < this.size; r++) {
      for (let c = r + 1; c < this.size; c++) {
        this.swap({r, c}, {r: c, c: r});
      }
    }
    return this;
  }

  flipTLtoBR () {
    const maxIndex = this.size - 1;
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < maxIndex - r; c++) {
        this.swap({r, c}, {r: maxIndex - c, c: maxIndex - r});
      }
    }
    return this;
  }

  /**
   * helper method to swap 2 locations in the matrix
   * @param {{r: number, c: number}} a first location in the matrix
   * @param {{r: number, c: number}} b second location in the matrix
   */
  swap(a, b) {
    const tempValue = this.list[a.r * this.size + a.c];
    this.list[a.r * this.size + a.c] = this.list[b.r * this.size + b.c];
    this.list[b.r * this.size + b.c] = tempValue;
  }

  rows() {
    let dimensionalMatrix = [];
    let matrixCopy = this.list.slice();
    for (let i = 0; i < this.size; i++) {
      dimensionalMatrix.push(matrixCopy.slice(i * this.size, i * this.size + this.size));
    }
    return dimensionalMatrix;
  }
}

module.exports =  Matrix;
