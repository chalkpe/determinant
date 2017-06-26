/* eslint-env node, mocha */

import { List } from 'immutable'

export default (expect, That) => function () {
  it('불변 리스트임', function () {
    const that = new That([[2, 2], [2, 2]])
    expect(List.isList(that.elements)).to.be.true()
  })

  it('생성자에 입력한 값이 대입됨', function () {
    const elements = [[1, 2], [3, 4]]
    expect(new That(elements).elements.toJS()).to.deep.equal(elements)
  })
}
