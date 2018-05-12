import ec2 from '../../../stores/calc/ec2'
import { MONTHLY_HOURS } from '../../../stores/constants'

describe('ec2', () => {
  test('EC2の料金を計算できる', () => {
    const priceList = {
      ec2: {
        instance: [
          {
            price: 0.01,
            attributes: {
              instanceType: 't2.nano'
            }
          }
        ]
      },
      ebs: {
        gp2: {
          price: 0.1
        }
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
      instance: '',
      unit: 0,
      storage: 0,
      transfer: 0
    }

    expect(ec2(emptyRow, priceList)).toBe(0)

    const row = {
      instance: 't2.nano',
      unit: 2,
      storage: 30,
      transfer: 1000
    }

    const instance = 0.01 * MONTHLY_HOURS * 2
    const storage = 30 * 0.1 * 2
    const transfer = 10 * 10 + 90 * 9 + 900 * 8
    const expected = instance + storage + transfer

    expect(ec2(row, priceList)).toBe(expected)
  })
})
