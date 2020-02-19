<template>
  <div :class="`app page-${routeName}`">
    <div class="container">
      <LayoutHeader :total="$store.state.total.jpy" />
      <div class="main">
        <LayoutMenu />
        <div class="contents">
          <nuxt />
        </div>
      </div>
    </div>
    <ErrorModal :is-visible="$store.state.error.isVisible" :message="$store.state.error.message" />
  </div>
</template>

<script>
import parseUrl from 'url-parse'
import serviceConfig from '@/config/service'
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutMenu from '@/layouts/LayoutMenu'
import ErrorModal from '@/components/error/ErrorModal'
import { fetchZ } from '@/api'

export default {
  components: {
    LayoutHeader,
    LayoutMenu,
    ErrorModal
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  mounted() {
    const { query } = parseUrl(location.href, true)

    if (query && query.z) {
      this.$store.dispatch('fetchZ', { fetchZ, hash: query.z, serviceConfig })
    }
  }
}
</script>
