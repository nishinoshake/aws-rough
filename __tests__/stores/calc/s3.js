import s3 from '../../../stores/calc/s3'

describe('s3', () => {
  test('S3の料金を計算できる', () => {
    const priceList = {
      s3: {
        storage: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 100,
              price: 0.5
            },
            {
              beginRange: 100,
              endRange: null,
              price: 0.4
            }
          ]
        },
        request: {
          read: {
            priceRange: [
              {
                beginRange: 0,
                endRange: null,
                price: 1e-6
              }
            ]
          },
          write: {
            priceRange: [
              {
                beginRange: 0,
                endRange: null,
                price: 1e-5
              }
            ]
          }
        }
      },
      transfer: {
        out: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 10,
              price: 10
            },
            {
              beginRange: 10,
              endRange: 100,
              price: 9
            },
            {
              beginRange: 100,
              endRange: null,
              price: 8
            }
          ]
        }
      }
    }

    const emptyRow = {
      storage: 0,
      transfer: 0,
      read: 0,
      write: 0
    }

    expect(s3(emptyRow, priceList)).toBe(0)

    const row = {
      storage: 1000,
      transfer: 1000,
      read: 1000000,
      write: 1000000
    }

    const storage = 100 * 0.5 + 900 * 0.4
    const read = 1000000 * 1e-6
    const write = 1000000 * 1e-5
    const transfer = 10 * 10 + 90 * 9 + 900 * 8
    const expected = storage + read + write + transfer

    expect(s3(row, priceList)).toBe(expected)
  })
})
