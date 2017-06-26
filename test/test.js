/* eslint-env node, mocha */

import chai from 'chai'
import dirtyChai from 'dirty-chai'

chai.use(dirtyChai)
const { expect } = chai

const tests = {
  SquareMatrix: './SquareMatrix',
  Determinant: './Determinant'
}

for (const [name, path] of Object.entries(tests)) {
  const test = require(path).default
  describe(name, test(expect))
}
