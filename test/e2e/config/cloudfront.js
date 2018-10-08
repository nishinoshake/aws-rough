export default {
  path: '/cloudfront/',
  useCases: [
    {
      name: 'CloudFront-httpの計算結果が想定内',
      range: {
        min: 420,
        max: 440
      },
      waitFor: '[data-test="transfer"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="protocol"]',
          value: 'HTTP'
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '3000'
        },
        {
          type: 'type',
          target: '[data-test="request"]',
          value: '100000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    {
      name: 'CloudFront-httpsの計算結果が想定内',
      range: {
        min: 450,
        max: 470
      },
      waitFor: '[data-test="transfer"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="protocol"]',
          value: 'HTTPS'
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '3000'
        },
        {
          type: 'type',
          target: '[data-test="request"]',
          value: '100000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
