import { totalTable, totalTables } from '../../../store/calc/total'
import { usdToXXX } from '../../../store/price'

describe('total', () => {
  const usdjpy = 100

  describe('totalTable', () => {
    test('サービスの合計金額を計算できる', () => {
      const emptyTable = [
        { total: { usd: 0, jpy: 0 } },
        { total: { usd: 0, jpy: 0 } }
      ]

      expect(totalTable(emptyTable)).toEqual({
        usd: 0,
        jpy: 0
      })

      const table = [
        { total: { usd: 100, jpy: usdToXXX(100, usdjpy) } },
        { total: { usd: 200, jpy: usdToXXX(200, usdjpy) } }
      ]

      expect(totalTable(table)).toEqual({
        usd: 100 + 200,
        jpy: usdToXXX(100, usdjpy) + usdToXXX(200, usdjpy)
      })
    })
  })

  describe('totalTables', () => {
    test('各サービスの合計金額を計算できる', () => {
      const emptyTables = {
        ec2: [{ total: { usd: 0, jpy: 0 } }, { total: { usd: 0, jpy: 0 } }],
        rds: [{ total: { usd: 0, jpy: 0 } }]
      }

      expect(totalTables(emptyTables)).toEqual({
        usd: 0,
        jpy: 0
      })

      const tables = {
        ec2: [
          { total: { usd: 100, jpy: usdToXXX(100, usdjpy) } },
          { total: { usd: 200, jpy: usdToXXX(200, usdjpy) } }
        ],
        rds: [{ total: { usd: 300, jpy: usdToXXX(300, usdjpy) } }]
      }

      expect(totalTables(tables)).toEqual({
        usd: 100 + 200 + 300,
        jpy:
          usdToXXX(100, usdjpy) + usdToXXX(200, usdjpy) + usdToXXX(300, usdjpy)
      })
    })
  })
})
