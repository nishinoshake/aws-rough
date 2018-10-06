import _ from 'lodash'

export const getService = (key, serviceConfig) => _.find(serviceConfig, { key })

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
    return {
      ...result,
      [service.key]: [getDefaultTable(service.key, serviceConfig)]
    }
  }, {})
}

export const getDefaultColumnValue = (serviceKey, columnKey, serviceConfig) => {
  const service = getService(serviceKey, serviceConfig)

  if (service) {
    const column = _.find(service.table, { key: columnKey })
    if (column && column.default) {
      return column.default
    }
  }

  return null
}

export const parseInstance = (instanceType, instances) =>
  _.find(instances, instance => instance.instanceType === instanceType)

export const minifyTable = tables => {
  const obj = {}

  Object.keys(tables).forEach(name => {
    obj[name] = tables[name].map(table => _.omit(table, ['total']))
  })

  return obj
}
