/* eslint-env node, mocha */

import compute from './compute'
import Determinant from '../../src/Determinant'
import SquareMatrix from '../../src/SquareMatrix'

export default ({ expect }) => function () {
  describe('#compute', compute({ expect, Determinant, SquareMatrix }))
}
