import { List, fromJS } from 'immutable'

class SquareMatrix {
  constructor (elements) {
    if (!List.isList(elements)) elements = fromJS(elements)
    if (!List.isList(elements) || elements.some(row => !List.isList(row))) {
      throw new Error('2차원 리스트가 아닙니다')
    }

    if (elements.some(row => row.size !== elements.size)) {
      throw new Error('정사각형 리스트가 아닙니다')
    }

    if (elements.some(row => row.some(e => !Number.isInteger(e)))) {
      throw new Error('2차원 정수 리스트가 아닙니다')
    }

    this.elements = elements

    // .toString()에서 요소 정렬할 때 사용함
    this.max = [...Array(this.size)].map((v, i) =>
      Math.max(...this.elements.map(row => row.get(i).toString(10).length)))
  }

  get size () {
    return this.elements.size
  }

  get name () {
    return `${this.size} × ${this.size} 정사각행렬`
  }

  checkIndex (...indices) {
    for (const index of indices) {
      if (index < 0) throw new Error('행렬 최소 범위를 벗어났습니다')
      if (index >= this.size) throw new Error('행렬 최대 범위를 벗어났습니다')
    }

    return true
  }

  getBorders (index) {
    const first = index === 0
    const last = index === this.size - 1

    return first && last ? '[]' : first ? '⎡⎤' : last ? '⎣⎦' : '⎢⎥'
  }

  getMinor (i, j) {
    this.checkIndex(i, j)
    return new SquareMatrix(this.elements.delete(i).map(row => row.delete(j)))
  }

  setColumn (index, column) {
    this.checkIndex(index)

    if (!List.isList(column)) column = fromJS(column)
    if (!List.isList(column) || column.some(c => !Number.isInteger(c))) throw new Error('열벡터가 아닙니다')

    if (this.size !== column.size) {
      throw new Error('열벡터의 크기가 행렬과 일치하지 않습니다')
    }

    return new SquareMatrix(this.elements.map((row, i) => row.set(index, column.get(i))))
  }

  toString () {
    return this.elements.map((row, index) => {
      const border = this.getBorders(index)
      const rowString = row.map((e, i) => e.toString(10).padStart(this.max[i]))

      return [border[0], ...rowString, border[1]].join(' ')
    }).join('\n')
  }
}

// 정사각행렬
export default SquareMatrix
