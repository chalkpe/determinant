import { List, fromJS } from 'immutable'

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
    this.size = this.coefficients.size // 미지수의 수
  }

  get unknowns () {
    return this.coefficients
      .map((c, i) => (c > 1 ? c : '') + String.fromCharCode(97 + i)) // 'a'
  }

  toString () {
    return `${this.unknowns.join(' + ')} = ${this.constantTerm}`
  }
}

// 일차방정식
export default LinearEquation
