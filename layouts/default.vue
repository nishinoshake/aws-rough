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
    <ErrorModal :error="$store.state.error.network" />
  </div>
</template>

<script>
import LayoutMenuPC from '@/layouts/LayoutMenuPC'
import LayoutMenuSP from '@/layouts/LayoutMenuSP'
import LayoutFooter from '@/layouts/LayoutFooter'
import CartIndex from '@/components/cart/CartIndex'
import ErrorModal from '@/components/error/ErrorModal'
import serviceConfig from '@/config/service'
import { fetchPrice, fetchFx } from '../api'

export default {
  components: {
    LayoutMenuPC,
    LayoutMenuSP,
    LayoutFooter,
    CartIndex,
    ErrorModal
  },
  created() {
    this.$store.commit('SET_INITIAL_TABLES', { serviceConfig })
    this.$store.dispatch('fetchAll', { fetchPrice, fetchFx })
  }
}
</script>
