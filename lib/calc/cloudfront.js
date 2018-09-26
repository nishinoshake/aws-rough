import { reduceRange } from '../price'
import { toNumber } from '../validator'

export default (row, priceList) => {
  const transfer = toNumber(row.transfer)
  const request = toNumber(row.request)

  let total = 0

  if (transfer) {
    total += reduceRange(transfer, priceList.cloudfront.transfer.external.priceRange)
  }

  if (request) {
    total += request * priceList.cloudfront.request.https.price
  }

  return total
}
