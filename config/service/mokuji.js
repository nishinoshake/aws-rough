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
import cloudwatch from './cloudwatch'
import cognito from './cognito'
import sns from './sns'
import sqs from './sqs'
import ses from './ses'

export default [
  ec2,
  fargate,
  lambda,
  s3,
  elb,
  vpc,
  route53,
  cloudfront,
  rds,
  aurora,
  dynamodb,
  elasticache,
  cloudwatch,
  apigateway,
  sns,
  sqs,
  ses,
  cognito
]
