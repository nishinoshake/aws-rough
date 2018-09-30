import aurora from '@/lib/calc/aurora'
import { MONTHLY_HOURS } from '@/config/constants'

describe('aurora', () => {
  test('Auroraの料金を計算できる', () => {
    const priceList = {
      aurora: {
        instance: {
          MySQL: [
            {
              price: 0.35,
              instanceType: 'db.r4.large'
            }
          ]
        },
        storage: {
          price: 0.12
        },
        io: {
          price: 2.4e-7
        }
      }
    }
    const emptyRow = {
      engine: 'MySQL',
      instance: '',
      replica: 0,
      storage: 0,
      io: 0
    }

    expect(aurora(emptyRow, priceList)).toBe(0)

    const row = {
      engine: 'MySQL',
      instance: 'db.r4.large',
      replica: 2,
      storage: 100,
      io: 10000000
    }

    const instance = priceList.aurora.instance.MySQL[0].price * MONTHLY_HOURS * (1 + row.replica)
    const storage = priceList.aurora.storage.price * row.storage
    const io = priceList.aurora.io.price * row.io
    const expected = instance + storage + io

    expect(aurora(row, priceList)).toBe(expected)
  })
})
