const SITE_TITLE = 'ざっくりAWS'
const SITE_DESCRIPTION =
  'AWSの料金の目安を日本円で「ざっくり」計算できるサイトです。公式のシミュレーターよりも少ない入力で手軽に概算を算出できます。料金の厳密さよりも手軽さを優先しているので、正確な料金が知りたい方は公式のシミュレーターをお使いください。'

const meta = {
  index: {
    title: `${SITE_TITLE} | AWSの料金を、日本円でざっくり`,
    description: SITE_DESCRIPTION
  },
  error_404: {
    title: 'Not Found',
    description: SITE_DESCRIPTION
  },
  about: {
    title: 'ざっくりAWSについて',
    description: SITE_DESCRIPTION
  },
  ec2: {
    title: 'EC2の料金を日本円でざっくり',
    description: 'EC2の料金は、主にインスタンスのスペックや利用する台数、ストレージのサイズやデータ転送量で決まります。'
  },
  fargate: {
    title: 'Fargateの料金を日本円でざっくり',
    description: 'Fargateの料金は、タスク数と稼働時間、タスクに割り当てたリソースと外部へのデータ転送量で決まります。'
  },
  lambda: {
    title: 'Lambdaの料金を日本円でざっくり',
    description: 'Lambdaの料金は、リクエスト数とメモリ使用量で料金が決まりますが、かなり寛大な無料枠があります。'
  },
  elb: {
    title: 'ELBの料金を日本円でざっくり',
    description:
      'CLBの料金は、主に利用する台数とデータ転送量で決まります。ALB/NLBの場合は少し複雑で、Load Balancer Capacity Unit(LCU)というものを考慮する必要があります。'
  },
  vpc: {
    title: 'VPCの料金を日本円でざっくり',
    description: 'VPCの利用は基本的に無料ですが、NAT Gatewayなどを使う場合は料金が発生します。'
  },
  route53: {
    title: 'Route53の料金を日本円でざっくり',
    description: 'Route53の料金は、主にホストゾーン数とクエリ数で決まります。'
  },
  apigateway: {
    title: 'API Gatewayの料金を日本円でざっくり',
    description: 'API Gatewayの料金は、主にリクエスト数とデータ転送量で決まります。'
  },
  cloudfront: {
    title: 'CloudFrontの料金を日本円でざっくり',
    description: 'CloudFrontの料金は、主にインターネットへのデータ転送量とリクエスト数で決まります。'
  },
  s3: {
    title: 'S3の料金を日本円でざっくり',
    description: 'S3の料金は、主にストレージの容量とデータ転送量、読み書きの回数で決まります。'
  },
  rds: {
    title: 'RDSの料金を日本円でざっくり',
    description: 'RDSの料金は、主にインスタンスのスペックや利用する台数、冗長構成、ストレージの容量で決まります。'
  },
  aurora: {
    title: 'Auroraの料金を日本円でざっくり',
    description: 'Auroraの料金は、主にインスタンスのスペックや、レプリカの数、ストレージの容量で決まります。'
  },
  dynamodb: {
    title: 'DynamoDBの料金を日本円でざっくり',
    description: 'DynamoDBの料金は、主にストレージの容量と読み込み/書き込みキャパシティユニットで決まります。'
  },
  elasticache: {
    title: 'ElastiCacheの料金を日本円でざっくり',
    description: 'ElastiCacheの料金は、主にノードタイプと台数で決まります。'
  },
  detail: {
    title: '料金内訳',
    description: 'ざっくりAWSの料金内訳を確認できます。'
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
