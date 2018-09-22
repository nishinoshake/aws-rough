import { toNumber } from '../validator'
import { parseInstance } from '../service'
import { MONTHLY_HOURS } from '../constants'

export default (row, priceList) => {
  const unit = toNumber(row.unit)
  const storage = toNumber(row.storage)
  const multi = row.az && row.az === 'Multi-AZ' ? 2 : 1

  let total = 0

  if (row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.rds.instance)

    total += instance.price * MONTHLY_HOURS * unit * multi
  }

  if (storage) {
    total += priceList.rds.storage.gp2.price * storage * (unit || 1) * multi
  }

  return total
}
