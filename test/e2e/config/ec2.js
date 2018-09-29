export default {
  name: 'EC2',
  path: '/ec2/',
  useCases: [
    {
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
