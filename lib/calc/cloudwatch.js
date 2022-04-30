import { calcInRange } from '@/lib/price'
import { toNumber } from '@/lib/validator'

// アーカイブされる際にgzip圧縮される
// 圧縮率は Pricing Calculator の計算過程で使用されている係数を使用
export const STORAGE_COMPRESSION_FACTOR = 0.15

export function calc(row, priceList) {
  const metrics = toNumber(row.metrics)
  const dashboard = toNumber(row.dashboard)
  const logCollect = toNumber(row.logCollect)
  const GetMetricData = toNumber(row.GetMetricData)
  const GetMetricWidgetImage = toNumber(row.GetMetricWidgetImage)
  const otherApi = toNumber(row.otherApi)
  const standardAlarm = toNumber(row.standardAlarm)
  const highResolutionAlarm = toNumber(row.highResolutionAlarm)

  let total = 0

  if (metrics) {
    total += calcInRange(metrics, priceList.cloudwatch.metrics.priceRange)
  }

  if (dashboard) {
    total += Math.max(dashboard - priceList.cloudwatch.dashboard.free, 0) * priceList.cloudwatch.dashboard.price
  }

  if (logCollect) {
    // 収集
    total += Math.max(logCollect - priceList.cloudwatch.log.collect.free, 0) * priceList.cloudwatch.log.collect.price

    // アーカイブ
    total +=
      Math.max(logCollect - priceList.cloudwatch.log.collect.free, 0) *
      STORAGE_COMPRESSION_FACTOR *
      priceList.cloudwatch.log.store.price
  }

  if (GetMetricData) {
    total += GetMetricData * priceList.cloudwatch.api.GetMetricData.price
  }

  if (GetMetricWidgetImage) {
    total += GetMetricWidgetImage * priceList.cloudwatch.api.GetMetricWidgetImage.price
  }

  if (otherApi) {
    total += Math.max(otherApi - priceList.cloudwatch.api.other.free, 0) * priceList.cloudwatch.api.other.price
  }

  if (standardAlarm) {
    total +=
      Math.max(standardAlarm - priceList.cloudwatch.alarm.standard.free, 0) * priceList.cloudwatch.alarm.standard.price
  }

  if (highResolutionAlarm) {
    total += highResolutionAlarm * priceList.cloudwatch.alarm.highResolution.price
  }

  return total
}

export const code = `
// アーカイブされる際にgzip圧縮される
// 圧縮率は Pricing Calculator の計算過程で使用されている係数を使用
const STORAGE_COMPRESSION_FACTOR = 0.15

function calc(row, priceList) {
  const metrics = toNumber(row.metrics)
  const dashboard = toNumber(row.dashboard)
  const logCollect = toNumber(row.logCollect)
  const GetMetricData = toNumber(row.GetMetricData)
  const GetMetricWidgetImage = toNumber(row.GetMetricWidgetImage)
  const otherApi = toNumber(row.otherApi)
  const standardAlarm = toNumber(row.standardAlarm)
  const highResolutionAlarm = toNumber(row.highResolutionAlarm)

  let total = 0

  if (metrics) {
    total += calcInRange(metrics, priceList.cloudwatch.metrics.priceRange)
  }

  if (dashboard) {
    total += Math.max(dashboard - priceList.cloudwatch.dashboard.free, 0) * priceList.cloudwatch.dashboard.price
  }

  if (logCollect) {
    // 収集
    total += Math.max(logCollect - priceList.cloudwatch.log.collect.free, 0) * priceList.cloudwatch.log.collect.price

    // アーカイブ
    total +=
      Math.max(logCollect - priceList.cloudwatch.log.collect.free, 0) *
      STORAGE_COMPRESSION_FACTOR *
      priceList.cloudwatch.log.store.price
  }

  if (GetMetricData) {
    total += GetMetricData * priceList.cloudwatch.api.GetMetricData.price
  }

  if (GetMetricWidgetImage) {
    total += GetMetricWidgetImage * priceList.cloudwatch.api.GetMetricWidgetImage.price
  }

  if (otherApi) {
    total += Math.max(otherApi - priceList.cloudwatch.api.other.free, 0) * priceList.cloudwatch.api.other.price
  }

  if (standardAlarm) {
    total +=
      Math.max(standardAlarm - priceList.cloudwatch.alarm.standard.free, 0) * priceList.cloudwatch.alarm.standard.price
  }

  if (highResolutionAlarm) {
    total += highResolutionAlarm * priceList.cloudwatch.alarm.highResolution.price
  }

  return total
}
`
