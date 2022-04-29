export default {
  key: 'cloudfront',
  name: 'CloudFront',
  fullname: '',
  href: '/cloudfront/',
  description: 'CDN',
  color: 'purple',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'protocol',
      title: 'プロトコル',
      default: 'HTTPS',
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
      title: 'リクエスト数',
      size: 'large'
    }
  ]
}
