/* eslint-env node, mocha */

export default (expect, That) => function () {
  it('정수임', function () {
    const that = new That([[0, 0], [0, 0]])
    expect(Number.isInteger(that.size)).to.be.true()
  })

  it('크기를 제대로 계산함', function () {
    const two = new That([[1, 2], [3, 4]])
    const three = new That([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

    expect(two.size).to.equal(2)
    expect(three.size).to.equal(3)
  })
}
