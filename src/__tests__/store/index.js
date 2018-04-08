import store from '../../store'
import { MONTHLY_HOURS } from '../../store/constants'
import { usdToXXX } from '../../store/price'

const serviceConfig = [
  {
    key: 'ec2',
    table: [
      { type: 'select', key: 'instance', default: 't2.micro' },
      { type: 'number', key: 'unit' }
    ]
  },
  {
    key: 'rds',
    table: [
      { type: 'select', key: 'instance', default: 'db.t2.micro' },
      { type: 'number', key: 'unit' }
    ]
  }
]

const price = {
  ec2: {
    instance: [{ price: 0.005, attributes: { instanceType: 't2.micro' } }]
  },
  rds: {
    instance: [{ price: 0.008, attributes: { instanceType: 'db.t2.micro' } }]
  }
}

const fx = {
  usdjpy: 100
}

const createStore = () => ({
  tables: {},
  price: {},
  fx: {},
  isLoaded: false,
  isOpen: false,
  error: {}
})

describe('store', () => {
  beforeEach(() => {
    store.state = createStore()
    store.setInitialTables(serviceConfig)
  })

  describe('setInitialTables', () => {
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

  describe('fetchAll', () => {
    test('データの取得に成功したら結果を設定してくれる', async () => {
      const fetchPrice = jest.fn().mockResolvedValue(price)
      const fetchFx = jest.fn().mockResolvedValue(fx)

      await store.fetchAll({ fetchPrice, fetchFx })

      expect(store.state.price).toEqual(price)
      expect(store.state.fx).toEqual(fx)
      expect(store.state.isLoaded).toEqual(true)
    })

    test('データの取得に失敗したらエラーを設定してくれる', async () => {
      const fetchPrice = jest.fn().mockResolvedValue({ data: price })
      const fetchFx = jest.fn().mockRejectedValue({
        message: 'With Great Power Comes Great Responsibility'
      })

      await store.fetchAll({ fetchPrice, fetchFx })

      expect(store.state.error.fetch).toEqual('通信エラーが発生しました')
      expect(store.state.isLoaded).toEqual(false)
    })
  })

  describe('append', () => {
    test('サービスの行を追加できる', () => {
      store.append({ serviceKey: 'ec2' }, serviceConfig)

      expect(store.state.tables.ec2).toEqual([
        store.state.tables.ec2[0],
        store.state.tables.ec2[0]
      ])
    })
  })

  describe('update', () => {
    test('サービスの値を更新できる', () => {
      store.state.price = price
      store.state.fx = fx

      store.update({
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

  describe('remove', () => {
    test('サービスの行を削除ができる', () => {
      store.state.tables.ec2.push(store.state.tables.ec2[0])
      store.remove({ serviceKey: 'ec2' }, serviceConfig)

      expect(store.state.tables.ec2).toEqual([store.state.tables.ec2[0]])
    })
  })
})
