/* eslint-env node, mocha */

export default ({ expect, LinearEquation }) => function () {
  it('정수임', function () {
    const e = new LinearEquation([1, 2], 3)
    expect(Number.isInteger(e.size)).to.be.true()
  })

  it('크기를 제대로 계산함', function () {
    const two = new LinearEquation([1, 2], 3)
    const three = new LinearEquation([1, 2, 3], 4)
    const six = new LinearEquation([1, 2, 3, 4, 5, 6], 7)

    expect(two.size).to.equal(2)
    expect(three.size).to.equal(3)
    expect(six.size).to.equal(6)
  })
}
