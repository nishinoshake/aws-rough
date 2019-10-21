import { reduceRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export default (row, priceList) => {
  const mobile = toNumber(row.mobile)
  const transfer = toNumber(row.transfer)
  const rangeKeys = {
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
    total += reduceRange(transfer, priceList.transfer.out.priceRange)
  }

  Object.keys(rangeKeys).forEach(key => {
    if (rangeKeys[key]) {
      total += reduceRange(rangeKeys[key], priceList.sns[key].priceRange)
    }
  })

  return total
}
