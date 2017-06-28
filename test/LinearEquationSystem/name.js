/* eslint-env node, mocha */

export default ({ expect, LinearEquation, LinearEquationSystem }) => function () {
  const that = new LinearEquationSystem([
    new LinearEquation([1, 1, 1], 6),
    new LinearEquation([1, 2, 1], 8),
    new LinearEquation([0, 2, 2], 5)
  ])

  it('문자열임', function () {
    expect(that.name).to.be.a('string')
  })

  it('이름을 제대로 표시함', function () {
    expect(that.name).to.equal('미지수가 3개인 연립일차방정식')
  })
}
