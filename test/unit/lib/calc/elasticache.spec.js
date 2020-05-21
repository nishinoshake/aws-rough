import { calc } from '@/lib/calc/elasticache'
import { MONTHLY_HOURS } from '@/config/constants'

describe('elasticache', () => {
  test('ElastiCacheの料金を計算できる', () => {
    const priceList = {
      elasticache: {
        instance: [
          {
            price: 0.026,
            instanceType: 'cache.t2.micro'
          }
        ]
      }
    }

    const emptyRow = {
      instance: '',
      unit: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      instance: 'cache.t2.micro',
      unit: 2
    }

    const expected = 0.026 * MONTHLY_HOURS * 2

    expect(calc(row, priceList)).toBe(expected)
  })
})
