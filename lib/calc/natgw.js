import { toNumber } from '@/lib/validator'
import { MONTHLY_HOURS } from '@/config/constants'

export default (row, priceList) => {
  const unit = toNumber(row.unit)
  const processedData = toNumber(row.processedData)

  let total = 0

  if (unit) {
    total += priceList.natgw.instance.price * unit * MONTHLY_HOURS

    if (processedData) {
      total += priceList.natgw.processedData.price * processedData
    }
  }

  return total
}
