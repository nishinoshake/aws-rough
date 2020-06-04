<template>
  <component :is="name" />
</template>

<script>
import ec2 from '@/assets/svg/ec2.svg'
import fargate from '@/assets/svg/fargate.svg'
import elasticache from '@/assets/svg/elasticache.svg'
import elb from '@/assets/svg/elb.svg'
import vpc from '@/assets/svg/vpc.svg'
import lambda from '@/assets/svg/lambda.svg'
import route53 from '@/assets/svg/route53.svg'
import cloudfront from '@/assets/svg/cloudfront.svg'
import apigateway from '@/assets/svg/apigateway.svg'
import s3 from '@/assets/svg/s3.svg'
import rds from '@/assets/svg/rds.svg'
import aurora from '@/assets/svg/aurora.svg'
import dynamodb from '@/assets/svg/dynamodb.svg'
import sns from '@/assets/svg/sns.svg'
import ses from '@/assets/svg/ses.svg'
import sqs from '@/assets/svg/sqs.svg'

export default {
  name: 'ServicePartsIcon',
  components: {
    ec2,
    fargate,
    elasticache,
    elb,
    vpc,
    lambda,
    route53,
    cloudfront,
    apigateway,
    rds,
    aurora,
    s3,
    dynamodb,
    sns,
    ses,
    sqs
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
