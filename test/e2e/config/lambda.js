export default {
  path: '/lambda/',
  useCases: [
    {
      name: 'Lambdaの計算結果が想定内',
      range: {
        min: 150,
        max: 200
      },
      waitFor: '[data-test="request"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="request"]',
          value: '100000000'
        },
        {
          type: 'type',
          target: '[data-test="memory"]',
          value: '10000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
