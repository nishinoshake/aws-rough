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
      key: 'replica',
      mod: 'small',
      title: 'レプリカ(台)'
    },
    {
      type: 'number',
      key: 'storage',
      title: 'ストレージ(GB)',
      mod: 'small'
    },
    {
      type: 'number',
      key: 'io',
      title: 'I/O(件)',
      mod: 'small'
    }
  ]
}
