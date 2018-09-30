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
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="engine"] select',
          value: 'MySQL'
        },
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'db.r4.large'
        },
        {
          type: 'type',
          target: 'td[data-name="replica"] input',
          value: '1'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '500'
        },
        {
          type: 'type',
          target: 'td[data-name="io"] input',
          value: '1000000000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    },
    // PostgreSQL
    {
      name: 'Aurora-PostgreSQLの計算結果が想定内',
      range: {
        min: 32970,
        max: 33000
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="engine"] select',
          value: 'PostgreSQL'
        },
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'db.r4.16xlarge'
        },
        {
          type: 'type',
          target: 'td[data-name="replica"] input',
          value: '3'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '1000'
        },
        {
          type: 'type',
          target: 'td[data-name="io"] input',
          value: '300000000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
