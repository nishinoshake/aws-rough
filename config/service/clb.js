export default {
  key: 'clb',
  name: 'CLB',
  fullname: 'Classic Load Balancer',
  href: '/elb/',
  description: 'クラシックロードバランサー',
  color: 'purple',
  multiple: false,
  row: 1,
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
