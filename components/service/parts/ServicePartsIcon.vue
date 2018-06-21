<template>
  <component :is="name" />
</template>

<script>
import ec2 from '@/assets/svg/ec2.svg'
import elasticache from '@/assets/svg/elasticache.svg'
import elb from '@/assets/svg/elb.svg'
import lambda from '@/assets/svg/lambda.svg'
import route53 from '@/assets/svg/route53.svg'
import cloudfront from '@/assets/svg/cloudfront.svg'
import s3 from '@/assets/svg/s3.svg'
import rds from '@/assets/svg/rds.svg'
import dynamodb from '@/assets/svg/dynamodb.svg'

export default {
  name: 'ServicePartsIcon',
  components: { ec2, elasticache, elb, lambda, route53, cloudfront, rds, s3, dynamodb },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
