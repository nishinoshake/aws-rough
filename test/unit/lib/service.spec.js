import {
  getService,
  getDefaultTable,
  getDefaultTables,
  getDefaultColumnValue,
  parseInstance,
  minifyTable
} from '@/lib/service'

describe('service', () => {
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

  describe('getService', () => {
    test('設定ファイルからサービスを取得できる', () => {
      expect(getService('ec2', serviceConfig)).toEqual(serviceConfig[0])
    })
  })

  describe('getDefaultTable', () => {
    test('設定ファイルからサービスのテーブルを取得できる', () => {
      expect(getDefaultTable('ec2', serviceConfig)).toEqual({
        instance: 't2.micro',
        unit: '',
        total: { usd: 0, jpy: 0 }
      })
    })
  })

  describe('getDefaultTables', () => {
    test('設定ファイルから全てのサービスのテーブルを取得できる', () => {
      expect(getDefaultTables(serviceConfig)).toEqual({
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

  describe('getDefaultColumnValue', () => {
    test('設定ファイルからカラムのデフォルト値を取得できる', () => {
      expect(getDefaultColumnValue('ec2', 'instance', serviceConfig)).toBe('t2.micro')
    })
    test('設定ファイルからカラムのデフォルト値が見つからなければnullを返す', () => {
      expect(getDefaultColumnValue('ec2', 'hoge', serviceConfig)).toBeNull()
    })
  })

  describe('parseInstance', () => {
    test('インスタンス名を指定してパースできる', () => {
      const instances = [
        {
          price: 0.01,
          instanceType: 't2.nano'
        },
        {
          price: 0.02,
          instanceType: 't2.micro'
        }
      ]

      expect(parseInstance('t2.micro', instances)).toEqual(instances[1])
    })
  })

  describe('minifyTable', () => {
    test('テーブルから合計を削除できる', () => {
      const tables = {
        ec2: [{ instance: 't2.micro', unit: '', total: { usd: 0, jpy: 0 } }],
        rds: [{ instance: 'db.t2.micro', unit: '', total: { usd: 0, jpy: 0 } }]
      }

      expect(minifyTable(tables)).toEqual({
        ec2: [{ instance: 't2.micro', unit: '' }],
        rds: [{ instance: 'db.t2.micro', unit: '' }]
      })
    })
  })
})
