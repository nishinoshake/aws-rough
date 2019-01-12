import sortBy from 'lodash/sortBy'

export default {
  key: 'fargate',
  name: 'Fargate',
  href: '/fargate/',
  description: 'すごいやつ',
  color: 'orange',
  multiple: true,
  table: [
    {
      type: 'number',
      key: 'unit',
      title: 'タスク数',
      default: 1
    },
    {
      type: 'number',
      key: 'hours',
      title: '稼働時間(時)',
      default: 732
    },
    {
      type: 'select',
      key: 'cpu',
      title: 'vCPU',
      default: 'select',
      size: 'small',
      parseJson: (json, row) => ['select', ...sortBy(Object.keys(json.fargate.pair))]
    },
    {
      type: 'select',
      key: 'memory',
      title: 'メモリ(GB)',
      size: 'small',
      default: 'select',
      parseJson: (json, row) => {
        if (row.cpu === 'select') {
          return []
        }

        return ['select', ...sortBy(json.fargate.pair[row.cpu])]
      }
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)',
      size: 'large'
    }
  ]
}
