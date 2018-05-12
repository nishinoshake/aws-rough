import { SUSHI, MAX_PRICE } from '../../stores/constants'
import {
  greaterThanMaxPrice,
  formatPrice,
  usdToXXX,
  reduceRange
} from '../../stores/price'

describe('price', () => {
  describe('greaterThanMaxPrice', () => {
    test('上限金額にはtrueを返す', () => {
      expect(greaterThanMaxPrice(MAX_PRICE + 1)).toBe(true)
    })
    test('上限未満にはfalseを返す', () => {
      expect(greaterThanMaxPrice(1000)).toBe(false)
    })
  })

  describe('formatPrice', () => {
    test('上限金額を越えたら寿司を返す', () => {
      expect(formatPrice(MAX_PRICE + 1)).toBe(SUSHI)
    })
    test('上限未満にはコンマで区切った価格を返す', () => {
      expect(formatPrice(1000000)).toBe('1,000,000')
    })
  })

  describe('usdToXXX', () => {
    test('USDをJPYに変換して端数は切り捨てる', () => {
      const usd = 10.223
      const usdjpy = 103.02
      const expected = Math.floor(usd * usdjpy) // 1053.17346 => 1053

      expect(usdToXXX(usd, usdjpy)).toBe(expected)
    })
  })

  describe('reduceRange', () => {
    test('料金のレンジを計算できる', () => {
      const ranges = [
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

      expect(reduceRange(0, ranges)).toBe(0)

      const r0 = 10 * 10
      const r1 = (100 - 10) * 9
      const r2 = (1000 - 100) * 8
      const expected = r0 + r1 + r2

      expect(reduceRange(1000, ranges)).toBe(expected)
    })
  })
})
