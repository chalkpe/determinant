import { Set, List, fromJS } from 'immutable'

import Determinant from './Determinant'
import SquareMatrix from './SquareMatrix'
import LinearEquation from './LinearEquation'

class LinearEquationSystem {
  constructor (equations) {
    if (!List.isList(equations)) equations = fromJS(equations)
    if (!List.isList(equations) || !equations.every(e => e instanceof LinearEquation)) {
      throw new Error('일차방정식 리스트가 아닙니다')
    }

    this.equations = equations
    const sizeSet = Set(this.equations.map(e => e.size))

    if (sizeSet.size !== 1) {
      throw new Error('방정식들의 미지수 개수가 동일하지 않습니다')
    }

    this.size = sizeSet.first()
    if (this.size !== this.equations.size) {
      throw new Error('방정식 수와 미지수의 수가 일치하지 않습니다')
    }
  }

  get name () {
    return `미지수가 ${this.size}개인 연립일차방정식`
  }

  get coefficientsMatrix () {
    return new SquareMatrix(this.equations.map(e => e.coefficients))
  }

  get constantTerms () {
    return List(this.equations.map(e => e.constantTerm))
  }

  solve () {
    const vector = this.constantTerms
    const matrix = this.coefficientsMatrix
    const divisor = Determinant.compute(matrix)

    return [...Array(this.size)]
      .map((_, i) => matrix.setColumn(i, vector))
      .map(v => [Determinant.compute(v), divisor]) // [분자, 분모]
  }

  getBorder (index) {
    const first = index === 0
    const last = index === this.size - 1
    const centre = index === Math.floor(this.size / 2)

    return first && last ? '{' : first ? '⎧' : last ? '⎩' : centre ? '⎨' : '⎪'
  }

  toString () {
    const equations = this.equations
      .map((eq, i) => [this.getBorder(i), eq.toString()].join(' '))

    return [this.name, ...equations].join('\n')
  }
}

// 연립일차방정식
export default LinearEquationSystem
