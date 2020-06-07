import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'
import { MONTHLY_HOURS } from '@/config/constants'

export function calc(row, priceList) {
  const mode = row.mode
  const storage = toNumber(row.storage)
  const wcu = toNumber(row.wcu)
  const rcu = toNumber(row.rcu)
  const write = toNumber(row.write)
  const read = toNumber(row.read)

  let total = 0

  if (storage) {
    total += calcInRange(storage, priceList.dynamodb.storage.priceRange)
  }

  switch (mode) {
    case 'オンデマンド': {
      if (write) {
        total += write * priceList.dynamodb.ondemand.write.price
      }
      if (read) {
        total += read * priceList.dynamodb.ondemand.read.price
      }
      break
    }
    case 'プロビジョン済み': {
      if (wcu) {
        total += calcInRange(wcu * MONTHLY_HOURS, priceList.dynamodb.provisioning.wcu.priceRange)
      }
      if (rcu) {
        total += calcInRange(rcu * MONTHLY_HOURS, priceList.dynamodb.provisioning.rcu.priceRange)
      }
      break
    }
  }

  return total
}

export const code = `
/**
 * ざっくりこんな感じで計算しています。
 */
function calc(row, priceList) {
  const mode = row.mode
  const storage = toNumber(row.storage)
  const wcu = toNumber(row.wcu)
  const rcu = toNumber(row.rcu)
  const write = toNumber(row.write)
  const read = toNumber(row.read)

  let total = 0

  if (storage) {
    total += calcInRange(storage, priceList.dynamodb.storage.priceRange)
  }

  switch (mode) {
    case 'オンデマンド': {
      if (write) {
        total += write * priceList.dynamodb.ondemand.write.price
      }
      if (read) {
        total += read * priceList.dynamodb.ondemand.read.price
      }
      break
    }
    case 'プロビジョン済み': {
      if (wcu) {
        total += calcInRange(wcu * MONTHLY_HOURS, priceList.dynamodb.provisioning.wcu.priceRange)
      }
      if (rcu) {
        total += calcInRange(rcu * MONTHLY_HOURS, priceList.dynamodb.provisioning.rcu.priceRange)
      }
      break
    }
  }

  return total
}
`
