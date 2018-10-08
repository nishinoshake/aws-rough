export default {
  path: '/elb/',
  useCases: [
    {
      name: 'NLBの計算結果が想定内',
      range: {
        min: 410,
        max: 430
      },
      waitFor: '[data-test="nlb"] [data-test="unit"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="nlb"] [data-test="unit"]',
          value: '4'
        },
        {
          type: 'type',
          target: '[data-test="nlb"] [data-test="lcu"]',
          value: '20'
        }
      ],
      price: {
        target: '[data-test="nlb"] [data-test="price"]'
      }
    }
  ]
}
