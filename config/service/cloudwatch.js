export default {
  key: 'cloudwatch',
  name: 'CloudWatch',
  href: '/cloudwatch/',
  fullname: 'CloudWatch',
  description: '監視',
  color: 'pink',
  row: 3,
  table: [
    {
      type: 'number',
      key: 'metrics',
      size: 'w-33',
      title: 'カスタムメトリクス'
    },
    {
      type: 'number',
      key: 'dashboard',
      size: 'w-33',
      title: 'ダッシュボード'
    },
    {
      type: 'number',
      key: 'logCollect',
      size: 'w-33',
      title: 'ログ（GB）'
    },
    {
      type: 'number',
      key: 'GetMetricData',
      size: 'w-33',
      title: 'GetMetricData（メトリクス数）'
    },
    {
      type: 'number',
      key: 'GetMetricWidgetImage',
      size: 'w-33',
      title: 'GetMetricWidgetImage（メトリクス数）'
    },
    {
      type: 'number',
      key: 'otherApi',
      size: 'w-33',
      title: 'その他のAPI（リクエスト数）'
    },
    {
      type: 'number',
      key: 'standardAlarm',
      size: 'w-33',
      title: 'アラーム（標準）'
    },
    {
      type: 'number',
      key: 'highResolutionAlarm',
      title: 'アラーム（高解像度）',
      size: 'w-33'
    }
  ]
}
