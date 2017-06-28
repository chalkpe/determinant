/* eslint-env node, mocha */

export default ({ expect, LinearEquation }) => function () {
  it('제대로 계산함', function () {
    const two = new LinearEquation([1, 2], 3)
    const three = new LinearEquation([-1, 2, -3], 4)
    const six = new LinearEquation([-7, -6, 5, -4, 5, 6], 7)

    expect(two.toString()).to.equal('a + 2b = 3')
    expect(three.toString()).to.equal('-a + 2b - 3c = 4')
    expect(six.toString()).to.equal('-7a - 6b + 5c - 4d + 5e + 6f = 7')
  })
}
