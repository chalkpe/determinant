/* eslint-env node, mocha */

export default ({ expect, SquareMatrix, LinearEquation, LinearEquationSystem }) => function () {
  const that = new LinearEquationSystem([
    new LinearEquation([1, 1, 1], 6),
    new LinearEquation([1, 2, 1], 8),
    new LinearEquation([0, 2, 2], 5)
  ]).coefficientsMatrix

  it('정사각행렬임', function () {
    expect(that).to.be.an.instanceof(SquareMatrix)
  })

  it('제대로 계산함', function () {
    expect(that.size).to.equal(3)
    expect(that.elements.toJS()).to.deep.equal([
      [1, 1, 1],
      [1, 2, 1],
      [0, 2, 2]
    ])
  })
}
