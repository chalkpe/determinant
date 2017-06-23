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

    if (sizeSet.size > 1) {
      throw new Error('연립방정식의 미지수 개수가 동일하지 않습니다')
    }

    this.size = sizeSet.first()
    if (this.size !== this.equations.size) {
      throw new Error('방정식 수와 미지수의 수가 일치하지 않습니다')
    }
  }

  getCoefficientMatrix () {
    return new SquareMatrix(this.equations.map(e => e.coefficients))
  }

  getConstantTerms () {
    return List(this.equations.map(e => e.constantTerm))
  }

  solve () {
    // TODO: Cramer's rule
    const divisor = Determinant.compute(this.getCoefficientMatrix())
  }
}

// 연립일차방정식
export default LinearEquationSystem
