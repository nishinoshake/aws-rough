export default {
  path: '/elb/',
  useCases: [
    {
      name: 'ALBの計算結果が想定内',
      range: {
        min: 100,
        max: 110
      },
      waitFor: '[data-test="alb"] [data-test="unit"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="alb"] [data-test="unit"]',
          value: '2'
        },
        {
          type: 'type',
          target: '[data-test="alb"] [data-test="lcu"]',
          value: '6'
        }
      ],
      price: {
        target: '[data-test="alb"] [data-test="price"]'
      }
    }
  ]
}
