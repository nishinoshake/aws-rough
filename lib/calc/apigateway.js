import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'
import { parseCacheMemory } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const request = toNumber(row.request)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (request) {
    total += calcInRange(request, priceList.apigateway.request.priceRange)
  }

  if (row.cache) {
    const cacheMemory = parseCacheMemory(row.cache, priceList.apigateway.cache)

    if (cacheMemory) {
      total += cacheMemory.price * MONTHLY_HOURS
    }
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  return total
}
export const code = `
/**
 * ざっくりこんな感じで計算しています。
 */
function calc(row, priceList) {
  const request = toNumber(row.request)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (request) {
    total += calcInRange(request, priceList.apigateway.request.priceRange)
  }

  if (row.cache) {
    const cacheMemory = parseCacheMemory(row.cache, priceList.apigateway.cache)

    if (cacheMemory) {
      total += cacheMemory.price * MONTHLY_HOURS
    }
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  return total
}
`
