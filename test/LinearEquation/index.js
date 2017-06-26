/* eslint-env node, mocha */

import LinearEquation from '../../src/LinearEquation'

export default ({ expect }) => function () {
  const tests = {
    'constructor': './constructor',
    '.size': './size'
  }

  for (const [name, path] of Object.entries(tests)) {
    const test = require(path).default
    describe(name, test({ expect, LinearEquation }))
  }
}
