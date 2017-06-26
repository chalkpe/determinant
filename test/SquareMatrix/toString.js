/* eslint-env node, mocha */

export default ({ expect, SquareMatrix }) => function () {
  it('제대로 출력함: 1 × 1 정사각행렬', function () {
    const one = new SquareMatrix([[1]])
    expect(one.toString()).to.equal('[ 1 ]')
  })

  it('제대로 출력함: 2 × 2 정사각행렬', function () {
    const two = new SquareMatrix([[1, 2], [3, 4]])
    expect(two.toString()).to.equal('⎡ 1 2 ⎤\n⎣ 3 4 ⎦')
  })

  it('제대로 출력함: 3 × 3 정사각행렬', function () {
    const three = new SquareMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    expect(three.toString()).to.equal('⎡ 1 2 3 ⎤\n⎢ 4 5 6 ⎥\n⎣ 7 8 9 ⎦')
  })
}
