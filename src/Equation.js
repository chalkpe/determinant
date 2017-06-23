const { List, fromJS } = require('immutable')

class Equation {
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
    this.degree = this.coefficients.size
  }

  toString () {

  }
}

export default Equation
