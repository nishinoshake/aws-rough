export default {
  path: '/elb/',
  useCases: [
    {
      name: 'ELBの計算結果が想定内',
      range: {
        min: 78,
        max: 88
      },
      waitFor: 'td[data-name="unit"]',
      actions: [
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '3'
        },
        {
          type: 'type',
          target: 'td[data-name="transfer"] input',
          value: '3000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
