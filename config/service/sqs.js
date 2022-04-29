export default {
  key: 'sqs',
  name: 'SQS',
  href: '/sqs/',
  fullname: 'Simple Queue Service',
  description: 'キュー',
  color: 'pink',
  table: [
    {
      type: 'number',
      key: 'standard',
      size: 'large',
      title: '標準キュー（件）'
    },
    {
      type: 'number',
      key: 'fifo',
      size: 'large',
      title: 'FIFOキュー（件）'
    }
  ]
}
