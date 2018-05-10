const SITE_TITLE = 'ざっくりAWS'
const SITE_DESCRIPTION =
  'ざっくりAWSは、AWSの料金の目安を「ざっくり」計算できるサイトです。公式のシミュレーターよりも少ない入力で手軽に概算を算出できます。料金の厳密さよりも手軽さを優先しているので、正確な料金が知りたい方は公式のシミュレーターをお使いください。'

const description = text => ({
  hid: 'description',
  name: 'description',
  content: text
})

const pageTitle = text => `${text} | ${SITE_TITLE}`
const pageDescription = text => description(`${text}${SITE_DESCRIPTION}`)

export default {
  index: {
    title: SITE_TITLE,
    meta: [description(SITE_DESCRIPTION)]
  },
  about: {
    title: pageTitle('このサイトについて'),
    meta: [pageDescription('このサイトについての説明ページです。')]
  },
  cloudfront: {
    title: pageTitle('CloudFront'),
    meta: [pageDescription('CloudFrontの料金を計算するぞ。')]
  },
  detail: {
    title: pageTitle('内訳'),
    meta: [pageDescription('内訳を確認するぞ。')]
  },
  dynamodb: {
    title: pageTitle('DynamoDB'),
    meta: [pageDescription('DynamoDBの料金を計算するぞ。')]
  },
  ec2: {
    title: pageTitle('EC2'),
    meta: [pageDescription('EC2の料金を計算するぞ。')]
  },
  elb: {
    title: pageTitle('ELB'),
    meta: [pageDescription('ELBの料金を計算するぞ。')]
  },
  lambda: {
    title: pageTitle('Lambda'),
    meta: [pageDescription('Lambdaの料金を計算するぞ。')]
  },
  rds: {
    title: pageTitle('RDS'),
    meta: [pageDescription('RDSの料金を計算するぞ。')]
  },
  route53: {
    title: pageTitle('Route53'),
    meta: [pageDescription('Route53の料金を計算するぞ。')]
  },
  s3: {
    title: pageTitle('S3'),
    meta: [pageDescription('S3の料金を計算するぞ。')]
  }
}
