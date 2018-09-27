export default {
  name: 'Route53',
  path: '/route53/',
  range: {
    min: 40,
    max: 50
  },
  waitFor: 'td[data-name="hostzone"]',
  actions: [
    {
      type: 'type',
      target: 'td[data-name="hostzone"] input',
      value: '10'
    },
    {
      type: 'type',
      target: 'td[data-name="query"] input',
      value: '100000000'
    }
  ],
  price: {
    target: '.service-calc span[data-name="price"]'
  }
}
