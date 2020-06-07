import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'
import { parseInstance } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const storage = toNumber(row.storage)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.ec2.instance)

    if (instance) {
      total += instance.price * unit * MONTHLY_HOURS
    }
  }

  if (storage) {
    total += priceList.ebs.gp2.price * storage * (unit || 1)
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
  const unit = toNumber(row.unit)
  const storage = toNumber(row.storage)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.ec2.instance)

    if (instance) {
      total += instance.price * unit * MONTHLY_HOURS
    }
  }

  if (storage) {
    total += priceList.ebs.gp2.price * storage * (unit || 1)
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  return total
}
`
