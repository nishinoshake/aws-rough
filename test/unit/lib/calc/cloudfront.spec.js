import { calc } from '@/lib/calc/cloudfront'

describe('cloudfront', () => {
  test('CloudFrontの料金を計算できる', () => {
    const priceList = {
      cloudfront: {
        transfer: {
          external: {
            priceRange: [
              {
                beginRange: 0,
                endRange: 100,
                price: 0.14
              },
              {
                beginRange: 100,
                endRange: null,
                price: 0.13
              }
            ]
          }
        },
        request: {
          http: {
            price: 0.0015
          },
          https: {
            price: 0.002
          }
        }
      }
    }

    const emptyRow = {
      protocol: 'HTTPS',
      transfer: 0,
      request: 0
    }

    expect(calc(emptyRow, priceList)).toEqual(0)

    const row = {
      protocol: 'HTTPS',
      transfer: 1000,
      request: 10000
    }

    const transfer = 100 * 0.14 + (1000 - 100) * 0.13
    const request = 10000 * 0.002
    const expected = transfer + request

    expect(calc(row, priceList)).toEqual(expected)
  })
})
