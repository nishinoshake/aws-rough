import clb from '@/lib/calc/clb'
import { MONTHLY_HOURS } from '@/config/constants'

describe('clb', () => {
  test('clbの料金を計算できる', () => {
    const priceList = {
      clb: {
        instance: {
          price: 0.1
        },
        transfer: {
          price: 10
        }
      }
    }

    const emptyRow = {
      unit: 0,
      transfer: 0
    }

    expect(clb(emptyRow, priceList)).toBe(0)

    const row = {
      unit: 2,
      transfer: 1000
    }

    const instance = 0.1 * MONTHLY_HOURS * 2
    const transfer = 10 * 1000
    const expected = instance + transfer

    expect(clb(row, priceList)).toBe(expected)
  })
})
