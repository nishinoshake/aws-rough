<template>
  <nuxt-link to="/detail/" class="cart">
    <div class="cart-total">
      <span class="cart-label">合計</span>
      <ServicePartsPrice :price="total" mod="large" />
    </div>
    <span class="cart-link">内訳</span>
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
  }
}
</script>
