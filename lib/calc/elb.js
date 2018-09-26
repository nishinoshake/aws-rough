import { toNumber } from '@/lib/validator'
import { MONTHLY_HOURS } from '@/config/constants'

export default (row, priceList) => {
  const unit = toNumber(row.unit)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (unit) {
    total += priceList.elb.instance.price * unit * MONTHLY_HOURS
  }

  if (transfer) {
    total += priceList.elb.transfer.price * transfer
  }

  return total
}
