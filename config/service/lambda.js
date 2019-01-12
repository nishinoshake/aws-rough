export default {
  key: 'lambda',
  name: 'Lambda',
  href: '/lambda/',
  description: 'FaaS',
  color: 'orange',
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
      key: 'memory',
      title: 'メモリ(GB秒)',
      size: 'large'
    }
  ]
}
