import Vuex from 'vuex'
import * as calc from '@/lib/calc'
import { getDefaultTable, getDefaultTables } from '@/lib/service'
import { usdToXXX } from '@/lib/price'
import serviceConfig from '@/config/service'
import { fetchPrice, fetchFx } from '@/api'

// すべてをAction経由にした方が見通しは良さそうですが、
// 冗長過ぎるので、非同期なものだけdispatchして、他は直接commit。

const store = () =>
  new Vuex.Store({
    state: {
      price: {},
      fx: {},
      tables: {},
      total: { usd: 0, jpy: 0 },
      isLoaded: false,
      error: {
        isVisible: false,
        message: null
      }
    },
    mutations: {
      SET_INITIAL_TABLES(state, { serviceConfig }) {
        state.tables = getDefaultTables(serviceConfig)
      },
      SET_PRICE(state, { value }) {
        state.price = value
      },
      SET_FX(state, { value }) {
        state.fx = value
      },
      SET_IS_LOADED(state) {
        state.isLoaded = true
      },
      SET_ERROR_MESSAGE(state, { message }) {
        state.error.message = message
      },
      CLEAR_ERROR_MESSAGE(state) {
        state.error.message = null
      },
      SHOW_ERROR(state) {
        state.error.isVisible = true
      },
      HIDE_ERROR(state) {
        state.error.isVisible = false
      },
      APPEND(state, { serviceKey, serviceConfig }) {
        state.tables[serviceKey].push(getDefaultTable(serviceKey, serviceConfig))
      },
      UPDATE(state, { serviceKey, index, columnKey, value }) {
        const row = {
          ...state.tables[serviceKey][index],
          [columnKey]: value
        }
        const usd = calc[serviceKey](row, state.price)
        const jpy = usdToXXX(usd, state.fx.usdjpy)

        state.tables[serviceKey].splice(index, 1, {
          ...row,
          total: { usd, jpy }
        })

        state.total = calc.totalTables(state.tables)
      },
      REMOVE(state, { serviceKey, serviceConfig, index }) {
        if (state.tables[serviceKey].length === 1) {
          state.tables[serviceKey].splice(index, 1, getDefaultTable(serviceKey, serviceConfig))
        } else {
          state.tables[serviceKey].splice(index, 1)
        }

        state.total = calc.totalTables(state.tables)
      }
    },
    actions: {
      async nuxtServerInit({ commit, dispatch }) {
        commit('SET_INITIAL_TABLES', { serviceConfig })
        await dispatch('fetchAll', { fetchPrice, fetchFx })
      },
      async fetchAll({ commit }, { fetchPrice, fetchFx }) {
        try {
          const values = await Promise.all([fetchPrice(), fetchFx()])

          commit('SET_PRICE', { value: values[0] })
          commit('SET_FX', { value: values[1] })
          commit('SET_IS_LOADED')
        } catch (e) {
          commit('SET_ERROR_MESSAGE', { message: '通信エラーが発生しました。\nすみませんがリロードを・・・' })
          commit('SHOW_ERROR')
        }
      }
    }
  })

export default store
