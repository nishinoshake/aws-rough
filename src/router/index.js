import Vue from 'vue'
import Router from 'vue-router'
import ServiceEC2 from '@/components/service/ServiceEC2'
import ServiceELB from '@/components/service/ServiceELB'
import ServiceLambda from '@/components/service/ServiceLambda'
import ServiceRoute53 from '@/components/service/ServiceRoute53'
import ServiceCloudFront from '@/components/service/ServiceCloudFront'
import ServiceS3 from '@/components/service/ServiceS3'
import ServiceRDS from '@/components/service/ServiceRDS'
import ServiceDynamoDB from '@/components/service/ServiceDynamoDB'
import AboutIndex from '@/components/about/AboutIndex'
import DetailIndex from '@/components/detail/DetailIndex'

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
      component: AboutIndex
    },
    {
      path: '/about',
      redirect: '/'
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
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = pagetitle(to.meta.title)
  } else if (document.title !== SITENAME) {
    document.title = SITENAME
  }

  next()
})

export default router
