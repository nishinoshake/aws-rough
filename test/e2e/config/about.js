export default {
  path: '/about',
  useCases: [
    {
      name: '日本円の為替レートが想定内',
      range: {
        min: 80,
        max: 130
      },
      waitFor: '[data-test="yen"]',
      actions: [],
      price: {
        target: '[data-test="yen"]'
      }
    }
  ]
}
