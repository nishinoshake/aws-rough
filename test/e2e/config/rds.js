export default {
  name: 'RDS',
  path: '/rds/',
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
}
