import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const mobile = toNumber(row.mobile)
  const transfer = toNumber(row.transfer)
  const ranges = {
    request: toNumber(row.request),
    email: toNumber(row.email),
    http: toNumber(row.http)
  }

  let total = 0

  if (mobile) {
    const count = Math.max(mobile - priceList.sns.mobile.free, 0)

    if (count > 0) {
      total += count * priceList.sns.mobile.price
    }
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  Object.keys(ranges).forEach(key => {
    if (ranges[key]) {
      total += calcInRange(ranges[key], priceList.sns[key].priceRange)
    }
  })

  return total
}

export const code = `
function calc(row, priceList) {
  const mobile = toNumber(row.mobile)
  const transfer = toNumber(row.transfer)
  const ranges = {
    request: toNumber(row.request),
    email: toNumber(row.email),
    http: toNumber(row.http)
  }

  let total = 0

  if (mobile) {
    const count = Math.max(mobile - priceList.sns.mobile.free, 0)

    if (count > 0) {
      total += count * priceList.sns.mobile.price
    }
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  Object.keys(ranges).forEach(key => {
    if (ranges[key]) {
      total += calcInRange(ranges[key], priceList.sns[key].priceRange)
    }
  })

  return total
}
`
