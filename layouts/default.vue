<template>
  <div :class="`app page-${routeName}`">
    <div class="container">
      <div class="main">
        <div class="contents">
          <div class="page">
            <nuxt />
          </div>
        </div>
        <LayoutMenu />
      </div>
    </div>
    <LayoutHeader />
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
import ErrorModal from '@/components/error/ErrorModal'
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
      document.querySelector(hash).scrollIntoView()
    }
  }
}
</script>
