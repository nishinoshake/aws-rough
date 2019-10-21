import sns from '@/lib/calc/sns'

describe('sns', () => {
  test('SNSの料金を計算できる', () => {
    const priceList = {
      sns: {
        request: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 1000000,
              price: 0
            },
            {
              beginRange: 1000000,
              endRange: null,
              price: 5e-7
            }
          ]
        },
        mobile: {
          price: 5e-7,
          free: 1000000
        },
        http: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 100000,
              price: 0
            },
            {
              beginRange: 100000,
              endRange: null,
              price: 6e-7
            }
          ]
        },
        email: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 1000,
              price: 0
            },
            {
              beginRange: 1000,
              endRange: null,
              price: 0.00002
            }
          ]
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
      mobile: 0,
      transfer: 0,
      request: 0,
      email: 0,
      http: 0
    }

    expect(sns(emptyRow, priceList)).toBe(0)

    const row = {
      mobile: 2000000,
      transfer: 1000,
      request: 2000000,
      email: 2000000,
      http: 2000000
    }

    const mobile = (2000000 - 1000000) * 5e-7
    const transfer = 10 * 10 + 90 * 9 + 900 * 8
    const request = 1000000 * 0 + (2000000 - 1000000) * 5e-7
    const email = (2000000 - 1000) * 0.00002
    const http = (2000000 - 100000) * 6e-7
    const expected = mobile + transfer + request + email + http

    expect(sns(row, priceList)).toBe(expected)
  })
})
