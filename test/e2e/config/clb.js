export default {
  path: '/elb/',
  useCases: [
    {
      name: 'CLBの計算結果が想定内',
      range: {
        min: 290,
        max: 310
      },
      waitFor: '[data-test="clb"] [data-test="unit"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="clb"] [data-test="unit"]',
          value: '3'
        },
        {
          type: 'type',
          target: '[data-test="clb"] [data-test="transfer"]',
          value: '30000'
        }
      ],
      price: {
        target: '[data-test="clb"] [data-test="price"]'
      }
    }
  ]
}
