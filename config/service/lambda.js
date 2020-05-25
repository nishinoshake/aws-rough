export default {
  key: 'lambda',
  name: 'Lambda',
  fullname: 'Function as a Service',
  href: '/lambda/',
  description: '関数',
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
