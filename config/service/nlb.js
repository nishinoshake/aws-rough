export default {
  key: 'nlb',
  name: 'NLB',
  fullname: 'Network Load Balancer',
  description: 'ネットワークロードバランサー',
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
      key: 'lcu',
      title: 'LCU'
    }
  ]
}
