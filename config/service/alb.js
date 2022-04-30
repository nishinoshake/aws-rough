export default {
  key: 'alb',
  name: 'ALB',
  fullname: 'Application Load Balancer',
  href: '/elb/',
  description: 'アプリケーションロードバランサー',
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
