import { toNumber } from '@/lib/validator'
import { parseInstance } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const storage = toNumber(row.storage)
  const multi = row.az && row.az === 'Multi-AZ' ? 2 : 1

  let total = 0

  if (row.engine && row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.rds.instance[row.engine])

    if (instance) {
      total += instance.price * MONTHLY_HOURS * unit * multi
    }
  }

  if (storage) {
    total += priceList.rds.storage.gp2.price * storage * (unit || 1) * multi
  }

  return total
}

export const code = `
function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const storage = toNumber(row.storage)
  const multi = row.az && row.az === 'Multi-AZ' ? 2 : 1

  let total = 0

  if (row.engine && row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.rds.instance[row.engine])

    if (instance) {
      total += instance.price * MONTHLY_HOURS * unit * multi
    }
  }

  if (storage) {
    total += priceList.rds.storage.gp2.price * storage * (unit || 1) * multi
  }

  return total
}
`
