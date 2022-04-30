export default {
  key: 's3',
  name: 'S3',
  fullname: 'Simple Storage Service',
  href: '/s3/',
  description: 'ストレージ',
  color: 'green',
  multiple: false,
  row: 1,
  table: [
    {
      type: 'number',
      key: 'storage',
      title: '容量(GB)',
      size: 'small'
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)'
    },
    {
      type: 'number',
      key: 'read',
      title: '読み込み回数'
    },
    {
      type: 'number',
      key: 'write',
      title: '書き込み回数'
    }
  ]
}
