/* eslint-env node, mocha */

export default (expect, That) => function () {
  it('에러 던짐: 2차원 배열이 아닌 경우', function () {
    const error = '2차원 리스트가 아닙니다'

    expect(() => new That()).to.throw(error)
    expect(() => new That('1')).to.throw(error)
    expect(() => new That(123)).to.throw(error)
    expect(() => new That([1, 2, 3])).to.throw(error)
    expect(() => new That([[3], [6, 9], 12])).to.throw(error)
  })

  it('에러 던짐: 정사각형 배열이 아닌 경우', function () {
    const error = '정사각형 리스트가 아닙니다'

    expect(() => new That([[1, 2], [3, 4, 5]])).to.throw(error)
    expect(() => new That([[1, 2], [3, 4], [5, 6]])).to.throw(error)
    expect(() => new That([[1, 2, 3], [4, 5, 6], [7, 8]])).to.throw(error)
  })

  it('에러 던짐: 배열에 정수가 아닌 값이 포함된 경우', function () {
    const error = '2차원 정수 리스트가 아닙니다'

    expect(() => new That([[undefined]])).to.throw(error)
    expect(() => new That([[1, 2], [3, '4']])).to.throw(error)
    expect(() => new That([[1, 2], [3, 4.4]])).to.throw(error)
    expect(() => new That([[[1, 2], 3], [4, 5]])).to.throw(error)
  })
}
