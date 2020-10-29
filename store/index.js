import Vuex from 'vuex'
import * as calc from '@/lib/calc'
import { MAX_ROW } from '@/config/constants'
import { getDefaultTable, getDefaultTables, getService } from '@/lib/service'
import { totalTable } from '@/lib/calc/total'
import { usdToXXX } from '@/lib/price'
import { fetchPrice, fetchFx } from '@/api'
import serviceConfig from '@/config/service'

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
      isDetailLoading: false,
      isMenuOpen: false,
      error: {
        isVisible: false,
        message: null
      }
    },
    getters: {
      services(state) {
        return Object.keys(state.tables).reduce((services, serviceKey) => {
          const { name, color } = getService(serviceKey, serviceConfig)
          const { jpy } = totalTable(state.tables[serviceKey])

          if (jpy > 0) {
            return [...services, { key: serviceKey, name, color, total: jpy }]
          }

          return services
        }, [])
      },
      hasService(state, getters) {
        return getters.services.length > 0
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
      SHOW_MENU(state) {
        state.isMenuOpen = true
      },
      HIDE_MENU(state) {
        state.isMenuOpen = false
      },
      TOGGLE_MENU(state) {
        state.isMenuOpen = !state.isMenuOpen
      },
      SHOW_DETAIL_LOADING(state) {
        state.isDetailLoading = true
      },
      HIDE_DETAIL_LOADING(state) {
        state.isDetailLoading = false
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
      RESTORE(state, { tables, serviceConfig }) {
        Object.keys(state.tables).forEach(serviceKey => {
          if (!tables[serviceKey]) {
            return
          }

          state.tables[serviceKey] = tables[serviceKey].map(restoredRow => {
            let row = getDefaultTable(serviceKey, serviceConfig)

            Object.keys(row).forEach(columnKey => {
              if (restoredRow[columnKey]) {
                row[columnKey] = restoredRow[columnKey]
              }
            })

            const usd = calc[serviceKey](row, state.price)
            const jpy = usdToXXX(usd, state.fx.usdjpy)

            return {
              ...row,
              total: { usd, jpy }
            }
          })
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
      },
      async fetchZ({ commit }, { fetchZ, hash, serviceConfig }) {
        try {
          commit('SHOW_DETAIL_LOADING')

          const tables = await fetchZ(hash)

          commit('RESTORE', { tables, serviceConfig })
          commit('HIDE_DETAIL_LOADING')
        } catch (e) {
          console.log(e)
          commit('SET_ERROR_MESSAGE', {
            message: 'データを復元できませんでした・・・'
          })
          commit('SHOW_ERROR')
          commit('HIDE_DETAIL_LOADING')
        }
      },
      async postZ({ commit }, { postZ, hash, data }) {
        try {
          await postZ(hash, data)
        } catch (e) {
          commit('SET_ERROR_MESSAGE', {
            message: 'リンクを作成できませんでした。\nすみませんがもう一度お願いします・・・'
          })
          commit('SHOW_ERROR')
        }
      },
      appendRow({ state, commit }, { serviceKey, serviceConfig }) {
        if (state.tables[serviceKey].length >= MAX_ROW) {
          commit('SET_ERROR_MESSAGE', { message: `最大で${MAX_ROW}行までなんです。\nすみません・・・` })
          commit('SHOW_ERROR')
          return
        }

        commit('APPEND', { serviceKey, serviceConfig })
      }
    }
  })

export default store
