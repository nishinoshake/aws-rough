import Vue from 'vue'
import Router from 'vue-router'
import LandingIndex from '@/pages'
import AboutIndex from '@/pages/about'
import DetailIndex from '@/pages/detail'
import ServiceEC2 from '@/pages/ec2'
import ServiceELB from '@/pages/elb'
import ServiceLambda from '@/pages/lambda'
import ServiceRoute53 from '@/pages/route53'
import ServiceCloudFront from '@/pages/cloudfront'
import ServiceS3 from '@/pages/s3'
import ServiceRDS from '@/pages/rds'
import ServiceDynamoDB from '@/pages/dynamodb'
import ErrorNotFound from '@/components/error/ErrorNotFound'

Vue.use(Router)

const SITENAME = 'ざっくりAWS'
const pagetitle = str => `${str} | ${SITENAME}`

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active-exact',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: LandingIndex
    },
    {
      path: '/about',
      component: AboutIndex
    },
    {
      path: '/detail',
      component: DetailIndex,
      meta: {
        title: '内訳'
      }
    },
    {
      path: '/ec2',
      component: ServiceEC2,
      meta: {
        title: 'EC2'
      }
    },
    {
      path: '/elb',
      component: ServiceELB,
      meta: {
        title: 'ELB'
      }
    },
    {
      path: '/lambda',
      component: ServiceLambda,
      meta: {
        title: 'Lambda'
      }
    },
    {
      path: '/route53',
      component: ServiceRoute53,
      meta: {
        title: 'Route53'
      }
    },
    {
      path: '/cloudfront',
      component: ServiceCloudFront,
      meta: {
        title: 'CloudFront'
      }
    },
    {
      path: '/s3',
      component: ServiceS3,
      meta: {
        title: 'S3'
      }
    },
    {
      path: '/rds',
      component: ServiceRDS,
      meta: {
        title: 'RDS'
      }
    },
    {
      path: '/dynamodb',
      component: ServiceDynamoDB,
      meta: {
        title: 'DynamoDB'
      }
    },
    {
      path: '*',
      component: ErrorNotFound,
      meta: {
        title: 'Not Found'
      }
    }
  ]
})

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = pagetitle(to.meta.title)
  } else if (document.title !== SITENAME) {
    document.title = SITENAME
  }
})

export default router
