import { generateHash } from '@/lib/hash'

describe('hash', () => {
  describe('generateHash', () => {
    test('デフォルトは20文字で16進のハッシュを返す', () => {
      expect(generateHash('hogehoge')).toMatch(/[0-9a-f]{20}/)
    })

    test('指定した文字数で16進のハッシュを返す', () => {
      expect(generateHash('fugafuga', 7)).toMatch(/[0-9a-f]{7}/)
    })

    test('2回実行しても結果が同じ', () => {
      expect(generateHash('And Your Bird Can Sing')).toBe(generateHash('And Your Bird Can Sing'))
    })
  })
})
