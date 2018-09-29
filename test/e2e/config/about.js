export default {
  path: '/about/',
  useCases: [
    {
      name: '日本円の為替レートが想定内',
      range: {
        min: 80,
        max: 130
      },
      waitFor: 'span[data-name="yen"]',
      actions: [],
      price: {
        target: 'span[data-name="yen"]'
      }
    }
  ]
}
