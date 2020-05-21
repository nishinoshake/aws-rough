import { calc } from '@/lib/calc/alb'
import { MONTHLY_HOURS } from '@/config/constants'

describe('alb', () => {
  test('albの料金を計算できる', () => {
    const priceList = {
      alb: {
        instance: {
          price: 0.02
        },
        lcu: {
          price: 0.01
        }
      }
    }

    const emptyRow = {
      unit: 0,
      lcu: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      unit: 2,
      lcu: 4
    }

    const instance = 0.02 * 2 * MONTHLY_HOURS
    const lcu = 0.01 * 4 * 2 * MONTHLY_HOURS
    const expected = instance + lcu

    expect(calc(row, priceList)).toBe(expected)
  })
})
