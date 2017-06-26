/* eslint-env node, mocha */

export default ({ expect, LinearEquation }) => function () {
  it('에러 던짐: 계수가 정수 리스트가 아님', function () {
    const error = '계수는 정수 리스트여야 합니다'

    expect(() => new LinearEquation(0)).to.throw(error)
    expect(() => new LinearEquation([3, 6, NaN])).to.throw(error)
    expect(() => new LinearEquation([[1, 2], [3, 4]])).to.throw(error)
    expect(() => new LinearEquation(['a', 'b', 'c', 'd'])).to.throw(error)
  })

  it('에러 던짐: 상수항이 정수가 아님', function () {
    const error = '상수항은 정수여야 합니다'

    expect(() => new LinearEquation([1, 2, 3], '4')).to.throw(error)
    expect(() => new LinearEquation([1, 2, 3], 3.5)).to.throw(error)
    expect(() => new LinearEquation([1, 2, 3], NaN)).to.throw(error)
    expect(() => new LinearEquation([1, 2, 3], Infinity)).to.throw(error)
  })
}
