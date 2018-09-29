export default {
  key: 'cloudfront',
  name: 'CloudFront',
  description: 'CDN',
  color: 'red',
  table: [
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
