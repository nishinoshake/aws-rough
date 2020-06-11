export default {
  key: 'apigateway',
  name: 'API Gateway',
  fullname: '',
  href: '/apigateway/',
  description: 'API管理',
  color: 'beige',
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
      title: 'データ転送量(GB)'
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
