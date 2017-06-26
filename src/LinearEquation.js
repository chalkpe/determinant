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
  }

  get size () {
    return this.coefficients.size // 미지수의 수
  }

  get unknowns () {
    return this.coefficients.map((c, i) => {
      if (c === 0) return ''

      const x = String.fromCharCode(97 + i)
      const a = c !== 1 && c !== -1 ? Math.abs(c) : ''
      const o = c > 0 ? (i > 0 ? '+ ' : '') : (i > 0 ? '- ' : '-')

      return o + a + x
    })
  }

  toString () {
    const left = this.unknowns.filter(x => x)
    const right = this.constantTerm.toString(10)

    return [...left, '=', right].join(' ')
  }
}

// 일차방정식
export default LinearEquation
