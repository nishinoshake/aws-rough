import dynamodb from '@/lib/calc/dynamodb'
import { MONTHLY_HOURS } from '@/config/constants'

describe('dynamodb', () => {
  test('DynamoDBの料金を計算できる', () => {
    const priceList = {
      dynamodb: {
        storage: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 25,
              price: 0
            },
            {
              beginRange: 25,
              endRange: null,
              price: 0.3
            }
          ]
        },
        wcu: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 18600,
              price: 0
            },
            {
              beginRange: 18600,
              endRange: null,
              price: 0.01
            }
          ]
        },
        rcu: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 18600,
              price: 0
            },
            {
              beginRange: 18600,
              endRange: null,
              price: 0.02
            }
          ]
        }
      }
    }

    const emptyRow = {
      storage: 0,
      wcu: 0,
      rcu: 0
    }

    expect(dynamodb(emptyRow, priceList)).toBe(0)

    const row = {
      storage: 50,
      wcu: 100,
      rcu: 200
    }

    const storage = (50 - 25) * 0.3
    const wcu = (100 * MONTHLY_HOURS - 18600) * 0.01
    const rcu = (200 * MONTHLY_HOURS - 18600) * 0.02
    const expected = storage + wcu + rcu

    expect(dynamodb(row, priceList)).toBe(expected)
  })
})
