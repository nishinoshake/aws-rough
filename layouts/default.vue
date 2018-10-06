<template>
  <div class="app">
    <div class="container">
      <LayoutMenuPC />
      <LayoutMenuSP />
      <div class="contents">
        <nuxt/>
        <LayoutFooter />
      </div>
      <CartIndex :total="$store.state.total.jpy" />
    </div>
    <ErrorModal :is-visible="$store.state.error.isVisible" :message="$store.state.error.message" />
  </div>
</template>

<script>
import parseUrl from 'url-parse'
import serviceConfig from '@/config/service'
import LayoutMenuPC from '@/layouts/LayoutMenuPC'
import LayoutMenuSP from '@/layouts/LayoutMenuSP'
import LayoutFooter from '@/layouts/LayoutFooter'
import CartIndex from '@/components/cart/CartIndex'
import ErrorModal from '@/components/error/ErrorModal'
import { fetchZ } from '@/api'

export default {
  components: {
    LayoutMenuPC,
    LayoutMenuSP,
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
