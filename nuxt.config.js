module.exports = {
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
