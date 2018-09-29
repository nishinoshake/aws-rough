export default {
  key: 'cloudfront',
  name: 'CloudFront',
  description: 'CDN',
  color: 'red',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'protocol',
      title: 'プロトコル',
      default: 'HTTP',
      options: ['HTTP', 'HTTPS']
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)'
    },
    {
      type: 'number',
      key: 'request',
      title: 'リクエスト数'
    }
  ]
}
