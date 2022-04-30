export default {
  key: 'nlb',
  name: 'NLB',
  href: '/elb/',
  fullname: 'Network Load Balancer',
  description: 'ネットワークロードバランサー',
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
      key: 'lcu',
      title: 'LCU',
      size: 'large'
    }
  ]
}
