import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const hours = toNumber(row.hours)
  const cpu = toNumber(row.cpu)
  const memory = toNumber(row.memory)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (unit && hours && cpu && memory) {
    total += priceList.fargate.cpu.price * cpu * unit * hours
    total += priceList.fargate.memory.price * memory * unit * hours
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  return total
}

export const code = `
function calc(row, priceList) {
  const unit = toNumber(row.unit)
  const hours = toNumber(row.hours)
  const cpu = toNumber(row.cpu)
  const memory = toNumber(row.memory)
  const transfer = toNumber(row.transfer)

  let total = 0

  if (unit && hours && cpu && memory) {
    total += priceList.fargate.cpu.price * cpu * unit * hours
    total += priceList.fargate.memory.price * memory * unit * hours
  }

  if (transfer) {
    total += calcInRange(transfer, priceList.transfer.out.priceRange)
  }

  return total
}
`
