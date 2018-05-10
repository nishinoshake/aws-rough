import * as calc from './calc'
import { getDefaultTable, getDefaultTables } from './service'
import { usdToXXX } from './price'

export default {
  state: {
    price: {},
    fx: {},
    tables: {},
    total: { usd: 0, jpy: 0 },
    isLoaded: false,
    error: {}
  },
  setInitialTables (serviceConfig) {
    this.state.tables = getDefaultTables(serviceConfig)
  },
  fetchAll ({ fetchPrice, fetchFx }) {
    return Promise.all([fetchPrice(), fetchFx()])
      .then(values => {
        this.state.price = values[0]
        this.state.fx = values[1]
        this.state.isLoaded = true
      })
      .catch(error => {
        this.state.error = {
          ...this.state.error,
          fetch: '通信エラーが発生しました'
        }
      })
  },
  append ({ serviceKey }, serviceConfig) {
    this.state.tables[serviceKey].push(
      getDefaultTable(serviceKey, serviceConfig)
    )
  },
  update ({ serviceKey, index, columnKey, value }) {
    const row = {
      ...this.state.tables[serviceKey][index],
      [columnKey]: value
    }
    const usd = calc[serviceKey](row, this.state.price)
    const jpy = usdToXXX(usd, this.state.fx.usdjpy)

    this.state.tables[serviceKey].splice(index, 1, {
      ...row,
      total: { usd, jpy }
    })

    this.updateTotal()
  },
  updateTotal () {
    this.state.total = calc.totalTables(this.state.tables)
  },
  remove ({ serviceKey, index }, serviceConfig) {
    if (this.state.tables[serviceKey].length === 1) {
      this.state.tables[serviceKey].splice(
        index,
        1,
        getDefaultTable(serviceKey, serviceConfig)
      )
    } else {
      this.state.tables[serviceKey].splice(index, 1)
    }

    this.updateTotal()
  }
}
