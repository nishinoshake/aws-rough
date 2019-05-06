import natgw from '@/lib/calc/natgw'
import { MONTHLY_HOURS } from '@/config/constants'

describe('natgw', () => {
  test('NAT Gatewayの料金を計算できる', () => {
    const priceList = {
      natgw: {
        instance: {
          price: 0.062
        },
        processedData: {
          price: 0.058
        }
      }
    }

    const emptyRow = {
      unit: 0,
      processedData: 0
    }

    expect(natgw(emptyRow, priceList)).toBe(0)

    const row = {
      unit: 2,
      processedData: 1000
    }

    const instance = 0.062 * MONTHLY_HOURS * 2
    const processedData = 0.058 * 1000
    const expected = instance + processedData

    expect(natgw(row, priceList)).toBe(expected)
  })
})
