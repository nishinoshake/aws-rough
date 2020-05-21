import { calc, CHUNK_SIZE } from '@/lib/calc/ses'

describe('ses', () => {
  test('SESの料金を計算できる', () => {
    const priceList = {
      ses: {
        send: {
          ec2: {
            price: 0.0001,
            free: 62000
          },
          general: {
            price: 0.0001
          },
          attachment: {
            price: 0.12
          }
        },
        recieve: {
          request: {
            price: 0.0001,
            free: 1000
          },
          chunk: {
            price: 0.00009
          }
        },
        dedicatedIp: {
          price: 24.95
        }
      }
    }

    const emptyRow = {
      sendEc2: 0,
      sendGeneral: 0,
      transfer: 0,
      recieve: 0,
      recieveChunk: 0,
      dedicatedIp: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      sendEc2: 3000000,
      sendGeneral: 4000000,
      transfer: 1000,
      recieve: 2000000,
      recieveChunk: 512,
      dedicatedIp: 3
    }

    const sendEc2 = (3000000 - 62000) * 0.0001
    const sendGeneral = 4000000 * 0.0001
    const transfer = 1000 * 0.12
    const recieve = (2000000 - 1000) * 0.0001
    const recieveChunk = Math.floor(512 / CHUNK_SIZE) * 2000000 * 0.00009
    const dedicatedIp = 3 * 24.95
    const expected = sendEc2 + sendGeneral + transfer + recieve + recieveChunk + dedicatedIp

    expect(calc(row, priceList)).toBe(expected)
  })
})
