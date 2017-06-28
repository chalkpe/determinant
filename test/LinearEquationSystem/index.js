/* eslint-env node, mocha */

import LinearEquation from '../../src/LinearEquation'
import LinearEquationSystem from '../../src/LinearEquationSystem'

export default ({ expect }) => function () {
  const tests = {
    'constructor': './constructor'
    // '.name': './name',
    // '#toString': './toString'
  }

  for (const [name, path] of Object.entries(tests)) {
    const test = require(path).default
    describe(name, test({ expect, LinearEquation, LinearEquationSystem }))
  }
}
