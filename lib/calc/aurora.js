import { toNumber } from '@/lib/validator'
import { parseInstance } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'

export default (row, priceList) => {
  const replica = toNumber(row.replica) || 0
  const storage = toNumber(row.storage)
  const io = toNumber(row.io)

  let total = 0

  if (row.engine && row.instance) {
    const instance = parseInstance(row.instance, priceList.aurora.instance[row.engine])

    if (instance) {
      total += instance.price * MONTHLY_HOURS * (1 + replica)
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
