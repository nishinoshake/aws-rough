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
    instance: [
      { price: 0.005, instanceType: 't2.micro' },
      { price: 0.01, instanceType: 't2.small' },
      { price: 0.015, instanceType: 'c4.large' }
    ]
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
    store.commit('SET_PRICE', { value: price })
    store.commit('SET_FX', { value: fx })
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
      expect(store.state.price).toEqual(price)
    })
  })

  describe('SET_FX', () => {
    test('為替を設定できる', () => {
      expect(store.state.fx).toEqual(fx)
    })
  })

  describe('SET_IS_LOADED', () => {
    test('ロード完了を設定できる', () => {
      store.commit('SET_IS_LOADED')
      expect(store.state.isLoaded).toBe(true)
    })
  })

  describe('SET_ERROR_MESSAGE', () => {
    test('エラーメッセージを設定できる', () => {
      store.commit('SET_ERROR_MESSAGE', { message: '回線の調子が悪いです・・・' })
      expect(store.state.error.message).toEqual('回線の調子が悪いです・・・')
    })
  })

  describe('CLEAR_ERROR_MESSAGE', () => {
    test('エラーメッセージを削除できる', () => {
      store.commit('SET_ERROR_MESSAGE', { message: '回線の調子が悪いです・・・' })
      store.commit('CLEAR_ERROR_MESSAGE')
      expect(store.state.error.message).toBeNull()
    })
  })

  describe('SHOW_ERROR', () => {
    test('エラーを表示できる', () => {
      store.commit('SHOW_ERROR')
      expect(store.state.error.isVisible).toBe(true)
    })
  })

  describe('HIDE_ERROR', () => {
    test('エラーを非表示にできる', () => {
      store.commit('SHOW_ERROR')
      store.commit('HIDE_ERROR')
      expect(store.state.error.isVisible).toBe(false)
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

  describe('RESTORE', () => {
    test('サービスのテーブルを復元できる', () => {
      const tables = {
        ec2: [{ instance: 'c4.large', unit: 1 }, { instance: 't2.small', unit: 2 }]
      }

      store.commit('RESTORE', { tables, serviceConfig })

      expect(store.state.tables.ec2[0].instance).toBe('c4.large')
      expect(store.state.tables.ec2[0].unit).toBe(1)
      expect(store.state.tables.ec2[1].instance).toBe('t2.small')
      expect(store.state.tables.ec2[1].unit).toBe(2)
    })

    test('存在しないサービスを追加しない', () => {
      const tables = {
        BigQuery: [{ instance: 'c4.large', unit: 1 }]
      }

      store.commit('RESTORE', { tables, serviceConfig })
      expect(store.state.tables.BigQuery).toBeUndefined()
    })

    test('存在しないプロパティを設定しない', () => {
      const tables = {
        ec2: [{ hoge: 100 }]
      }

      store.commit('RESTORE', { tables, serviceConfig })
      expect(store.state.tables.ec2[0].hoge).toBeUndefined()
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

    test('サービスの行が1行のときに削除されたら入力がクリアされる', () => {
      store.commit('UPDATE', { serviceKey: 'ec2', index: 0, columnKey: 'unit', value: 10 })
      expect(store.state.tables.ec2[0].unit).toBe(10)

      store.commit('REMOVE', { serviceKey: 'ec2', serviceConfig, index: 0 })
      expect(store.state.tables.ec2[0].unit).toBe('')
    })
  })

  const fetchAllResolve = async () => {
    const fetchPrice = jest.fn().mockResolvedValue(price)
    const fetchFx = jest.fn().mockResolvedValue(fx)

    await store.dispatch('fetchAll', { fetchPrice, fetchFx })
  }

  const fetchAllReject = async () => {
    const fetchPrice = jest.fn().mockResolvedValue({ data: price })
    const fetchFx = jest.fn().mockRejectedValue({
      message: 'With Great Power Comes Great Responsibility'
    })

    await store.dispatch('fetchAll', { fetchPrice, fetchFx })
  }

  describe('fetchAll', () => {
    test('データの取得に成功したら結果を設定してくれる', async () => {
      await fetchAllResolve()

      expect(store.state.price).toEqual(price)
      expect(store.state.fx).toEqual(fx)
      expect(store.state.isLoaded).toEqual(true)
    })

    test('データの取得に失敗したらエラーを設定してくれる', async () => {
      await fetchAllReject()

      expect(store.state.error.isVisible).toBe(true)
      expect(store.state.error.message).toBe('通信エラーが発生しました。\nすみませんがリロードを・・・')
      expect(store.state.isLoaded).toEqual(false)
    })
  })

  describe('fetchZ', () => {
    test('テーブルの情報を取得して設定してくれる', async () => {
      await fetchAllResolve()

      const fetchZ = jest.fn().mockResolvedValue({
        ec2: [{ instance: 'c4.large', unit: 1 }]
      })

      await store.dispatch('fetchZ', { fetchZ, hash: 'a'.repeat(20), serviceConfig })

      expect(store.state.tables.ec2[0].instance).toBe('c4.large')
      expect(store.state.tables.ec2[0].unit).toBe(1)
    })

    test('データの取得に失敗したらエラーを設定してくれる', async () => {
      await fetchAllResolve()

      const fetchZ = jest.fn().mockRejectedValue({
        message: 'With Great Power Comes Great Responsibility'
      })

      await store.dispatch('fetchZ', { fetchZ, hash: 'a'.repeat(20), serviceConfig })

      expect(store.state.error.isVisible).toBe(true)
      expect(store.state.error.message).toBe('データを復元できませんでした・・・')
    })
  })

  describe('postZ', () => {
    test('テーブルの情報をポストできる', async () => {
      const postZ = jest.fn().mockResolvedValue({})

      await store.dispatch('postZ', {
        postZ,
        hash: 'a'.repeat(20),
        data: {
          ec2: [{ instance: 'c4.large', unit: 1 }]
        }
      })

      expect(store.state.error.isVisible).toBe(false)
      expect(store.state.error.message).toBeNull()
    })

    test('テーブルの情報のポストに失敗したらエラーを設定できる', async () => {
      const postZ = jest.fn().mockRejectedValue({
        message: 'With Great Power Comes Great Responsibility'
      })

      await store.dispatch('postZ', {
        postZ,
        hash: 'a'.repeat(6),
        data: {}
      })

      expect(store.state.error.isVisible).toBe(true)
      expect(store.state.error.message).toBe('リンクを作成できませんでした。\nすみませんがもう一度お願いします・・・')
    })
  })
})
