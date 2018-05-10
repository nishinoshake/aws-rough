module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://aws.noplan.cc/img/og.png?2018040902'
      },
      { property: 'og:site_name', content: 'ざっくりAWS' },
      {
        property: 'og:image',
        content: 'https://aws.noplan.cc/img/og.png?2018040902'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700|Ramabhadra'
      }
    ]
  },
  build: {
    extend (config) {
      const urlLoader = config.module.rules.find(
        rule => rule.loader === 'url-loader'
      )
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  },
  css: ['@/assets/scss/index.scss']
}
