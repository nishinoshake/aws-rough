import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const mau = toNumber(row.mau)

  let total = 0

  if (mau) {
    total += calcInRange(Math.max(mau - priceList.cognito.mau.free, 0), priceList.cognito.mau.priceRange)
  }

  return total
}

export const code = `
function calc(row, priceList) {
  const mau = toNumber(row.mau)

  let total = 0

  if (mau) {
    total += calcInRange(Math.max(mau - priceList.cognito.mau.free, 0), priceList.cognito.mau.priceRange)
  }

  return total
}
`
