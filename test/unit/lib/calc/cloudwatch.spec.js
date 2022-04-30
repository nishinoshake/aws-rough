import { calc, STORAGE_COMPRESSION_FACTOR } from '@/lib/calc/cloudwatch'

describe('cloudwatch', () => {
  test('CloudWatchの料金を計算できる', () => {
    const priceList = {
      cloudwatch: {
        metrics: {
          priceRange: [
            {
              beginRange: 0,
              endRange: 10000,
              price: 0.3
            },
            {
              beginRange: 10000,
              endRange: 250000,
              price: 0.1
            },
            {
              beginRange: 250000,
              endRange: 1000000,
              price: 0.05
            },
            {
              beginRange: 1000000,
              endRange: null,
              price: 0.02
            }
          ]
        },
        api: {
          GetMetricData: {
            price: 0.00001
          },
          GetMetricWidgetImage: {
            price: 0.00002
          },
          other: {
            price: 0.00001,
            free: 1000000
          }
        },
        alarm: {
          standard: {
            price: 0.1,
            free: 10
          },
          highResolution: {
            price: 0.3
          }
        },
        log: {
          collect: {
            price: 0.76,
            free: 5
          },
          store: {
            price: 0.033
          }
        },
        dashboard: {
          price: 3,
          free: 3
        }
      }
    }

    const emptyRow = {
      metrics: 0,
      dashboard: 0,
      logCollect: 0,
      GetMetricData: 0,
      GetMetricWidgetImage: 0,
      otherApi: 0,
      standardAlarm: 0,
      highResolutionAlarm: 0
    }

    expect(calc(emptyRow, priceList)).toBe(0)

    const row = {
      metrics: 2000000,
      dashboard: 50,
      logCollect: 300,
      GetMetricData: 300000,
      GetMetricWidgetImage: 300000,
      otherApi: 320000000,
      standardAlarm: 500,
      highResolutionAlarm: 700
    }

    const metrics = 10000 * 0.3 + 240000 * 0.1 + 750000 * 0.05 + 1000000 * 0.02
    const dashboard = (50 - 3) * 3
    const logCollect = (300 - 5) * 0.76 + (300 - 5) * STORAGE_COMPRESSION_FACTOR * 0.033
    const GetMetricData = 300000 * 0.00001
    const GetMetricWidgetImage = 300000 * 0.00002
    const otherApi = (320000000 - 1000000) * 0.00001
    const standardAlarm = (500 - 10) * 0.1
    const highResolutionAlarm = 700 * 0.3
    const expected =
      metrics +
      dashboard +
      logCollect +
      GetMetricData +
      GetMetricWidgetImage +
      otherApi +
      standardAlarm +
      highResolutionAlarm

    expect(calc(row, priceList)).toBe(expected)
  })
})
