export default {
  name: 'RDS',
  path: '/rds/',
  useCases: [
    // MySQL
    {
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
    // MariaDB
    {
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
