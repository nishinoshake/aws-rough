export default {
  path: '/ec2/',
  useCases: [
    {
      name: 'EC2の計算結果が想定内',
      range: {
        min: 730,
        max: 800
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 't2.large'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '3'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '1000'
        },
        {
          type: 'type',
          target: 'td[data-name="transfer"] input',
          value: '1000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
