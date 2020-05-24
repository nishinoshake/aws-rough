import { toNumber } from '@/lib/validator'

export function calc(row, priceList) {
  const total = ['request', 'memory'].reduce((total, name) => {
    const { price, free } = priceList.lambda[name]

    return total + price * Math.max(toNumber(row[name]) - free, 0)
  }, 0)

  return total
}

export const code = `
function calc(row, priceList) {
  const total = ['request', 'memory'].reduce((total, name) => {
    const { price, free } = priceList.lambda[name]

    return total + price * Math.max(toNumber(row[name]) - free, 0)
  }, 0)

  return total
}
`
