export default {
  path: '/dynamodb/',
  useCases: [
    {
      name: 'DynamoDBのプロビジョン済みキャパシティの計算結果が想定内',
      range: {
        min: 880,
        max: 950
      },
      waitFor: '[data-test="storage"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="mode"]',
          value: 'プロビジョン済み'
        },
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
    },
    {
      name: 'DynamoDBのオンデマンドキャパシティの計算結果が想定内',
      range: {
        min: 750,
        max: 800
      },
      waitFor: '[data-test="storage"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="mode"]',
          value: 'オンデマンド'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="write"]',
          value: '500000000'
        },
        {
          type: 'type',
          target: '[data-test="read"]',
          value: '1000000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
