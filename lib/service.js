import find from 'lodash/find'
import omit from 'lodash/omit'

export const getService = (key, serviceConfig) => find(serviceConfig, { key })

export const getDefaultTable = (key, serviceConfig) => {
  return getService(key, serviceConfig).table.reduce(
    (table, row) => ({
      ...table,
      [row.key]: row.hasOwnProperty('default') ? row.default : ''
    }),
    { total: { usd: 0, jpy: 0 } }
  )
}

export const getDefaultTables = serviceConfig => {
  return serviceConfig.reduce((result, service) => {
    if (service.table) {
      return {
        ...result,
        [service.key]: [getDefaultTable(service.key, serviceConfig)]
      }
    } else {
      return result
    }
  }, {})
}

export const getDefaultColumnValue = (serviceKey, columnKey, serviceConfig) => {
  const service = getService(serviceKey, serviceConfig)

  if (service) {
    const column = find(service.table, { key: columnKey })
    if (column && column.default) {
      return column.default
    }
  }

  return null
}

export const parseInstance = (instanceType, instances) =>
  find(instances, instance => instance.instanceType === instanceType)

export const parseCacheMemory = (cacheMemorySizeGb, cacheMemories) =>
  find(cacheMemories, cacheMemory => cacheMemory.cacheMemorySizeGb === cacheMemorySizeGb)

export const minifyTable = tables => {
  const obj = {}

  Object.keys(tables).forEach(name => {
    obj[name] = tables[name].map(table => omit(table, ['total']))
  })

  return obj
}
