import route53 from '../../../lib/calc/route53'

describe('route53', () => {
  test('Route53の料金を計算できる', () => {
    const priceList = {
      route53: {
        hostzone: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 25,
              price: 0.5
            },
            {
              beginRange: 25,
              endRange: null,
              price: 0.1
            }
          ]
        },
        query: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 1000,
              price: 4e-6
            },
            {
              beginRange: 1000,
              endRange: null,
              price: 2e-6
            }
          ]
        }
      }
    }

    const emptyRow = {
      hostzone: 0,
      query: 0
    }

    expect(route53(emptyRow, priceList)).toBe(0)

    const row = {
      hostzone: 30,
      query: 10000
    }

    const hostzone = 25 * 0.5 + 5 * 0.1
    const query = 1000 * 4e-6 + (10000 - 1000) * 2e-6
    const expected = hostzone + query

    expect(route53(row, priceList)).toBe(expected)
  })
})
