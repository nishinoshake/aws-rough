import elb from '../../../store/calc/elb'
import { MONTHLY_HOURS } from '../../../store/constants'

describe('elb', () => {
  test('ELBの料金を計算できる', () => {
    const priceList = {
      elb: {
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

    expect(elb(emptyRow, priceList)).toBe(0)

    const row = {
      unit: 2,
      transfer: 1000
    }

    const instance = 0.1 * MONTHLY_HOURS * 2
    const transfer = 10 * 1000
    const expected = instance + transfer

    expect(elb(row, priceList)).toBe(expected)
  })
})
