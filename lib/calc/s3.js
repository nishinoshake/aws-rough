import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const storage = toNumber(row.storage)
  const transfer = toNumber(row.transfer)
  const read = toNumber(row.read)
  const write = toNumber(row.write)

  let total = 0

  if (storage) {
    total += calcInRange(storage, priceList.s3.storage.priceRange)
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  if (read) {
    total += calcInRange(read, priceList.s3.request.read.priceRange)
  }

  if (write) {
    total += calcInRange(write, priceList.s3.request.write.priceRange)
  }

  return total
}

export const code = `
/**
 * ざっくりこんな感じで計算しています。
 */
function calc(row, priceList) {
  const storage = toNumber(row.storage)
  const transfer = toNumber(row.transfer)
  const read = toNumber(row.read)
  const write = toNumber(row.write)

  let total = 0

  if (storage) {
    total += calcInRange(storage, priceList.s3.storage.priceRange)
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  if (read) {
    total += calcInRange(read, priceList.s3.request.read.priceRange)
  }

  if (write) {
    total += calcInRange(write, priceList.s3.request.write.priceRange)
  }

  return total
}
`
