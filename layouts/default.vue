<template>
  <div class="app">
    <div class="container">
      <LayoutMenuPC />
      <LayoutMenuSP />
      <div class="contents">
        <nuxt/>
        <LayoutFooter />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutMenuPC from '@/layouts/LayoutMenuPC'
import LayoutMenuSP from '@/layouts/LayoutMenuSP'
import LayoutFooter from '@/layouts/LayoutFooter'
import CartIndex from '@/components/cart/CartIndex'
import ErrorModal from '@/components/error/ErrorModal'
import '@/assets/scss/index.scss'

export default {
  components: {
    LayoutMenuPC,
    LayoutMenuSP,
    LayoutFooter,
    CartIndex,
    ErrorModal
  },
  beforeMount() {
    console.log('hoge')
  }
}
</script>
