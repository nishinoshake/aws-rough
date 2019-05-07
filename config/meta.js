const SITE_TITLE = 'ざっくりAWS'
const SITE_DESCRIPTION =
  'AWSの料金の目安を日本円で「ざっくり」計算できるサイトです。公式のシミュレーターよりも少ない入力で手軽に概算を算出できます。料金の厳密さよりも手軽さを優先しているので、正確な料金が知りたい方は公式のシミュレーターをお使いください。'
const pageDescription = text => `${text}${SITE_DESCRIPTION}`

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
  cloudfront: {
    title: 'CloudFrontの料金を日本円でざっくり',
    description: pageDescription('CloudFrontの料金を計算するぞ。')
  },
  apigateway: {
    title: 'API Gatewayの料金を日本円でざっくり',
    description: pageDescription('API Gatewayの料金を計算するぞ。')
  },
  detail: {
    title: '料金内訳',
    description: pageDescription('内訳を確認するぞ。')
  },
  dynamodb: {
    title: 'DynamoDBの料金を日本円でざっくり',
    description: pageDescription('DynamoDBの料金を計算するぞ。')
  },
  ec2: {
    title: 'EC2の料金を日本円でざっくり',
    description: pageDescription('EC2の料金を計算するぞ。')
  },
  fargate: {
    title: 'Fargateの料金を日本円でざっくり',
    description: pageDescription('Fargateの料金を計算するぞ。')
  },
  elasticache: {
    title: 'ElastiCacheの料金を日本円でざっくり',
    description: pageDescription('ElastiCacheの料金を計算するぞ。')
  },
  elb: {
    title: 'ELBの料金を日本円でざっくり',
    description: pageDescription('ELBの料金を計算するぞ。')
  },
  lambda: {
    title: 'Lambdaの料金を日本円でざっくり',
    description: pageDescription('Lambdaの料金を計算するぞ。')
  },
  rds: {
    title: 'RDSの料金を日本円でざっくり',
    description: pageDescription('RDSの料金を計算するぞ。')
  },
  aurora: {
    title: 'Auroraの料金を日本円でざっくり',
    description: pageDescription('Auroraの料金を計算するぞ。')
  },
  route53: {
    title: 'Route53の料金を日本円でざっくり',
    description: pageDescription('Route53の料金を計算するぞ。')
  },
  s3: {
    title: 'S3の料金を日本円でざっくり',
    description: pageDescription('S3の料金を計算するぞ。')
  },
  vpc: {
    title: 'VPCの料金を日本円でざっくり',
    description: pageDescription('VPCの料金を計算するぞ。')
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
