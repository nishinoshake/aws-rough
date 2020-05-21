import { calc } from '@/lib/calc/fargate'

describe('fargate', () => {
  test('Fargateの料金を計算できる', () => {
    const priceList = {
      fargate: {
        cpu: { price: 0.05 },
        memory: { price: 0.005 }
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
      unit: 0,
      hours: 0,
      cpu: '',
      memory: '',
      transfer: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      unit: 2,
      hours: 732,
      cpu: 2,
      memory: 4,
      transfer: 1000
    }

    const cpu = 0.05 * 2 * 732 * 2
    const memory = 0.005 * 4 * 732 * 2
    const transfer = 10 * 10 + 90 * 9 + 900 * 8
    const expected = cpu + memory + transfer

    expect(calc(row, priceList)).toBe(expected)
  })
})
