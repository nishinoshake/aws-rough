import { toNumber } from '../validator'
import { parseInstance } from '../service'
import { MONTHLY_HOURS } from '../constants'

export default (row, priceList) => {
  const unit = toNumber(row.unit)

  let total = 0

  if (row.instance && unit) {
    const instance = parseInstance(row.instance, priceList.elasticache.instance)

    total += instance.price * unit * MONTHLY_HOURS
  }

  return total
}
