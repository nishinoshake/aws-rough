import { toNumber } from '../validator'

export default (row, priceList) => {
  const total = ['request', 'memory'].reduce((total, name) => {
    const { price, free } = priceList.lambda[name]

    return total + price * Math.max(toNumber(row[name]) - free, 0)
  }, 0)

  return total
}
