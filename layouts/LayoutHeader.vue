<template>
  <header class="header">
    <div class="header-container">
      <nuxt-link to="/detail/" class="cart">
        <div class="cart-total">
          <span class="cart-label">合計</span>
          <ServicePartsPrice :price="total" mod="large" />
        </div>
        <span class="cart-link">内訳</span>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'LayoutHeader',
  components: { ServicePartsPrice, ExternalLink, Logo },
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['colorRatio'])
  }
}
</script>
