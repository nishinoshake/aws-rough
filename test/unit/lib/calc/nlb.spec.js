import nlb from '@/lib/calc/nlb'
import { MONTHLY_HOURS } from '@/config/constants'

describe('nlb', () => {
  test('nlbの料金を計算できる', () => {
    const priceList = {
      nlb: {
        instance: {
          price: 0.02
        },
        lcu: {
          price: 0.03
        }
      }
    }

    const emptyRow = {
      unit: 0,
      lcu: 0
    }

    expect(nlb(emptyRow, priceList)).toBe(0)

    const row = {
      unit: 4,
      lcu: 3
    }

    const instance = 0.02 * 4 * MONTHLY_HOURS
    const lcu = 0.03 * 3 * 4 * MONTHLY_HOURS
    const expected = instance + lcu

    expect(nlb(row, priceList)).toBe(expected)
  })
})
