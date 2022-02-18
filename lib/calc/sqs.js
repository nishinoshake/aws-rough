import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const queues = {
    standard: toNumber(row.standard),
    fifo: toNumber(row.fifo)
  }

  let total = 0
  let freeCredit = priceList.sqs.free

  Object.keys(queues).forEach(key => {
    const count = Math.max(queues[key] - freeCredit, 0)

    if (count > 0) {
      total += calcInRange(count, priceList.sqs[key].priceRange)
    }

    freeCredit = Math.max(freeCredit - queues[key], 0)
  })

  return total
}

export const code = `
function calc(row, priceList) {
  const queues = {
    standard: toNumber(row.standard),
    fifo: toNumber(row.fifo)
  }

  let total = 0
  let freeCredit = priceList.sqs.free

  Object.keys(queues).forEach(key => {
    const count = Math.max(queues[key] - freeCredit, 0)

    if (count > 0) {
      total += calcInRange(count, priceList.sqs[key].priceRange)
    }

    freeCredit = Math.max(freeCredit - queues[key], 0)
  })

  return total
}
`
