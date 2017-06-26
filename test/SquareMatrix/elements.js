/* eslint-env node, mocha */

export default ({ expect, SquareMatrix, List }) => function () {
  it('불변 리스트임', function () {
    const that = new SquareMatrix([[2, 2], [2, 2]])
    expect(List.isList(that.elements)).to.be.true()
  })

  it('생성자에 입력한 값이 대입됨', function () {
    const elements = [[1, 2], [3, 4]]
    expect(new SquareMatrix(elements).elements.toJS()).to.deep.equal(elements)
  })
}
