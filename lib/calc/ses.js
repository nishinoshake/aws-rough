import { toNumber } from '@/lib/validator'

export const CHUNK_SIZE = 256

export function calc(row, priceList) {
  const sendEc2 = toNumber(row.sendEc2)
  const sendGeneral = toNumber(row.sendGeneral)
  const transfer = toNumber(row.transfer)
  const recieve = toNumber(row.recieve)
  const recieveChunk = toNumber(row.recieveChunk)
  const dedicatedIp = toNumber(row.dedicatedIp)

  let total = 0

  if (sendEc2) {
    const count = Math.max(sendEc2 - priceList.ses.send.ec2.free, 0)

    if (count > 0) {
      total += count * priceList.ses.send.ec2.price
    }
  }

  if (sendGeneral) {
    total += sendGeneral * priceList.ses.send.general.price
  }

  if (transfer) {
    total += transfer * priceList.ses.send.attachment.price
  }

  if (recieve) {
    const count = Math.max(recieve - priceList.ses.recieve.request.free, 0)

    if (count > 0) {
      total += count * priceList.ses.recieve.request.price
    }
  }

  if (recieve && recieveChunk) {
    const chunkUnit = Math.floor(recieveChunk / CHUNK_SIZE)

    if (chunkUnit) {
      total += recieve * chunkUnit * priceList.ses.recieve.chunk.price
    }
  }

  if (dedicatedIp) {
    total += dedicatedIp * priceList.ses.dedicatedIp.price
  }

  return total
}

export const code = `
/**
 * ざっくりこんな感じで計算しています。
 */
function calc(row, priceList) {
  const sendEc2 = toNumber(row.sendEc2)
  const sendGeneral = toNumber(row.sendGeneral)
  const transfer = toNumber(row.transfer)
  const recieve = toNumber(row.recieve)
  const recieveChunk = toNumber(row.recieveChunk)
  const dedicatedIp = toNumber(row.dedicatedIp)

  let total = 0

  if (sendEc2) {
    const count = Math.max(sendEc2 - priceList.ses.send.ec2.free, 0)

    if (count > 0) {
      total += count * priceList.ses.send.ec2.price
    }
  }

  if (sendGeneral) {
    total += sendGeneral * priceList.ses.send.general.price
  }

  if (transfer) {
    total += transfer * priceList.ses.send.attachment.price
  }

  if (recieve) {
    const count = Math.max(recieve - priceList.ses.recieve.request.free, 0)

    if (count > 0) {
      total += count * priceList.ses.recieve.request.price
    }
  }

  if (recieve && recieveChunk) {
    const chunkUnit = Math.floor(recieveChunk / CHUNK_SIZE)

    if (chunkUnit) {
      total += recieve * chunkUnit * priceList.ses.recieve.chunk.price
    }
  }

  if (dedicatedIp) {
    total += dedicatedIp * priceList.ses.dedicatedIp.price
  }

  return total
}
`
