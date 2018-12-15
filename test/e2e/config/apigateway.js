export default {
  path: '/apigateway/',
  useCases: [
    {
      name: 'API Gatewayの計算結果が想定内',
      range: {
        min: 3940,
        max: 3970
      },
      waitFor: '[data-test="request"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="request"]',
          value: '500000000' // 5億
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '3000'
        },
        {
          type: 'select',
          target: '[data-test="cache"]',
          value: '118'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
