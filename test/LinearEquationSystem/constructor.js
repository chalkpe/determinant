/* eslint-env node, mocha */

export default ({ expect, LinearEquation, LinearEquationSystem }) => function () {
  it('에러 던짐: 일차방정식 리스트가 아닌 경우', function () {
    const error = '일차방정식 리스트가 아닙니다'

    expect(() => new LinearEquationSystem(0)).to.throw(error)
    expect(() => new LinearEquationSystem([3, 6, NaN])).to.throw(error)
    expect(() => new LinearEquationSystem([[1, 2], [3, 4]])).to.throw(error)
    expect(() => new LinearEquationSystem(['a', 'b', 'c', 'd'])).to.throw(error)
  })

  it('에러 던짐: 방정식들의 미지수 수가 서로 다름', function () {
    const error = '방정식들의 미지수 개수가 동일하지 않습니다'

    const a = new LinearEquation([1, 2], 2)
    const b = new LinearEquation([1, 1, 1], 6)
    const c = new LinearEquation([-1, 3, 7], 4)

    expect(() => new LinearEquationSystem([a, b, c])).to.throw(error)
  })

  it('에러 던짐: 미지수 수와 방정식 수가 같지 않음', function () {
    const error = '방정식 수와 미지수의 수가 일치하지 않습니다'

    const a = new LinearEquation([1, 2, 3], 2)
    const b = new LinearEquation([1, 1, 1], 6)
    const c = new LinearEquation([-1, 3, 7], 4)

    expect(() => new LinearEquationSystem([a, b])).to.throw(error)
    expect(() => new LinearEquationSystem([b, c])).to.throw(error)
    expect(() => new LinearEquationSystem([c, a])).to.throw(error)
  })
}
