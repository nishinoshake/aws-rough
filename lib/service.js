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

export const parseInstance = (instanceType, instances) =>
  _.find(instances, instance => instance.attributes.instanceType === instanceType)
