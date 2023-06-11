require('dotenv').config()

module.exports = {
  server: {
    host: '0.0.0.0'
  },
  target: 'static',
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
        content: 'https://aws-rough.cc/img/og.png?d=2022012402'
      },
      {
        property: 'og:site_name',
        content: 'ざっくりAWS'
      },
      {
        property: 'og:image',
        content: 'https://aws-rough.cc/img/og.png?d=2022012402'
      }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
      }
    ]
  },
  loading: false,
  css: ['@/assets/scss/index.scss'],
  env: {
    homeUrl: process.env.HOME_URL || 'https://aws-rough.cc',
    apiUrl: process.env.API_URL || 'https://aws-api.noplan.cc',
    storageUrl: process.env.STORAGE_URL || 'https://storage.aws-rough.cc'
  },
  modules: [
    '@nuxtjs/google-gtag',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-7912727364342998'
      }
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],
  plugins: [
    { src: '~/plugins/vue-highlightjs', ssr: false },
    { src: '~/plugins/focus-visible', ssr: false }
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
    }
  },
  'google-gtag': {
    id: 'G-3RP0RDS9QJ'
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
  sitemap: {
    hostname: 'https://aws-rough.cc',
    trailingSlash: true,
    exclude: ['/error/**']
  },
  workbox: {
    dev: true
  }
}
