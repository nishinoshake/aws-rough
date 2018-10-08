export default {
  key: 'alb',
  name: 'ALB',
  fullname: 'Application Load Balancer',
  description: 'アプリケーションロードバランサー',
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
