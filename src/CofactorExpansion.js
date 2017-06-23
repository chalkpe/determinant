import SquareMatrix from './SquareMatrix'

class CofactorExpansion {
  static getDeterminant (matrix) {
    if (!(matrix instanceof SquareMatrix)) {
      throw new Error('정사각행렬이 아닙니다')
    }

    if (matrix.size === 1) return matrix.data.get(0).get(0)

    return [...Array(matrix.size)]
      .map((_, j) => this.getDeterminant(matrix.getMinor(0, j)))
      .map((minor, j) => matrix.data.get(0).get(j) * Math.pow(-1, j) * minor)
      .reduce((a, b) => a + b, 0)
  }
}

export default CofactorExpansion
