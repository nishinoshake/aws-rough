import { toNumber } from '@/lib/validator'
import { parseInstance } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const unit = toNumber(row.unit) || 0
  const storage = toNumber(row.storage)
  const io = toNumber(row.io)

  let total = 0

  if (row.engine && row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.aurora.instance[row.engine])

    if (instance) {
      total += instance.price * MONTHLY_HOURS * unit
    }
  }

  if (storage) {
    total += priceList.aurora.storage.price * storage
  }

  if (io) {
    total += priceList.aurora.io.price * io
  }

  return total
}

export const code = `
/**
 * ざっくりこんな感じで計算しています。
 */
function calc(row, priceList) {
  const unit = toNumber(row.unit) || 0
  const storage = toNumber(row.storage)
  const io = toNumber(row.io)

  let total = 0

  if (row.engine && row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.aurora.instance[row.engine])

    if (instance) {
      total += instance.price * MONTHLY_HOURS * unit
    }
  }

  if (storage) {
    total += priceList.aurora.storage.price * storage
  }

  if (io) {
    total += priceList.aurora.io.price * io
  }

  return total
}
`
