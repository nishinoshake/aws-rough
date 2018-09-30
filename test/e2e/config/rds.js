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
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'db.t2.large'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '3'
        },
        {
          type: 'select',
          target: 'td[data-name="az"] select',
          value: 'Multi-AZ'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '1000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    },
    {
      name: 'RDS-MySQLの高額インスタンスの計算結果が想定内',
      range: {
        min: 6670,
        max: 6700
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'db.r4.16xlarge'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '1'
        },
        {
          type: 'select',
          target: 'td[data-name="az"] select',
          value: 'Single-AZ'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '20'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    },
    // MariaDB
    {
      name: 'RDS-MariaDBの計算結果が想定内',
      range: {
        min: 830,
        max: 870
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="engine"] select',
          value: 'MariaDB'
        },
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'db.t2.micro'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '7'
        },
        {
          type: 'select',
          target: 'td[data-name="az"] select',
          value: 'Multi-AZ'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '300'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    },
    // PostgreSQL
    {
      name: 'RDS-PostgreSQLの計算結果が想定内',
      range: {
        min: 460,
        max: 500
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
          value: 'db.t2.medium'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '5'
        },
        {
          type: 'select',
          target: 'td[data-name="az"] select',
          value: 'Single-AZ'
        },
        {
          type: 'type',
          target: 'td[data-name="storage"] input',
          value: '100'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
