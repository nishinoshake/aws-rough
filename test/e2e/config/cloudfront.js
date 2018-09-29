export default {
  path: '/cloudfront/',
  useCases: [
    {
      name: 'CloudFront-httpの計算結果が想定内',
      range: {
        min: 420,
        max: 440
      },
      waitFor: 'td[data-name="transfer"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="protocol"] select',
          value: 'HTTP'
        },
        {
          type: 'type',
          target: 'td[data-name="transfer"] input',
          value: '3000'
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
    },
    {
      name: 'CloudFront-httpsの計算結果が想定内',
      range: {
        min: 450,
        max: 470
      },
      waitFor: 'td[data-name="transfer"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="protocol"] select',
          value: 'HTTPS'
        },
        {
          type: 'type',
          target: 'td[data-name="transfer"] input',
          value: '3000'
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
