<template>
  <transition name="l-cart">
    <nuxt-link v-if="isVisible" to="/detail/" class="l-cart">
      <div class="l-cart-total">
        <div class="l-cart-total-inner">
          <span class="l-cart-label">合計</span>
          <Price :price="total" />
        </div>
      </div>
      <span class="l-cart-detail"><span class="sp">内訳</span><span class="pc">料金内訳を見る</span></span>
    </nuxt-link>
  </transition>
</template>

<script>
import ExternalLink from '@/components/ExternalLink'
import Price from '@/components/Price'

export default {
  name: 'LayoutHeader',
  components: { Price, ExternalLink },
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
