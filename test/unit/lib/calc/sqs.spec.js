import sqs from '@/lib/calc/sqs'

describe('sqs', () => {
  test('SQSの料金を計算できる', () => {
    const priceList = {
      sqs: {
        free: 1000000,
        standard: {
          price: 4e-7
        },
        fifo: {
          price: 5e-7
        }
      }
    }

    const emptyRow = {
      standard: 0,
      fifo: 0
    }

    expect(sqs(emptyRow, priceList)).toBe(0)

    const row = {
      standard: 3000000,
      fifo: 3000000
    }

    const standard = (3000000 - 1000000) * 4e-7
    const fifo = 3000000 * 5e-7
    const expected = standard + fifo

    expect(sqs(row, priceList)).toBe(expected)
  })
})
