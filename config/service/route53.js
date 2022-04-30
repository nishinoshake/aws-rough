export default {
  key: 'route53',
  name: 'Route53',
  fullname: '',
  href: '/route53/',
  description: 'DNS',
  color: 'purple',
  multiple: false,
  row: 1,
  table: [
    {
      type: 'number',
      key: 'hostzone',
      title: 'ホストゾーン数'
    },
    {
      type: 'number',
      key: 'query',
      title: 'クエリ数',
      size: 'large'
    }
  ]
}
