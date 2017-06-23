const { List, fromJS } = require('immutable')

class SquareMatrix {
  constructor (data) {
    if (!List.isList(data)) data = fromJS(data)

    if (!List.isList(data) || !data.every(row => List.isList(row))) {
      throw new Error('2차원 리스트가 아닙니다')
    }

    if (data.some(row => row.some(e => !Number.isInteger(e)))) {
      throw new Error('2차원 정수 리스트가 아닙니다')
    }

    if (data.some(row => row.size !== data.size)) {
      throw new Error('정사각형 리스트가 아닙니다')
    }

    this.data = data
    this.size = data.size

    if (this.size === 1) {
      // throw new Error(`${this.name}은 지원하지 않습니다`)
    }

    this.max = [...Array(this.size)].map((_, i) =>
      Math.max(...data.map(row => row.get(i).toString(10).length)))
  }

  get name () {
    return `${this.size} × ${this.size} 정사각행렬`
  }

  getBorders (index) {
    const first = index === 0
    const last = index === this.size - 1

    if (first && last) return '[]'
    else if (first) return '⎡⎤'
    else if (last) return '⎣⎦'
    else return '⎢⎥'
  }

  getMinor (i, j) {
    return new SquareMatrix(this.data.delete(i).map(row => row.delete(j)))
  }

  toString () {
    return this.data.map((row, index) => {
      const border = this.getBorders(index)
      const rowString = row.map((e, i) => e.toString(10).padStart(this.max[i]))

      return [border[0], ...rowString, border[1]].join(' ')
    }).join('\n')
  }
}

export default SquareMatrix
