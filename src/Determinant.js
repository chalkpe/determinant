import SquareMatrix from './SquareMatrix'

class Determinant {
  static compute (matrix) {
    if (!(matrix instanceof SquareMatrix)) {
      throw new Error('정사각행렬이 아닙니다')
    }

    if (matrix.size === 0) return 1
    if (matrix.size === 1) return matrix.elements.get(0).get(0)

    // 여인자 전개
    return [...Array(matrix.size)]
      .map((v, i) => this.getCofactor(matrix, i))
      .reduce((a, b) => a + b, 0)
  }

  static getCofactor (matrix, index) {
    const minorDeterminant = this.compute(matrix.getMinor(0, index))
    const cofactor = index % 2 ? -minorDeterminant : minorDeterminant

    return matrix.elements.get(0).get(index) * cofactor
  }
}

// 행렬식
export default Determinant
