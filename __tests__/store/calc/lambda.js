import lambda from '../../../store/calc/lambda'

describe('lambda', () => {
  test('Lmabdaの料金を計算できる', () => {
    const priceList = {
      lambda: {
        request: {
          price: 2e-6,
          free: 1000000
        },
        memory: {
          price: 0.00001,
          free: 400000
        }
      }
    }

    const emptyRow = {
      request: 0,
      memory: 0
    }

    expect(lambda(emptyRow, priceList)).toBe(0)

    const row = {
      request: 10000000,
      memory: 1000000
    }

    const request = 2e-6 * (10000000 - 1000000)
    const memory = 0.00001 * (1000000 - 400000)
    const expected = request + memory

    expect(lambda(row, priceList)).toBe(expected)
  })
})
