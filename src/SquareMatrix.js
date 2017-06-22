const { fromJS } = require('immutable')

class SquareMatrix {
  constructor (data) {
    if (!Array.isArray(data) || !data.every(row => Array.isArray(row))) {
      throw new Error('2차원 배열이 아닙니다')
    }

    if (data.some(row => row.some(e => !Number.isInteger(e)))) {
      throw new Error('2차원 정수 배열이 아닙니다')
    }

    if (data.some(row => row.length !== data.length)) {
      throw new Error('정사각형 배열이 아닙니다')
    }

    this.data = fromJS(data)
    this.size = this.data.size

    if (this.size === 1) {
      throw new Error(`${this.name}은 지원하지 않습니다`)
    }

    this.max = [...Array(this.size)].map((_, i) =>
      Math.max(...data.map(row => row[i].toString(10).length)))
  }

  get name () {
    return `${this.size} × ${this.size} 정사각행렬`
  }

  getBorders (index) {
    if (index === 0) return '⎡⎤'
    else if (index === this.size - 1) return '⎣⎦​​​'
    else return '⎢⎥'
  }

  toString () {
    return this.data.map((row, index) => {
      const border = this.getBorders(index)
      const rowString = row.map((e, i) => e.toString(10).padStart(this.max[i]))

      return [border[0], ...rowString, border[1]].join(' ')
    }).join('\n')
  }
}

module.exports = SquareMatrix
