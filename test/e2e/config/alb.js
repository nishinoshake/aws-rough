export default {
  path: '/elb/',
  useCases: [
    {
      name: 'ALBの計算結果が想定内',
      range: {
        min: 100,
        max: 110
      },
      waitFor: 'div[data-name="alb"] td[data-name="unit"]',
      actions: [
        {
          type: 'type',
          target: 'div[data-name="alb"] td[data-name="unit"] input',
          value: '2'
        },
        {
          type: 'type',
          target: 'div[data-name="alb"] td[data-name="lcu"] input',
          value: '6'
        }
      ],
      price: {
        target: 'div[data-name="alb"] span[data-name="price"]'
      }
    }
  ]
}
