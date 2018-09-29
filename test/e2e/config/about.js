export default {
  name: 'このサイトについて',
  path: '/about/',
  useCases: [
    {
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
