export default {
  key: 'elb',
  name: 'ELB',
  description: 'ロードバランサー',
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
