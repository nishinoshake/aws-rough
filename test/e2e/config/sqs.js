export default {
  path: '/sqs/',
  useCases: [
    {
      name: 'SQSの計算結果が想定内',
      range: {
        min: 51,
        max: 52
      },
      waitFor: '[data-test="standard"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="standard"]',
          value: '30000000'
        },
        {
          type: 'type',
          target: '[data-test="fifo"]',
          value: '80000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
