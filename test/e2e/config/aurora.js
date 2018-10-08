export default {
  path: '/aurora/',
  useCases: [
    // MySQL
    {
      name: 'Aurora-MySQLの計算結果が想定内',
      range: {
        min: 800,
        max: 820
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="engine"]',
          value: 'MySQL'
        },
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'db.r4.large'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '2'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '500'
        },
        {
          type: 'type',
          target: '[data-test="io"]',
          value: '1000000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    // PostgreSQL
    {
      name: 'Aurora-PostgreSQLの計算結果が想定内',
      range: {
        min: 32970,
        max: 33000
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="engine"]',
          value: 'PostgreSQL'
        },
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'db.r4.16xlarge'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '4'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '1000'
        },
        {
          type: 'type',
          target: '[data-test="io"]',
          value: '300000000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
