/* eslint-env node, mocha */

export default ({ expect, LinearEquation }) => function () {
  it('에러 던짐: 정수 리스트가 아님', function () {
    const error = '계수는 정수 리스트여야 합니다'

    expect(() => new LinearEquation(0)).to.throw(error)
    expect(() => new LinearEquation([3, 6, NaN])).to.throw(error)
    expect(() => new LinearEquation([[1, 2], [3, 4]])).to.throw(error)
    expect(() => new LinearEquation(['a', 'b', 'c', 'd'])).to.throw(error)
  })
}
