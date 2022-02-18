import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const transfer = toNumber(row.transfer)
  const request = toNumber(row.request)
  const protocol = row.protocol.toLowerCase()

  let total = 0

  if (transfer) {
    total += calcInRange(transfer, priceList.cloudfront.transfer.external.priceRange)
  }

  if (request) {
    total += request * priceList.cloudfront.request[protocol].price
  }

  return total
}

export const code = `
function calc(row, priceList) {
  const transfer = toNumber(row.transfer)
  const request = toNumber(row.request)
  const protocol = row.protocol.toLowerCase()

  let total = 0

  if (transfer) {
    total += calcInRange(transfer, priceList.cloudfront.transfer.external.priceRange)
  }

  if (request) {
    total += request * priceList.cloudfront.request[protocol].price
  }

  return total
}
`
