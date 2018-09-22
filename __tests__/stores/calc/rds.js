import rds from '../../../stores/calc/rds'
import { MONTHLY_HOURS } from '../../../stores/constants'

describe('rds', () => {
  test('RDSの料金を計算できる', () => {
    const priceList = {
      rds: {
        instance: [
          {
            price: 0.01,
            attributes: {
              instanceType: 'db.t2.micro'
            }
          }
        ],
        storage: {
          gp2: {
            price: 0.1
          }
        }
      }
    }
    const emptyRow = {
      instance: '',
      unit: 0,
      storage: 0
    }

    expect(rds(emptyRow, priceList)).toBe(0)

    const row = {
      instance: 'db.t2.micro',
      unit: 3,
      storage: 50
    }

    const azOptions = ['Single-AZ', 'Multi-AZ']

    const testCalcCorrectly = az => {
      const multi = az === 'Multi-AZ' ? 2 : 1
      const instance = priceList.rds.instance[0].price * MONTHLY_HOURS * row.unit * multi
      const storage = priceList.rds.storage.gp2.price * row.storage * row.unit * multi
      const expected = instance + storage

      expect(rds({ ...row, az }, priceList)).toBe(expected)
    }

    azOptions.forEach(az => testCalcCorrectly(az))
  })
})
