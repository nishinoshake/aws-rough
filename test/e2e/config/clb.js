export default {
  path: '/elb/',
  useCases: [
    {
      name: 'CLBの計算結果が想定内',
      range: {
        min: 290,
        max: 310
      },
      waitFor: 'div[data-name="clb"] td[data-name="unit"]',
      actions: [
        {
          type: 'type',
          target: 'div[data-name="clb"] td[data-name="unit"] input',
          value: '3'
        },
        {
          type: 'type',
          target: 'div[data-name="clb"] td[data-name="transfer"] input',
          value: '30000'
        }
      ],
      price: {
        target: 'div[data-name="clb"] span[data-name="price"]'
      }
    }
  ]
}
