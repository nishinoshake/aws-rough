export default {
  path: '/fargate/',
  useCases: [
    {
      name: 'Fargateの計算結果が想定内',
      range: {
        min: 85,
        max: 95
      },
      waitFor: '[data-test="unit"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="cpu"]',
          value: '2'
        },
        {
          type: 'select',
          target: '[data-test="memory"]',
          value: '4'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
