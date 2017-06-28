/* eslint-env node, mocha */

import chai from 'chai'
import dirtyChai from 'dirty-chai'

chai.use(dirtyChai)
const { expect } = chai

const tests = [
  'SquareMatrix',
  'Determinant',
  'LinearEquation',
  'LinearEquationSystem'
]

tests.forEach(name => {
  const test = require(`./${name}`)
  describe(name, test.default({ expect }))
})
