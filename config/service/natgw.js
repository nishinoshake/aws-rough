export default {
  key: 'natgw',
  name: 'NAT Gateway',
  fullname: 'NAT Gateway',
  href: '/vpc/',
  description: 'NAT Gateway',
  color: 'orange',
  multiple: false,
  row: 1,
  table: [
    {
      type: 'number',
      key: 'unit',
      title: '個数'
    },
    {
      type: 'number',
      key: 'processedData',
      title: '処理データ量(GB)'
    }
  ]
}
