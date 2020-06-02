const SITE_TITLE = 'ざっくりAWS'
const SITE_DESCRIPTION =
  'ざっくりAWSは、AWSの料金の目安を日本円で「ざっくり」計算できるサイトです。公式のシミュレーターよりも少ない入力で手軽に概算を見積もれます。'

const pageTitle = page => `${page}の料金を日本円でざっくり見積もる | ${SITE_TITLE}`
const pageDescription = description => `${description}${SITE_DESCRIPTION}`

const meta = {
  index: {
    title: `${SITE_TITLE} | AWSの料金を日本円でざっくり見積もる`,
    description: SITE_DESCRIPTION
  },
  error_404: {
    title: 'Not Found',
    description: SITE_DESCRIPTION
  },
  about: {
    title: 'このサイトについて | ざっくりAWS',
    description: SITE_DESCRIPTION
  },
  story: {
    title: 'はじめてのAWS | ざっくりAWS',
    description: SITE_DESCRIPTION
  },
  detail: {
    title: '料金内訳 | ざっくりAWS',
    description: 'ざっくりAWSの料金内訳を確認できます。'
  },
  terms: {
    title: '利用規約 | ざっくりAWS',
    description: 'ざっくりAWSの利用規約です。'
  },
  privacy: {
    title: 'プライバシーポリシー | ざっくりAWS',
    description: 'ざっくりAWSのプライバシーポリシーです。'
  },
  ec2: {
    title: pageTitle('EC2'),
    description: pageDescription(
      'EC2の料金は、主にインスタンスのスペックや利用する台数、ストレージのサイズやデータ転送量で決まります。'
    )
  },
  fargate: {
    title: pageTitle('Fargate'),
    description: pageDescription(
      'Fargateの料金は、タスク数と稼働時間、タスクに割り当てたリソースと外部へのデータ転送量で決まります。'
    )
  },
  lambda: {
    title: pageTitle('Lambda'),
    description: pageDescription(
      'Lambdaの料金は、リクエスト数とメモリ使用量で料金が決まりますが、かなり寛大な無料枠があります。'
    )
  },
  elb: {
    title: pageTitle('ELB'),
    description:
      'CLBの料金は、主に利用する台数とデータ転送量で決まります。ALB/NLBの場合は少し複雑で、Load Balancer Capacity Unit(LCU)というものを考慮する必要があります。'
  },
  vpc: {
    title: pageTitle('VPC'),
    description: pageDescription('VPCの利用は基本的に無料ですが、NAT Gatewayなどを使う場合は料金が発生します。')
  },
  route53: {
    title: pageTitle('Route53'),
    description: pageDescription('Route53の料金は、主にホストゾーン数とクエリ数で決まります。')
  },
  apigateway: {
    title: pageTitle('API Gateway'),
    description: pageDescription('API Gatewayの料金は、主にリクエスト数とデータ転送量で決まります。')
  },
  cloudfront: {
    title: pageTitle('CloudFront'),
    description: pageDescription('CloudFrontの料金は、主にインターネットへのデータ転送量とリクエスト数で決まります。')
  },
  s3: {
    title: pageTitle('S3'),
    description: pageDescription('S3の料金は、主にストレージの容量とデータ転送量、読み書きの回数で決まります。')
  },
  rds: {
    title: pageTitle('RDS'),
    description: pageDescription(
      'RDSの料金は、主にインスタンスのスペックや利用する台数、冗長構成、ストレージの容量で決まります。'
    )
  },
  aurora: {
    title: pageTitle('Aurora'),
    description: pageDescription(
      'Auroraの料金は、主にインスタンスのスペックや、レプリカの数、ストレージの容量で決まります。'
    )
  },
  dynamodb: {
    title: pageTitle('DynamoDB'),
    description: pageDescription(
      'DynamoDBの料金は、主にストレージの容量と読み込み/書き込みキャパシティユニットで決まります。'
    )
  },
  elasticache: {
    title: pageTitle('ElastiCache'),
    description: pageDescription('ElastiCacheの料金は、主にノードタイプと台数で決まります。')
  },
  sns: {
    title: pageTitle('SNS'),
    description: pageDescription('SNSの料金は、主にノードタイプと台数で決まります。')
  },
  sqs: {
    title: pageTitle('SQS'),
    description: pageDescription('SQSの料金は、主にノードタイプと台数で決まります。')
  },
  ses: {
    title: pageTitle('SES'),
    description: pageDescription('SESの料金は、主にノードタイプと台数で決まります。')
  }
}

const ogTitle = title => ({
  hid: 'og:title',
  name: 'og:title',
  content: title
})

const description = text => [
  {
    hid: 'description',
    name: 'description',
    content: text
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content: text
  }
]

export default Object.keys(meta).reduce(
  (obj, key) => ({
    ...obj,
    [key]: {
      title: meta[key].title,
      meta: [ogTitle(meta[key].title), ...description(meta[key].description)]
    }
  }),
  {}
)
