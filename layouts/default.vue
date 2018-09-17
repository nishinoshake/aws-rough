<template>
  <div class="app">
    <div class="container">
      <LayoutMenuPC />
      <LayoutMenuSP />
      <div class="contents">
        <nuxt/>
        <LayoutFooter />
      </div>
      <CartIndex :total="state.total.jpy" />
    </div>
    <ErrorModal :error="state.error.fetch" />
  </div>
</template>

<script>
import LayoutMenuPC from '@/layouts/LayoutMenuPC'
import LayoutMenuSP from '@/layouts/LayoutMenuSP'
import LayoutFooter from '@/layouts/LayoutFooter'
import CartIndex from '@/components/cart/CartIndex'
import ErrorModal from '@/components/error/ErrorModal'
import serviceConfig from '@/config/service'
import store from '@/stores'
import { fetchPrice, fetchFx } from '../api'

let WebFont

if (process.browser) {
  WebFont = require('webfontloader')
}

export default {
  components: {
    LayoutMenuPC,
    LayoutMenuSP,
    LayoutFooter,
    CartIndex,
    ErrorModal
  },
  data() {
    return {
      state: store.state
    }
  },
  created() {
    store.setInitialTables(serviceConfig)
    store.fetchAll({ fetchPrice, fetchFx })
  },
  mounted() {
    WebFont.load({
      google: {
        families: ['Lato:400,700', 'Ramabhadra']
      }
    })
  }
}
</script>
