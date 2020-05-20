import ec2 from './ec2'
import fargate from './fargate'
import elb from './elb'
import vpc from './vpc'
import lambda from './lambda'
import route53 from './route53'
import cloudfront from './cloudfront'
import s3 from './s3'
import rds from './rds'
import aurora from './aurora'
import dynamodb from './dynamodb'
import elasticache from './elasticache'
import apigateway from './apigateway'
import sns from './sns'
import sqs from './sqs'
import ses from './ses'

export default [
  s3,
  ec2,
  elb,
  vpc,
  sns,
  sqs,
  ses,
  rds,
  aurora,
  fargate,
  lambda,
  route53,
  cloudfront,
  dynamodb,
  elasticache,
  apigateway
]
