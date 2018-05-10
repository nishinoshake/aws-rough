<template>
  <div class="app">
    <transition name="anime-fadein">
      <div v-if="state.isLoaded" class="container">
        <LayoutMenuPC />
        <LayoutMenuSP />
        <div class="contents">
          <router-view />
          <LayoutFooter />
        </div>
        <CartIndex :total="state.total.jpy" />
      </div>
    </transition>

    <ErrorModal :error="state.error.fetch" />
  </div>
</template>

<script>
import LayoutMenuPC from '@/components/layout/LayoutMenuPC'
import LayoutMenuSP from '@/components/layout/LayoutMenuSP'
import LayoutFooter from '@/components/layout/LayoutFooter'
import CartIndex from '@/components/cart/CartIndex'
import ErrorModal from '@/components/error/ErrorModal'
import serviceConfig from '@/config/service'
import store from '@/stores'
import { fetchPrice, fetchFx } from '../api'

export default {
  name: 'App',
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
  beforeMount() {
    store.setInitialTables(serviceConfig)
    store.fetchAll({ fetchPrice, fetchFx })
  }
}
</script>
