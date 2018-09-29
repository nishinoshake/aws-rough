export default {
  path: '/s3/',
  useCases: [
    {
      name: 'S3の計算結果が想定内',
      range: {
        min: 640,
        max: 700
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
          target: 'td[data-name="transfer"] input',
          value: '1000'
        },
        {
          type: 'type',
          target: 'td[data-name="read"] input',
          value: '100000000'
        },
        {
          type: 'type',
          target: 'td[data-name="write"] input',
          value: '100000000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
