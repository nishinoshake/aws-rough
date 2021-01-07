import { calc } from '@/lib/calc/sqs'

describe('sqs', () => {
  test('SQSの料金を計算できる', () => {
    const priceList = {
      sqs: {
        free: 1000000,
        standard: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 100000000000,
              price: 4e-7
            },
            {
              beginRange: 100000000000,
              endRange: 200000000000,
              price: 3.5e-7
            },
            {
              beginRange: 200000000000,
              endRange: null,
              price: 3.2e-7
            }
          ]
        },
        fifo: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 100000000000,
              price: 5e-7
            },
            {
              beginRange: 100000000000,
              endRange: 200000000000,
              price: 4.6e-7
            },
            {
              beginRange: 200000000000,
              endRange: null,
              price: 4.2e-7
            }
          ]
        }
      }
    }

    const emptyRow = {
      standard: 0,
      fifo: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      standard: 3000000,
      fifo: 3000000
    }

    const standard = (3000000 - 1000000) * 4e-7
    const fifo = 3000000 * 5e-7
    const expected = standard + fifo

    expect(calc(row, priceList)).toBe(expected)
  })
})
