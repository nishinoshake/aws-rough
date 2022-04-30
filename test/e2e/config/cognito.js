export default {
  path: '/cognito/',
  useCases: [
    {
      name: 'Cognitoの計算結果が想定内',
      range: {
        min: 316000,
        max: 318000
      },
      waitFor: '[data-test="mau"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="mau"]',
          value: '123456789'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
