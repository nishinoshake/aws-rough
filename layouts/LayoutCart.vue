<template>
  <nuxt-link to="/detail/" class="cart">
    <div class="cart-total">
      <div class="cart-total-inner">
        <span class="cart-label">合計</span>
        <ServicePartsPrice :price="total" mod="large" />
      </div>
    </div>
    <span class="cart-detail">内訳</span>
  </nuxt-link>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'

export default {
  name: 'LayoutHeader',
  components: { ServicePartsPrice, ExternalLink },
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isVisible: false,
      observer: null
    }
  }
}
</script>
