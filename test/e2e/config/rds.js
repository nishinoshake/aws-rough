export default {
  path: '/rds/',
  useCases: [
    // MySQL
    {
      name: 'RDS-MySQLの計算結果が想定内',
      range: {
        min: 1710,
        max: 1780
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'db.t2.large'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '3'
        },
        {
          type: 'select',
          target: '[data-test="az"]',
          value: 'Multi-AZ'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '1000'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    {
      name: 'RDS-MySQLの高額インスタンスの計算結果が想定内',
      range: {
        min: 6670,
        max: 6700
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'db.r4.16xlarge'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '1'
        },
        {
          type: 'select',
          target: '[data-test="az"]',
          value: 'Single-AZ'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '20'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    // MariaDB
    {
      name: 'RDS-MariaDBの計算結果が想定内',
      range: {
        min: 830,
        max: 870
      },
      waitFor: '[data-test="instance"]',
      actions: [
        {
          type: 'select',
          target: '[data-test="engine"]',
          value: 'MariaDB'
        },
        {
          type: 'select',
          target: '[data-test="instance"]',
          value: 'db.t2.micro'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '7'
        },
        {
          type: 'select',
          target: '[data-test="az"]',
          value: 'Multi-AZ'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '300'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    },
    // PostgreSQL
    {
      name: 'RDS-PostgreSQLの計算結果が想定内',
      range: {
        min: 460,
        max: 500
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
          value: 'db.t2.medium'
        },
        {
          type: 'type',
          target: '[data-test="unit"]',
          value: '5'
        },
        {
          type: 'select',
          target: '[data-test="az"]',
          value: 'Single-AZ'
        },
        {
          type: 'type',
          target: '[data-test="storage"]',
          value: '100'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
