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

export default {
  components: {
    LayoutMenuPC,
    LayoutMenuSP,
    LayoutFooter,
    CartIndex,
    ErrorModal
  }
}
</script>
