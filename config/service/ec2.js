export default {
  key: 'ec2',
  name: 'EC2',
  fullname: 'Elastic Compute Cloud',
  href: '/ec2/',
  description: 'サーバー',
  color: 'orange',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'instance',
      title: 'インスタンス',
      default: 't3.nano',
      size: 'large',
      parseJson: json => json.ec2.instance.map(instance => instance.instanceType)
    },
    {
      type: 'number',
      key: 'unit',
      title: '台数',
      size: 'minimal'
    },
    {
      type: 'number',
      key: 'storage',
      title: 'ストレージ(GB)'
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)'
    }
  ]
}
