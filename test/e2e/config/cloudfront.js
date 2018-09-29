export default {
  name: 'CloudFront',
  path: '/cloudfront/',
  useCases: [
    {
      range: {
        min: 220,
        max: 290
      },
      waitFor: 'td[data-name="transfer"]',
      actions: [
        {
          type: 'type',
          target: 'td[data-name="transfer"] input',
          value: '1000'
        },
        {
          type: 'type',
          target: 'td[data-name="request"] input',
          value: '100000000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
