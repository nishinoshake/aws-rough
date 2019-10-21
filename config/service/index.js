import ec2 from './ec2'
import fargate from './fargate'
import clb from './clb'
import alb from './alb'
import nlb from './nlb'
import lambda from './lambda'
import route53 from './route53'
import cloudfront from './cloudfront'
import apigateway from './apigateway'
import s3 from './s3'
import rds from './rds'
import aurora from './aurora'
import dynamodb from './dynamodb'
import elasticache from './elasticache'
import natgw from './natgw'
import sns from './sns'
import sqs from './sqs'
import ses from './ses'

export default [
  ec2,
  fargate,
  lambda,
  clb,
  alb,
  nlb,
  natgw,
  route53,
  cloudfront,
  s3,
  apigateway,
  rds,
  aurora,
  dynamodb,
  elasticache,
  sns,
  sqs,
  ses
]
