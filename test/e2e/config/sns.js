export default {
  path: '/sns/',
  useCases: [
    {
      name: 'SNSの計算結果が想定内',
      range: {
        min: 27.5,
        max: 28.5
      },
      waitFor: '[data-test="request"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="request"]',
          value: '2000000'
        },
        {
          type: 'type',
          target: '[data-test="mobile"]',
          value: '3000000'
        },
        {
          type: 'type',
          target: '[data-test="http"]',
          value: '3100000'
        },
        {
          type: 'type',
          target: '[data-test="email"]',
          value: '101000'
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '200'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
