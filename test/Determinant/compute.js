/* eslint-env node, mocha */

export default ({ expect, SquareMatrix, Determinant }) => function () {
  it('제대로 동작함: 2 × 2 정사각행렬', function () {
    const two = new SquareMatrix([
      [2, 4],
      [3, 7]
    ])
    expect(Determinant.compute(two)).to.equal(2)
  })

  it('제대로 동작함: 3 × 3 정사각행렬', function () {
    const three = new SquareMatrix([
      [2, 3, 1],
      [3, 0, -1],
      [1, -2, 2]
    ])
    expect(Determinant.compute(three)).to.equal(-31)
  })

  it('제대로 동작함: 4 × 4 정사각행렬', function () {
    const four = new SquareMatrix([
      [1, 2, 1, 4],
      [0, -1, 2, 1],
      [1, 0, 1, 3],
      [0, 1, 3, 1]
    ])
    expect(Determinant.compute(four)).to.equal(-7)
  })

  it('제대로 동작함: 5 × 5 정사각행렬', function () {
    const five = new SquareMatrix([
      [1, 2, 1, 1, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 1, 1],
      [4, 1, 1, 1, 1],
      [1, 1, 1, 5, 1]
    ])
    expect(Determinant.compute(five)).to.equal(-24)
  })
}
