import { reduceRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export default (row, priceList) => {
  const transfer = toNumber(row.transfer)
  const request = toNumber(row.request)
  const protocol = row.protocol.toLowerCase()

  let total = 0

  if (transfer) {
    total += reduceRange(transfer, priceList.cloudfront.transfer.external.priceRange)
  }

  if (request) {
    total += request * priceList.cloudfront.request[protocol].price
  }

  return total
}
