import { toNumber } from '@/lib/validator'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const lcu = toNumber(row.lcu)

  let total = 0

  if (unit) {
    total += priceList.alb.instance.price * unit * MONTHLY_HOURS

    if (lcu) {
      total += priceList.alb.lcu.price * lcu * unit * MONTHLY_HOURS
    }
  }

  return total
}

export const code = `
/**
 * ALBの計算例
 * 
 * ざっくりこんな感じで計算しています。
 */
function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const lcu = toNumber(row.lcu)

  let total = 0

  if (unit) {
    total += priceList.alb.instance.price * unit * MONTHLY_HOURS

    if (lcu) {
      total += priceList.alb.lcu.price * lcu * unit * MONTHLY_HOURS
    }
  }

  return total
}
`
