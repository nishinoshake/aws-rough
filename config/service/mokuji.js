import ec2 from './ec2'
import fargate from './fargate'
import elb from './elb'
import lambda from './lambda'
import route53 from './route53'
import cloudfront from './cloudfront'
import apigateway from './apigateway'
import s3 from './s3'
import rds from './rds'
import aurora from './aurora'
import dynamodb from './dynamodb'
import elasticache from './elasticache'

export default [ec2, fargate, lambda, elb, route53, apigateway, cloudfront, s3, rds, aurora, dynamodb, elasticache]
