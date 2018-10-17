export default {
  key: 'nlb',
  name: 'NLB',
  href: '/elb/',
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
      title: 'LCU',
      size: 'large'
    }
  ]
}
