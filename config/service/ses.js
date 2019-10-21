export default {
  key: 'ses',
  name: 'SES',
  href: '/ses/',
  fullname: 'Simple Email Service',
  description: 'メール',
  color: 'beige',
  grande: true,
  table: [
    {
      type: 'number',
      key: 'sendEc2',
      size: 'w-33',
      title: 'EC2からの送信数'
    },
    {
      type: 'number',
      key: 'sendGeneral',
      size: 'w-33',
      title: 'EC2以外からの送信数'
    },
    {
      type: 'number',
      key: 'transfer',
      size: 'w-33',
      title: 'データ転送量（GB）'
    },
    {
      type: 'number',
      key: 'recieve',
      size: 'w-33',
      title: '受信数'
    },
    {
      type: 'number',
      key: 'recieveChunk',
      size: 'w-33',
      title: '受信の平均サイズ（KB）'
    },
    {
      type: 'number',
      key: 'dedicatedIp',
      size: 'w-33',
      title: '専用IPアドレス（個）'
    }
  ]
}
