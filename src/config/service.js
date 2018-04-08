export default [
  // EC2
  {
    key: 'ec2',
    name: 'EC2',
    multiple: true,
    table: [
      {
        type: 'select',
        key: 'instance',
        title: 'インスタンス',
        default: 't2.micro',
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
]
