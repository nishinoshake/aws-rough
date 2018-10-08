export default {
  path: '/route53/',
  useCases: [
    {
      name: 'Route53の計算結果が想定内',
      range: {
        min: 40,
        max: 50
      },
      waitFor: '[data-test="hostzone"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="hostzone"]',
          value: '10'
        },
        {
          type: 'type',
          target: '[data-test="query"]',
          value: '100000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
