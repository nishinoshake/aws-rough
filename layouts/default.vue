<template>
  <div :class="['l-app', `is-${routeName}`]">
    <LayoutHeader />
    <main class="l-main" ref="main">
      <div class="l-container">
        <LayoutMenu />
        <div class="l-contents">
          <nuxt />
        </div>
      </div>
    </main>
    <LayoutFooter />
    <ErrorModal :is-visible="$store.state.error.isVisible" :message="$store.state.error.message" />
  </div>
</template>

<script>
import parseUrl from 'url-parse'
import serviceConfig from '@/config/service'
import LayoutCart from '@/layouts/LayoutCart'
import LayoutMenu from '@/layouts/LayoutMenu'
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutFooter from '@/layouts/LayoutFooter'
import ErrorModal from '@/components/ErrorModal'
import { fetchZ } from '@/api'

export default {
  components: {
    LayoutCart,
    LayoutMenu,
    LayoutHeader,
    LayoutFooter,
    ErrorModal
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  mounted() {
    const { query } = parseUrl(location.href, true)
    const hash = this.$route.hash

    if (query && query.z) {
      this.$store.dispatch('fetchZ', { fetchZ, hash: query.z, serviceConfig })
    }

    if (hash && hash.match(/^#.+$/)) {
      const target = document.querySelector(hash)

      if (target) {
        target.scrollIntoView()
      }
    }

    // アドセンスよ・・・
    const observer = new MutationObserver(() => {
      if (this.$refs.main.style) {
        if (this.$refs.main.style.minHeight === '0px') {
          this.$refs.main.style.minHeight = '100vh'
        }
      }
    })

    observer.observe(this.$refs.main, {
      attributes: true,
      attributeFilter: ['style']
    })

    console.log(`%c========================================`, 'padding:2px 0;font-size:16px;')
    console.log(
      `%c円安が進んでるので、コンソールでドル表示はじめました。`,
      'padding:6px 0;font-weight:bold;text-transform:capitalize;font-size:16px;'
    )
    console.log(`%c========================================`, 'padding:2px 0;font-size:16px;')
    console.log('「えっ、AWSの料金が高い...」')
    console.log('それ、もしかしたら円安が原因かもしれません。')
    console.log('')
  }
}
</script>
