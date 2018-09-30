export default {
  path: '/elb/',
  useCases: [
    {
      name: 'NLBの計算結果が想定内',
      range: {
        min: 410,
        max: 430
      },
      waitFor: 'div[data-name="nlb"] td[data-name="unit"]',
      actions: [
        {
          type: 'type',
          target: 'div[data-name="nlb"] td[data-name="unit"] input',
          value: '4'
        },
        {
          type: 'type',
          target: 'div[data-name="nlb"] td[data-name="lcu"] input',
          value: '20'
        }
      ],
      price: {
        target: 'div[data-name="nlb"] span[data-name="price"]'
      }
    }
  ]
}
