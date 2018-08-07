export default [
  // EC2
  {
    key: 'ec2',
    name: 'EC2',
    description: '仮想サーバー',
    color: 'orange',
    multiple: true,
    table: [
      {
        type: 'select',
        key: 'instance',
        title: 'インスタンス',
        default: 't2.nano',
        mod: 'large',
        parseJson: json =>
          json.ec2.instance.map(instance => instance.attributes.instanceType)
      },
      {
        type: 'number',
        key: 'unit',
        title: '台数',
        mod: 'small'
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
  },

  // ELB
  {
    key: 'elb',
    name: 'ELB',
    description: 'ロードバランサー',
    color: 'orange',
    multiple: false,
    table: [
      {
        type: 'number',
        key: 'unit',
        title: '台数'
      },
      {
        type: 'number',
        key: 'transfer',
        title: 'データ転送量(GB)'
      }
    ]
  },

  // Lambda
  {
    key: 'lambda',
    name: 'Lambda',
    description: 'サーバーレス',
    color: 'orange',
    multiple: false,
    table: [
      {
        type: 'number',
        key: 'request',
        title: 'リクエスト数'
      },
      {
        type: 'number',
        key: 'memory',
        title: 'メモリ(GB秒)'
      }
    ]
  },

  // Route53
  {
    key: 'route53',
    name: 'Route53',
    description: 'DNS',
    color: 'orange',
    multiple: false,
    table: [
      {
        type: 'number',
        key: 'hostzone',
        title: 'ホストゾーン数'
      },
      {
        type: 'number',
        key: 'query',
        title: 'クエリ数'
      }
    ]
  },

  // CloudFront
  {
    key: 'cloudfront',
    name: 'CloudFront',
    description: 'CDN',
    color: 'red',
    table: [
      {
        type: 'number',
        key: 'transfer',
        title: 'データ転送量(GB)'
      },
      {
        type: 'number',
        key: 'request',
        title: 'リクエスト数'
      }
    ]
  },

  // S3
  {
    key: 's3',
    name: 'S3',
    description: 'ストレージ',
    color: 'red',
    multiple: false,
    table: [
      {
        type: 'number',
        key: 'storage',
        title: '容量(GB)'
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
  },

  // RDS
  {
    key: 'rds',
    name: 'RDS',
    description: 'データベース',
    color: 'blue',
    multiple: true,
    table: [
      {
        type: 'select',
        key: 'instance',
        title: 'インスタンス',
        default: 'db.t2.micro',
        mod: 'large',
        parseJson: json =>
          json.rds.instance.map(instance => instance.attributes.instanceType)
      },
      {
        type: 'number',
        key: 'unit',
        title: '台数',
        mod: 'small'
      },
      {
        type: 'select',
        key: 'az',
        title: 'AZ',
        default: 'Single-AZ',
        options: ['Single-AZ', 'Multi-AZ']
      },
      {
        type: 'number',
        key: 'storage',
        title: 'ストレージ(GB)'
      }
    ]
  },

  // DynamoDB
  {
    key: 'dynamodb',
    name: 'DynamoDB',
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
  },

  // ElastiCache
  {
    key: 'elasticache',
    name: 'ElastiCache',
    description: 'インメモリデータストア',
    color: 'blue',
    multiple: true,
    table: [
      {
        type: 'select',
        key: 'instance',
        title: 'ノードタイプ',
        default: 'cache.t2.micro',
        mod: 'large',
        parseJson: json =>
          json.elasticache.instance.map(instance => instance.attributes.instanceType)
      },
      {
        type: 'number',
        key: 'unit',
        title: 'ノード数',
        mod: 'small'
      }
    ]
  }
]
