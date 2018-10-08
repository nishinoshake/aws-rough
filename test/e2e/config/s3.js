export default {
  path: '/s3/',
  useCases: [
    {
      name: 'S3の計算結果が想定内',
      range: {
        min: 640,
        max: 700
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
          target: '[data-test="transfer"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="read"]',
          value: '100000000'
        },
        {
          type: 'type',
          target: '[data-test="write"]',
          value: '100000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
