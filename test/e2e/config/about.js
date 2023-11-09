export default {
  path: '/about',
  useCases: [
    {
      name: '日本円の為替レートが想定内',
      range: {
        min: 100,
        max: 200
      },
      waitFor: '[data-test="yen"]',
      actions: [],
      price: {
        target: '[data-test="yen"]'
      }
    }
  ]
}
