export default {
  name: 'DynamoDB',
  path: '/dynamodb/',
  useCases: [
    {
      range: {
        min: 880,
        max: 950
      },
      waitFor: 'td[data-name="storage"]',
      actions: [
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '1000'
        },
        {
          type: 'type',
          target: 'td[data-name="rcu"] input',
          value: '1000'
        },
        {
          type: 'type',
          target: 'td[data-name="wcu"] input',
          value: '1000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
