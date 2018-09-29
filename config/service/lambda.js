export default {
  key: 'lambda',
  name: 'Lambda',
  description: 'サーバーレス',
  color: 'orange',
  multiple: false,
  table: [
    {
      type: 'number',
      key: 'request',
      title: 'リクエスト数'
    },
    {
      type: 'number',
      key: 'memory',
      title: 'メモリ(GB秒)'
    }
  ]
}
