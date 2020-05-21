import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const hostzone = toNumber(row.hostzone)
  const query = toNumber(row.query)

  let total = 0

  if (hostzone) {
    total += calcInRange(hostzone, priceList.route53.hostzone.priceRange)
  }

  if (query) {
    total += calcInRange(query, priceList.route53.query.priceRange)
  }

  return total
}

export const code = `
function (row, priceList) {
  const hostzone = toNumber(row.hostzone)
  const query = toNumber(row.query)

  let total = 0

  if (hostzone) {
    total += calcInRange(hostzone, priceList.route53.hostzone.priceRange)
  }

  if (query) {
    total += calcInRange(query, priceList.route53.query.priceRange)
  }

  return total
}
`
