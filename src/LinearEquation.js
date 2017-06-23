const { List, fromJS } = require('immutable')

class LinearEquation {
  constructor (coefficients, constantTerm) {
    if (!List.isList(coefficients)) coefficients = fromJS(coefficients)
    if (!List.isList(coefficients) || coefficients.some(n => !Number.isInteger(n))) {
      throw new Error('계수는 정수 리스트여야 합니다')
    }

    if (!Number.isInteger(constantTerm)) {
      throw new Error('상수항은 정수여야 합니다')
    }

    this.coefficients = coefficients // 계수
    this.constantTerm = constantTerm // 상수항
    this.n = this.coefficients.size // 미지수의 수
  }

  toString () {
    this.coefficients.map((v, i) => `${v}${String.fromCharCode('a'.charCodeAt() + i)}`)
  }
}

export default LinearEquation
