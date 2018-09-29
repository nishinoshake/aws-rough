export default {
  name: 'Lambda',
  path: '/lambda/',
  useCases: [
    {
      range: {
        min: 150,
        max: 200
      },
      waitFor: 'td[data-name="request"]',
      actions: [
        {
          type: 'type',
          target: 'td[data-name="request"] input',
          value: '100000000'
        },
        {
          type: 'type',
          target: 'td[data-name="memory"] input',
          value: '10000000'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
