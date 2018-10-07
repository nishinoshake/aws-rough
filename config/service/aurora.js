export default {
  key: 'aurora',
  name: 'Aurora',
  description: 'すごいRDBMS',
  color: 'blue',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'engine',
      title: '互換DB',
      default: 'MySQL',
      mod: 'small',
      parseJson: (json, row) => Object.keys(json.aurora.instance)
    },
    {
      type: 'select',
      key: 'instance',
      title: 'インスタンス',
      default: 'db.r4.large',
      parseJson: (json, row) => json.aurora.instance[row.engine].map(instance => instance.instanceType)
    },
    {
      type: 'number',
      key: 'unit',
      mod: 'small',
      title: '台数'
    },
    {
      type: 'number',
      key: 'storage',
      title: 'ストレージ(GB)'
    },
    {
      type: 'number',
      key: 'io',
      title: 'I/O(件)',
      mod: 'small'
    }
  ]
}