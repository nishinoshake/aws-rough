import { toNumber, isValidNumber } from '../../stores/validator'

describe('validator', () => {
  describe('isValidNumber', () => {
    test('正の整数の入力はOK', () => {
      expect(isValidNumber(10)).toBe(true)
    })
    test('正の浮動小数の入力はOK', () => {
      expect(isValidNumber(10.11)).toBe(true)
    })
    test('0の入力はOK', () => {
      expect(isValidNumber(0)).toBe(true)
    })
    test('負の整数の入力はNG', () => {
      expect(isValidNumber(-10)).toBe(false)
    })
    test('文字列の入力はNG', () => {
      expect(isValidNumber('hoge')).toBe(false)
    })
    test('nullの入力はNG', () => {
      expect(isValidNumber(null)).toBe(false)
    })
  })

  describe('toNumber', () => {
    test('正の整数の入力はそのまま返す', () => {
      expect(toNumber(10)).toBe(10)
    })
    test('正の浮動小数の入力はそのまま返す', () => {
      expect(toNumber(10.11)).toBe(10.11)
    })
    test('負の整数の入力は0を返す', () => {
      expect(toNumber(-10)).toBe(0)
    })
    test('文字列の入力は0を返す', () => {
      expect(toNumber('hoge')).toBe(0)
    })
    test('空文字の入力は0を返す', () => {
      expect(toNumber('')).toBe(0)
    })
    test('nullの入力は0を返す', () => {
      expect(toNumber(null)).toBe(0)
    })
  })
})
