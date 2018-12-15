import apigateway from '@/lib/calc/apigateway'
import { MONTHLY_HOURS } from '@/config/constants'

describe('apigateway', () => {
  test('API Gatewayの料金を計算できる', () => {
    const priceList = {
      apigateway: {
        request: [
          {
            beginRange: 0,
            endRange: 333000000,
            price: 0.000004
          },
          {
            beginRange: 333000000,
            endRange: 1000000000,
            price: 0.000003
          }
        ],
        cache: [
          {
            cacheMemorySizeGb: '0.5',
            price: 0.03
          },
          {
            cacheMemorySizeGb: '1.6',
            price: 0.06
          }
        ]
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
      request: 0,
      cache: 0,
      transfer: 0
    }

    expect(apigateway(emptyRow, priceList)).toBe(0)

    const row = {
      request: 500000000, // 5億
      cache: '1.6',
      transfer: 1000
    }

    const request = 333000000 * 0.000004 + 167000000 * 0.000003
    const cache = 0.06 * MONTHLY_HOURS
    const transfer = 10 * 10 + 90 * 9 + 900 * 8
    const expected = request + cache + transfer

    expect(apigateway(row, priceList)).toBe(expected)
  })
})
