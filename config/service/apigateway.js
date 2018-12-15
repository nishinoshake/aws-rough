export default {
  key: 'apigateway',
  name: 'API Gateway',
  href: '/apigateway/',
  description: '手軽にAPI',
  color: 'red',
  multiple: false,
  table: [
    {
      type: 'number',
      key: 'request',
      title: 'リクエスト数',
      size: 'large'
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)',
      size: 'large'
    },
    {
      type: 'select',
      key: 'cache',
      title: 'キャッシュ(GB)',
      default: '',
      parseJson: json => ['', ...json.apigateway.cache.map(c => c.cacheMemorySizeGb)]
    }
  ]
}
