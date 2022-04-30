export default {
  key: 'rds',
  name: 'RDS',
  fullname: 'Relational Database Service',
  href: '/rds/',
  description: 'RDBMS',
  color: 'blue',
  multiple: true,
  row: 1,
  table: [
    {
      type: 'select',
      key: 'engine',
      title: 'DBエンジン',
      default: 'MySQL',
      parseJson: (json, row) => Object.keys(json.rds.instance)
    },
    {
      type: 'select',
      key: 'instance',
      title: 'インスタンス',
      default: 'db.t3.micro',
      size: 'large',
      parseJson: (json, row) => json.rds.instance[row.engine].map(instance => instance.instanceType)
    },
    {
      type: 'number',
      key: 'unit',
      title: '台数',
      size: 'minimal'
    },
    {
      type: 'select',
      key: 'az',
      title: 'AZ',
      default: 'Single-AZ',
      options: ['Single-AZ', 'Multi-AZ']
    },
    {
      type: 'number',
      key: 'storage',
      title: 'ストレージ(GB)'
    }
  ]
}
