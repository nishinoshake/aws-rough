export default {
  path: '/dynamodb/',
  useCases: [
    {
      name: 'DynamoDBの計算結果が想定内',
      range: {
        min: 880,
        max: 950
      },
      waitFor: '[data-test="storage"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="rcu"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="wcu"]',
          value: '1000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
