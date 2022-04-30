export default {
  path: '/cloudwatch/',
  useCases: [
    {
      name: 'CloudWatchの計算結果が想定内',
      range: {
        min: 1850,
        max: 1900
      },
      waitFor: '[data-test="metrics"]',
      actions: [
        {
          type: 'type',
          target: '[data-test="metrics"]',
          value: '2345'
        },
        {
          type: 'type',
          target: '[data-test="dashboard"]',
          value: '80'
        },
        {
          type: 'type',
          target: '[data-test="logCollect"]',
          value: '1024'
        },
        {
          type: 'type',
          target: '[data-test="GetMetricData"]',
          value: '2000000'
        },
        {
          type: 'type',
          target: '[data-test="GetMetricWidgetImage"]',
          value: '500000'
        },
        {
          type: 'type',
          target: '[data-test="otherApi"]',
          value: '3000000'
        },
        {
          type: 'type',
          target: '[data-test="standardAlarm"]',
          value: '400'
        },
        {
          type: 'type',
          target: '[data-test="highResolutionAlarm"]',
          value: '200'
        }
      ],
      price: {
        target: '[data-test="service-calc"] [data-test="price"]'
      }
    }
  ]
}
