/* eslint-env node, mocha */

import chai from 'chai'
import dirtyChai from 'dirty-chai'
import { List } from 'immutable'

chai.use(dirtyChai)
const { expect } = chai

describe('SquareMatrix', function () {
  const That = require('../src/SquareMatrix')

  describe('constructor', function () {
    it('에러 던짐: 2차원 배열이 아닌 경우', function () {
      const error = '2차원 배열이 아닙니다'

      expect(() => new That()).to.throw(error)
      expect(() => new That('1')).to.throw(error)
      expect(() => new That(123)).to.throw(error)
      expect(() => new That([1, 2, 3])).to.throw(error)
      expect(() => new That([[3], [6, 9], 12])).to.throw(error)
    })

    it('에러 던짐: 배열에 정수가 아닌 값이 포함된 경우', function () {
      const error = '2차원 정수 배열이 아닙니다'

      expect(() => new That([[undefined]])).to.throw(error)
      expect(() => new That([[1, 2], [3, '4']])).to.throw(error)
      expect(() => new That([[1, 2], [3, 4.4]])).to.throw(error)
      expect(() => new That([[[1, 2], 3], [4, 5]])).to.throw(error)
    })

    it('에러 던짐: 정사각형 배열이 아닌 경우', function () {
      const error = '정사각형 배열이 아닙니다'

      expect(() => new That([[1, 2], [3, 4, 5]])).to.throw(error)
      expect(() => new That([[1, 2], [3, 4], [5, 6]])).to.throw(error)
      expect(() => new That([[1, 2, 3], [4, 5, 6], [7, 8]])).to.throw(error)
    })

    it('에러 던짐: 1 × 1 정사각행렬인 경우', function () {
      const error = '1 × 1 정사각행렬은 지원하지 않습니다'

      expect(() => new That([[0]])).to.throw(error)
      expect(() => new That([[32767]])).to.throw(error)
    })
  })

  describe('.data', function () {
    it('불변 리스트임', function () {
      expect(new That([[2, 2], [2, 2]]).data).to.be.an.instanceof(List)
    })

    it('입력한 값이 대입됨', function () {
      const data = [[1, 2], [3, 4]]
      expect(new That(data).data.toJS()).to.deep.equal(data)
    })
  })
  describe('.size', function () {
    it('정수임', function () {
      const that = new That([[0, 0], [0, 0]])
      expect(Number.isInteger(that.size)).to.be.true()
    })

    it('제대로 계산함', function () {
      const two = new That([[1, 2], [3, 4]])
      const three = new That([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

      expect(two.size).to.equal(2)
      expect(three.size).to.equal(3)
    })
  })

  describe('.name', function () {
    it('문자열임', function () {
      const that = new That([[4, 3], [2, 1]])
      expect(that.name).to.be.a('string')
    })

    it('제대로 표시함', function () {
      const two = new That([[0, 0], [1, 1]])
      const three = new That([[3, 6, 9], [6, 9, 3], [9, 3, 6]])

      expect(two.name).to.equal('2 × 2 정사각행렬')
      expect(three.name).to.equal('3 × 3 정사각행렬')
    })
  })

  describe('#toString', function () {
    it('예쁘게 출력함', function () {
      const two = new That([[1, 2], [3, 4]])
      const three = new That([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

      expect(two.toString()).to.equal('⎡ 1 2 ⎤\n⎣ 3 4 ⎦')
      expect(three.toString()).to.equal('⎡ 1 2 3 ⎤\n⎢ 4 5 6 ⎥\n⎣ 7 8 9 ⎦')
    })
  })
})
