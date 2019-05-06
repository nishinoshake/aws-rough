export default {
  path: '/vpc/',
  useCases: [
    {
      name: 'NAT Gatewayの計算結果が想定内',
      range: {
        min: 50,
        max: 53
      },
      waitFor: '[data-test="natgw"] [data-test="unit"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="natgw"] [data-test="unit"]',
          value: '1'
        },
        {
          type: 'type',
          target: '[data-test="natgw"] [data-test="processedData"]',
          value: '100'
        }
      ],
      price: {
        target: '[data-test="natgw"] [data-test="price"]'
      }
    }
  ]
}
