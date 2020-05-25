export default {
  key: 'dynamodb',
  name: 'DynamoDB',
  fullname: 'Scalable NoSQL database',
  href: '/dynamodb/',
  description: 'すごいNoSQL',
  color: 'blue',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'mode',
      title: 'キャパシティモード',
      size: 'large',
      default: 'オンデマンド',
      options: ['オンデマンド', 'プロビジョン済み']
    },
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
    },
    {
      type: 'number',
      key: 'read',
      title: '読み込み単位'
    },
    {
      type: 'number',
      key: 'write',
      title: '書き込み単位'
    }
  ],
  filterRow({ mode }) {
    switch (mode) {
      case 'オンデマンド':
        return ['mode', 'storage', 'read', 'write']
      case 'プロビジョン済み':
        return ['mode', 'storage', 'rcu', 'wcu']
    }
  }
}
