export default {
  path: '/elasticache/',
  useCases: [
    {
      name: 'ElastiCacheの計算結果が想定内',
      range: {
        min: 100,
        max: 130
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'cache.t2.small'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '3'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    {
      name: 'ElastiCacheの高額ノードタイプの計算結果が想定内',
      range: {
        min: 6380,
        max: 6410
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'cache.r4.16xlarge'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '1'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
