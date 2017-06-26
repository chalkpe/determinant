/* eslint-env node, mocha */

export default (expect, That) => function () {
  it('문자열임', function () {
    const that = new That([[4, 3], [2, 1]])
    expect(that.name).to.be.a('string')
  })

  it('이름을 제대로 표시함', function () {
    const two = new That([[0, 0], [1, 1]])
    const three = new That([[3, 6, 9], [6, 9, 3], [9, 3, 6]])

    expect(two.name).to.equal('2 × 2 정사각행렬')
    expect(three.name).to.equal('3 × 3 정사각행렬')
  })
}
