/* eslint-env node, mocha */

import { List } from 'immutable'
import SquareMatrix from '../../src/SquareMatrix'

export default ({ expect }) => function () {
  const tests = {
    'constructor': './constructor',

    '.elements': './elements',
    '.size': './size',
    '.name': './name',

    '#toString': './toString',
    '#getMinor': './getMinor',
    '#setColumn': './setColumn'
  }

  for (const [name, path] of Object.entries(tests)) {
    const test = require(path).default
    describe(name, test({ expect, SquareMatrix, List }))
  }
}
