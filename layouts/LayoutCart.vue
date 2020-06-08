<template>
  <transition name="cart">
    <nuxt-link v-if="isVisible" to="/detail/" class="cart">
      <div class="cart-total">
        <div class="cart-total-inner">
          <span class="cart-label">合計</span>
          <ServicePartsPrice :price="total" mod="large" />
        </div>
      </div>
      <span class="cart-detail">内訳</span>
    </nuxt-link>
  </transition>
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
      observer: null
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    isVisible() {
      const hideNames = []

      if (hideNames.includes(this.routeName)) {
        return false
      }

      return true
    }
  }
}
</script>
