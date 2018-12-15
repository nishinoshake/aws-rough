import { reduceRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'
import { parseCacheMemory } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'

export default (row, priceList) => {
  const request = toNumber(row.request)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (request) {
    total += reduceRange(request, priceList.apigateway.request)
  }

  if (row.cache) {
    const cacheMemory = parseCacheMemory(row.cache, priceList.apigateway.cache)

    if (cacheMemory) {
      total += cacheMemory.price * MONTHLY_HOURS
    }
  }

  if (transfer) {
    total += reduceRange(transfer, priceList.transfer.out.priceRange)
  }

  return total
}
