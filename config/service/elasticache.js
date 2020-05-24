export default {
  key: 'elasticache',
  name: 'ElastiCache',
  href: '/elasticache/',
  description: 'インメモリDB',
  color: 'blue',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'instance',
      title: 'ノードタイプ',
      default: 'cache.t2.micro',
      size: 'large',
      parseJson: json => json.elasticache.instance.map(instance => instance.instanceType)
    },
    {
      type: 'number',
      key: 'unit',
      title: '台数',
      size: 'minimal'
    }
  ]
}
