<template>
  <div class="app">
    <div class="container">
      <LayoutMenu />
      <div class="contents">
        <nuxt/>
        <LayoutFooter />
      </div>
      <CartIndex :total="$store.state.total.jpy" />
      <div class="container-frame"></div>
    </div>
    <ErrorModal :is-visible="$store.state.error.isVisible" :message="$store.state.error.message" />
  </div>
</template>

<script>
import parseUrl from 'url-parse'
import serviceConfig from '@/config/service'
import LayoutMenu from '@/layouts/LayoutMenu'
import LayoutFooter from '@/layouts/LayoutFooter'
import CartIndex from '@/components/cart/CartIndex'
import ErrorModal from '@/components/error/ErrorModal'
import { fetchZ } from '@/api'

export default {
  components: {
    LayoutMenu,
    LayoutFooter,
    CartIndex,
    ErrorModal
  },
  mounted() {
    const { query } = parseUrl(location.href, true)

    if (query && query.z) {
      this.$store.dispatch('fetchZ', { fetchZ, hash: query.z, serviceConfig })
    }
  }
}
</script>
