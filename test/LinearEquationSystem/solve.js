/* eslint-env node, mocha */

const repeat = (count, supplier) => [...Array(count)].map(supplier)
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1))

function create (n) {
  const variables = repeat(n, () => random(-10, 10))
  const equations = repeat(n, () => {
    const coefficients = repeat(n, () => random(-3, 3))
    const terms = coefficients.map((c, i) => c * variables[i])

    return [coefficients, terms.reduce((a, b) => a + b)]
  })

  return { input: equations, expected: variables }
}

export default ({ expect, LinearEquation, LinearEquationSystem }) => function () {
  const data = [
    {
      input: [
        [[2, 3, 1], 4],
        [[3, 0, -1], -3],
        [[1, -2, 2], -5]
      ],

      expected: [-1, 2, 0]
    },

    {
      input: [
        [[1, 2, 2], 1],
        [[2, -1, 1], 3],
        [[4, 1, 2], 0]
      ],

      expected: [-1, -2, 3]
    },

    ...repeat(14, () => create(random(2, 5)))
  ]

  it('해결함', function () {
    data.forEach(({ input, expected }) => {
      const equations = input.map(v => new LinearEquation(...v))
      const solved = new LinearEquationSystem(equations).solve()

      expect(solved.every(([a, b], i) => expected[i] * b === a)).to.be.true()
    })
  })
}
