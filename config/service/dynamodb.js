export default {
  key: 'dynamodb',
  name: 'DynamoDB',
  href: '/dynamodb/',
  description: 'NoSQL',
  color: 'blue',
  multiple: false,
  table: [
    {
      type: 'number',
      key: 'storage',
      title: 'ストレージ(GB)'
    },
    {
      type: 'number',
      key: 'rcu',
      title: 'RCU'
    },
    {
      type: 'number',
      key: 'wcu',
      title: 'WCU'
    }
  ]
}
