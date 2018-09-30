export default {
  key: 'clb',
  name: 'CLB',
  fullname: 'Classic Load Balancer',
  description: 'クラシックロードバランサー',
  color: 'orange',
  multiple: false,
  table: [
    {
      type: 'number',
      key: 'unit',
      title: '台数'
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)'
    }
  ]
}
