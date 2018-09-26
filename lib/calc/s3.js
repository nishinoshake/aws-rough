import { reduceRange } from '../price'
import { toNumber } from '../validator'

export default (row, priceList) => {
  const storage = toNumber(row.storage)
  const transfer = toNumber(row.transfer)
  const read = toNumber(row.read)
  const write = toNumber(row.write)

  let total = 0

  if (storage) {
    total += reduceRange(storage, priceList.s3.storage.priceRange)
  }

  if (transfer) {
    total += reduceRange(transfer, priceList.transfer.out.priceRange)
  }

  if (read) {
    total += reduceRange(read, priceList.s3.request.read.priceRange)
  }

  if (write) {
    total += reduceRange(write, priceList.s3.request.write.priceRange)
  }

  return total
}
