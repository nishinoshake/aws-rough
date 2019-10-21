import { toNumber } from '@/lib/validator'

export default (row, priceList) => {
  const queueTypes = {
    standard: toNumber(row.standard),
    fifo: toNumber(row.fifo)
  }

  let total = 0
  let freeCredit = priceList.sqs.free

  Object.keys(queueTypes).forEach(type => {
    if (queueTypes[type]) {
      const count = Math.max(queueTypes[type] - freeCredit, 0)

      if (count > 0) {
        total += count * priceList.sqs[type].price
      }

      freeCredit = Math.max(freeCredit - queueTypes[type], 0)
    }
  })

  return total
}
