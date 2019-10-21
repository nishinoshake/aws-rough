export default {
  key: 'sns',
  name: 'SNS',
  href: '/sns/',
  fullname: 'Simple Notification Service',
  description: 'Pub/Sub',
  color: 'beige',
  grande: true,
  table: [
    {
      type: 'number',
      key: 'request',
      size: 'w-33',
      title: 'リクエスト数'
    },
    {
      type: 'number',
      key: 'mobile',
      size: 'w-33',
      title: 'モバイルプッシュ配信数'
    },
    {
      type: 'number',
      key: 'email',
      size: 'w-33',
      title: 'Email配信数'
    },
    {
      type: 'number',
      key: 'http',
      size: 'w-33',
      title: 'HTTP/S配信数'
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)',
      size: 'w-33'
    }
  ]
}
