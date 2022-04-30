import { calc } from '@/lib/calc/cognito'

describe('cognito', () => {
  test('Cognitoの料金を計算できる', () => {
    const priceList = {
      cognito: {
        mau: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 50000,
              price: 0.0055
            },
            {
              beginRange: 50000,
              endRange: 950000,
              price: 0.0046
            },
            {
              beginRange: 950000,
              endRange: 9950000,
              price: 0.00325
            },
            {
              beginRange: 9950000,
              endRange: null,
              price: 0.0025
            }
          ],
          free: 50000
        }
      }
    }

    const emptyRow = {
      mau: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      mau: 20000000
    }

    const mau = 50000 * 0.0055 + 900000 * 0.0046 + 9000000 * 0.00325 + 10000000 * 0.0025
    const expected = mau

    expect(calc(row, priceList)).toBe(expected)
  })
})
