export default {
  path: '/about',
  useCases: [
    {
      name: '日本円の為替レートが想定内',
      range: {
        min: 110,
        max: 150
      },
      waitFor: '[data-test="yen"]',
      actions: [],
      price: {
        target: '[data-test="yen"]'
      }
    }
  ]
}
