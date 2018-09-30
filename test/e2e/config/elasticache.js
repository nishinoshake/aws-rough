export default {
  path: '/elasticache/',
  useCases: [
    {
      name: 'ElastiCacheの計算結果が想定内',
      range: {
        min: 100,
        max: 130
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'cache.t2.small'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '3'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    },
    {
      name: 'ElastiCacheの高額ノードタイプの計算結果が想定内',
      range: {
        min: 6380,
        max: 6410
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'cache.r4.16xlarge'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '1'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
