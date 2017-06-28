/* eslint-env node, mocha */

import { List } from 'immutable'
import SquareMatrix from '../../src/SquareMatrix'
import LinearEquation from '../../src/LinearEquation'
import LinearEquationSystem from '../../src/LinearEquationSystem'

export default ({ expect }) => function () {
  const tests = {
    'constructor': './constructor',
    '.name': './name',
    '.coefficientsMatrix': './coefficientsMatrix',
    '.constantTerms': './constantTerms'
    // '#toString': './toString'
  }

  for (const [name, path] of Object.entries(tests)) {
    describe(name, require(path).default({
      List,
      expect,
      SquareMatrix,
      LinearEquation,
      LinearEquationSystem
    }))
  }
}
