export default {
  path: '/ses/',
  useCases: [
    {
      name: 'SESの計算結果が想定内',
      range: {
        min: 1500,
        max: 1510
      },
      waitFor: '[data-test="sendEc2"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="sendEc2"]',
          value: '2000000'
        },
        {
          type: 'type',
          target: '[data-test="sendGeneral"]',
          value: '1000000'
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="recieve"]',
          value: '3000000'
        },
        {
          type: 'type',
          target: '[data-test="recieveChunk"]',
          value: '512'
        },
        {
          type: 'type',
          target: '[data-test="dedicatedIp"]',
          value: '10'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
