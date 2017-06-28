/* eslint-env node, mocha */

export default ({ expect, List, LinearEquation, LinearEquationSystem }) => function () {
  const that = new LinearEquationSystem([
    new LinearEquation([1, 1, 1], 6),
    new LinearEquation([1, 2, 1], 8),
    new LinearEquation([0, 2, 2], 5)
  ]).constantTerms

  it('리스트임', function () {
    expect(List.isList(that)).to.be.true()
  })

  it('제대로 계산함', function () {
    expect(that.size).to.equal(3)
    expect(that.toJS()).to.deep.equal([6, 8, 5])
  })
}
