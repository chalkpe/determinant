/* eslint-env node, mocha */

export default ({ expect, SquareMatrix }) => function () {
  it('제대로 구함: 3 × 3 정사각행렬', function () {
    const three = new SquareMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])

    expect(three.getMinor(1, 1).elements.toJS()).to.deep.equal([
      [1, 3],
      [7, 9]
    ])

    expect(three.getMinor(0, 2).elements.toJS()).to.deep.equal([
      [4, 5],
      [7, 8]
    ])
  })

  it('제대로 구함: 5 × 5 정사각행렬', function () {
    const five = new SquareMatrix([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ])

    expect(five.getMinor(2, 3).elements.toJS()).to.deep.equal([
      [1, 2, 3, 5],
      [6, 7, 8, 10],
      [16, 17, 18, 20],
      [21, 22, 23, 25]
    ])
  })

  it('에러 던짐: 행렬 최대 범위 초과', function () {
    const that = new SquareMatrix([[1, 2], [3, 4]])
    expect(() => that.getMinor(2, 0)).to.throw('행렬 최대 범위를 벗어났습니다')
    expect(() => that.getMinor(0, 2)).to.throw('행렬 최대 범위를 벗어났습니다')
  })

  it('에러 던짐: 행렬 최소 범위 초과', function () {
    const that = new SquareMatrix([[1, 2], [3, 4]])
    expect(() => that.getMinor(-1, 0)).to.throw('행렬 최소 범위를 벗어났습니다')
    expect(() => that.getMinor(0, -1)).to.throw('행렬 최소 범위를 벗어났습니다')
  })
}
