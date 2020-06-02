require('dotenv').config()

module.exports = {
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'ざっくりAWS',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'google-site-verification',
        content: 'ClJCk2KjauaZyRoNcwAeHI-oDC6aS8dgZqnb3u0EKUI'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image',
        content: 'https://aws-rough.cc/img/og.png?2018040902'
      },
      {
        property: 'og:site_name',
        content: 'ざっくりAWS'
      },
      {
        property: 'og:image',
        content: 'https://aws-rough.cc/img/og.png?2018040902'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Fira+Code&family=Lora&display=swap'
      }
    ]
  },
  loading: false,
  css: ['@/assets/scss/index.scss'],
  env: {
    homeUrl: process.env.HOME_URL || 'https://aws-rough.cc',
    apiUrl: process.env.API_URL || 'https://aws-api.noplan.cc',
    storageUrl: process.env.STORAGE_URL || 'http://aws-storage.noplan.cc.s3-website-ap-northeast-1.amazonaws.com'
  },
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-53153991-13'
      }
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  plugins: [
    { src: '~/plugins/vue-google-adsense', ssr: false },
    { src: '~/plugins/vue-highlightjs', ssr: false }
  ],
  build: {
    extend(config, { isDev }) {
      if (config.externals) {
        config.externals.moment = 'moment'
      } else {
        config.externals = {
          moment: 'moment'
        }
      }

      // SVGを画像ではなく要素として使いたかったのでvue-svg-loaderを追加
      config.module.rules = config.module.rules.map(rule => {
        if (rule.test.toString().indexOf('svg') > -1) {
          return {
            ...rule,
            test: /\.(png|jpe?g|gif|webp)$/
          }
        }
        return rule
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{ removeTitle: false }]
          }
        }
      })

      // テストに使用しているdata-test属性をプロダクション向けの静的生成時に削除
      if (!isDev && process.env.AWSROUGH_GENERATE === 'production') {
        const tagAttributesForTesting = ['data-test', ':data-test']
        const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')

        vueLoader.options.compilerModules = [
          {
            preTransformNode: astEl => {
              const { attrsMap, attrsList } = astEl

              tagAttributesForTesting.forEach(attr => {
                if (attrsMap[attr]) {
                  delete attrsMap[attr]
                  const attrsListIndex = attrsList.findIndex(x => x.name === attr)
                  attrsList.splice(attrsListIndex, 1)
                }
              })

              return astEl
            }
          }
        ]
      }
    }
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active-exact'
  },
  manifest: {
    name: 'ざっくりAWS',
    short_name: 'ざっくりAWS',
    lang: 'ja',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: '/index.html'
  },
  workbox: {
    dev: true
  }
}
