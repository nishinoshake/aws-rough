import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import createStore from '@/store'
import { MONTHLY_HOURS } from '@/config/constants'
import { usdToXXX } from '@/lib/price'

const serviceConfig = [
  {
    key: 'ec2',
    table: [{ type: 'select', key: 'instance', default: 't2.micro' }, { type: 'number', key: 'unit' }]
  },
  {
    key: 'rds',
    table: [{ type: 'select', key: 'instance', default: 'db.t2.micro' }, { type: 'number', key: 'unit' }]
  }
]

const price = {
  ec2: {
    instance: [{ price: 0.005, instanceType: 't2.micro' }]
  },
  rds: {
    instance: [{ price: 0.008, instanceType: 'db.t2.micro' }]
  }
}

const fx = {
  usdjpy: 100
}

let store

describe('store', () => {
  // テスト前にStoreを作成して初期のテーブルをセットする
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = createStore()
    store.commit('SET_INITIAL_TABLES', { serviceConfig })
  })

  describe('SET_INITIAL_TABLES', () => {
    test('初期のテーブルを設定できる', () => {
      expect(store.state.tables).toEqual({
        ec2: [
          {
            instance: 't2.micro',
            unit: '',
            total: { usd: 0, jpy: 0 }
          }
        ],
        rds: [
          {
            instance: 'db.t2.micro',
            unit: '',
            total: { usd: 0, jpy: 0 }
          }
        ]
      })
    })
  })

  describe('SET_PRICE', () => {
    test('料金を設定できる', () => {
      store.commit('SET_PRICE', { value: price })
      expect(store.state.price).toEqual(price)
    })
  })

  describe('SET_FX', () => {
    test('為替を設定できる', () => {
      store.commit('SET_FX', { value: fx })
      expect(store.state.fx).toEqual(fx)
    })
  })

  describe('SET_IS_LOADED', () => {
    test('ロード完了を設定できる', () => {
      store.commit('SET_IS_LOADED')
      expect(store.state.isLoaded).toBe(true)
    })
  })

  describe('SET_ERROR', () => {
    test('エラーを設定できる', () => {
      store.commit('SET_ERROR', { network: '回線の調子が悪いです・・・' })
      expect(store.state.error).toEqual({ network: '回線の調子が悪いです・・・' })
    })
  })

  describe('APPEND', () => {
    test('サービスの行を追加できる', () => {
      store.commit('APPEND', { serviceKey: 'ec2', serviceConfig })

      expect(store.state.tables.ec2).toEqual([store.state.tables.ec2[0], store.state.tables.ec2[0]])
    })
  })

  describe('UPDATE', () => {
    test('サービスの値を更新できる', () => {
      store.commit('SET_PRICE', { value: price })
      store.commit('SET_FX', { value: fx })

      store.commit('UPDATE', {
        serviceKey: 'ec2',
        index: 0,
        columnKey: 'unit',
        value: 10
      })

      const usd = price.ec2.instance[0].price * MONTHLY_HOURS * 10
      const jpy = usdToXXX(usd, fx.usdjpy)

      expect(store.state.tables.ec2).toEqual([
        {
          instance: 't2.micro',
          unit: 10,
          total: { usd, jpy }
        }
      ])
    })
  })

  describe('REMOVE', () => {
    test('サービスの行を削除ができる', () => {
      store.commit('APPEND', { serviceKey: 'ec2', serviceConfig })
      store.commit('APPEND', { serviceKey: 'ec2', serviceConfig })
      store.commit('APPEND', { serviceKey: 'ec2', serviceConfig })
      store.commit('REMOVE', { serviceKey: 'ec2', serviceConfig, index: 0 })

      expect(store.state.tables.ec2).toEqual([
        store.state.tables.ec2[0],
        store.state.tables.ec2[0],
        store.state.tables.ec2[0]
      ])
    })
  })

  describe('fetchAll', () => {
    test('データの取得に成功したら結果を設定してくれる', async () => {
      const fetchPrice = jest.fn().mockResolvedValue(price)
      const fetchFx = jest.fn().mockResolvedValue(fx)

      await store.dispatch('fetchAll', { fetchPrice, fetchFx })

      expect(store.state.price).toEqual(price)
      expect(store.state.fx).toEqual(fx)
      expect(store.state.isLoaded).toEqual(true)
    })

    test('データの取得に失敗したらエラーを設定してくれる', async () => {
      const fetchPrice = jest.fn().mockResolvedValue({ data: price })
      const fetchFx = jest.fn().mockRejectedValue({
        message: 'With Great Power Comes Great Responsibility'
      })

      await store.dispatch('fetchAll', { fetchPrice, fetchFx })

      expect(store.state.error.network).toEqual('通信エラーが発生しました')
      expect(store.state.isLoaded).toEqual(false)
    })
  })
})
