export default {
  path: '/ec2/',
  useCases: [
    {
      name: 'EC2の計算結果が想定内',
      range: {
        min: 730,
        max: 800
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 't2.large'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '3'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '1000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    {
      name: 'EC2の高額インスタンスの計算結果が想定内',
      range: {
        min: 24000,
        max: 26000
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'p3.16xlarge'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '1'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '0'
        },
        {
          type: 'type',
          target: '[data-test="transfer"]',
          value: '0'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
