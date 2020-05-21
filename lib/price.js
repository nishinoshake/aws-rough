import { SUSHI, MAX_PRICE } from '@/config/constants'

export const greaterThanMaxPrice = num => num > MAX_PRICE

export const addComma = num => {
  return Math.floor(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatPrice = price => {
  if (greaterThanMaxPrice(price)) {
    return SUSHI
  }

  return addComma(price)
}

export const usdToXXX = (usd, xxx) => Math.floor(usd * xxx)

export const calcInRange = (val, ranges) =>
  ranges.reduce((total, range) => {
    // 範囲より小さい
    if (val < range.beginRange) {
      return total
    }

    const diff = (() => {
      // 上限なし
      if (!range.endRange) {
        return val - range.beginRange
      }

      // 範囲より大きい
      if (val > range.endRange) {
        return range.endRange - range.beginRange
      }

      // 範囲内
      return val - range.beginRange
    })()

    return total + diff * range.price
  }, 0)
