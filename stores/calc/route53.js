import { reduceRange } from '../price'
import { toNumber } from '../validator'

export default (row, priceList) => {
  const hostzone = toNumber(row.hostzone)
  const query = toNumber(row.query)

  let total = 0

  if (hostzone) {
    total += reduceRange(hostzone, priceList.route53.hostzone.priceRange)
  }

  if (query) {
    total += reduceRange(query, priceList.route53.query.priceRange)
  }

  return total
}
