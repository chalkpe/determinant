/* eslint-env node, mocha */

export default ({ expect, SquareMatrix }) => function () {
  it('제대로 설정함: 3 × 3 정사각행렬', function () {
    const three = new SquareMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])

    expect(three.setColumn(1, [10, 11, 12]).elements.toJS()).to.deep.equal([
      [1, 10, 3],
      [4, 11, 6],
      [7, 12, 9]
    ])

    expect(three.setColumn(0, [-1, -2, -3]).elements.toJS()).to.deep.equal([
      [-1, 2, 3],
      [-2, 5, 6],
      [-3, 8, 9]
    ])
  })

  it('에러 던짐: 행렬 최대 범위 초과', function () {
    const that = new SquareMatrix([[1, 2], [3, 4]])
    expect(() => that.setColumn(2, [0, 0])).to.throw('행렬 최대 범위를 벗어났습니다')
  })

  it('에러 던짐: 행렬 최소 범위 초과', function () {
    const that = new SquareMatrix([[1, 2], [3, 4]])
    expect(() => that.setColumn(-1, [0, 0])).to.throw('행렬 최소 범위를 벗어났습니다')
  })

  it('에러 던짐: 열벡터가 아님', function () {
    const error = '열벡터가 아닙니다'
    const that = new SquareMatrix([[1, 2], [3, 4]])

    expect(() => that.setColumn(1, 0)).to.throw(error)
    expect(() => that.setColumn(1, null)).to.throw(error)
    expect(() => that.setColumn(1, [[2, 3], [4, 5]])).to.throw(error)
    expect(() => that.setColumn(1, { '0': 3, '1': 2 })).to.throw(error)
  })

  it('에러 던짐: 열벡터 크기 불일치', function () {
    const that = new SquareMatrix([[1, 2], [3, 4]])
    expect(() => that.setColumn(1, [0, 0, 0])).to.throw('열벡터의 크기가 행렬과 일치하지 않습니다')
  })
}
