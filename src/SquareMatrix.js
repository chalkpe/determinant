const { List, fromJS } = require('immutable')

class SquareMatrix {
  constructor (elements) {
    if (!List.isList(elements)) elements = fromJS(elements)

    if (!List.isList(elements) || !elements.every(row => List.isList(row))) {
      throw new Error('2차원 리스트가 아닙니다')
    }

    if (elements.some(row => row.size !== elements.size)) {
      throw new Error('정사각형 리스트가 아닙니다')
    }

    if (elements.some(row => row.some(e => !Number.isInteger(e)))) {
      throw new Error('2차원 정수 리스트가 아닙니다')
    }

    this.elements = elements
    this.max = [...Array(this.size)].map((_, i) =>
      Math.max(...elements.map(row => row.get(i).toString(10).length)))
  }

  get size () {
    return this.elements.size
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
    if (i < 0 || j < 0) {
      throw new Error('행렬 최소 범위를 벗어났습니다')
    }

    if (i >= this.size || j >= this.size) {
      throw new Error('행렬 최대 범위를 벗어났습니다')
    }

    return new SquareMatrix(this.elements.delete(i).map(row => row.delete(j)))
  }

  toString () {
    return this.elements.map((row, index) => {
      const border = this.getBorders(index)
      const rowString = row.map((e, i) => e.toString(10).padStart(this.max[i]))

      return [border[0], ...rowString, border[1]].join(' ')
    }).join('\n')
  }
}

export default SquareMatrix
