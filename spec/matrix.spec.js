const Matrix = require('../matrix');

describe('Matrix', () => {
  describe('with a size of 3', () => {
    let matrix;
    beforeEach(() => {
      matrix = new Matrix(3);
    });

    it('should have correct list based on size', () => {
      expect(matrix.list).toEqual([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
      ]);
    });

    it('should correctly flip top-right to bottom-left', () => {
      expect(matrix.flipTRtoBL().list).toEqual([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9
      ]);
    });

    it('should correctly flip top-left to bottom-right', () => {
      expect(matrix.flipTLtoBR().list).toEqual([
        9, 6, 3,
        8, 5, 2,
        7, 4, 1
      ]);
    });

    it('should return the matrix in an array of rows', () => {
      expect(matrix.rows()).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    });
  });

  describe('with a size of 4', () => {
    let matrix;
    beforeEach(() => {
      matrix = new Matrix(4);
    });

    it('should have correct list based on size', () => {
      expect(matrix.list).toEqual([
         1,  2,  3,  4,
         5,  6,  7,  8,
         9, 10, 11, 12,
        13, 14, 15, 16
      ]);
    });

    it('should correctly flip top-right to bottom-left', () => {
      expect(matrix.flipTRtoBL().list).toEqual([
         1,  5,  9, 13,
         2,  6, 10, 14,
         3,  7, 11, 15,
         4,  8, 12, 16
      ]);
    });

    it('should correctly flip top-left to bottom-right', () => {
      expect(matrix.flipTLtoBR().list).toEqual([
        16, 12, 8, 4,
        15, 11, 7, 3,
        14, 10, 6, 2,
        13,  9, 5, 1
      ]);
    });
  });

  describe('with a size of 5', () => {
    let matrix;
    beforeEach(() => {
      matrix = new Matrix(5);
    });

    it('should have correct list based on size', () => {
      expect(matrix.list).toEqual([
         1,  2,  3,  4,  5,
         6,  7,  8,  9, 10,
        11, 12, 13, 14, 15,
        16, 17, 18, 19, 20,
        21, 22, 23, 24, 25
      ]);
    });

    it('should correctly flip top-right to bottom-left', () => {
      expect(matrix.flipTRtoBL().list).toEqual([
        1,  6, 11, 16, 21,
        2,  7, 12, 17, 22,
        3,  8, 13, 18, 23,
        4,  9, 14, 19, 24,
        5, 10, 15, 20, 25
      ]);
    });
  });
});
