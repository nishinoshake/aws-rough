import { toNumber } from '@/lib/validator'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (unit) {
    total += priceList.clb.instance.price * unit * MONTHLY_HOURS
  }

  if (transfer) {
    total += priceList.clb.transfer.price * transfer
  }

  return total
}

export const code = ''
