<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-bar">
        <p class="footer-logo">
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </p>
        <div class="footer-action">
          <nuxt-link to="/detail/" class="cart">
            <div class="cart-total">
              <span class="cart-label">合計</span>
              <ServicePartsPrice :price="total" mod="large" />
              <span class="cart-detail">
                <span
                  v-for="(ratio, color) in colorRatio"
                  :key="color"
                  :class="`cart-detail-item mod-${color}`"
                  :style="{ width: `${ratio}%` }"
                ></span>
              </span>
            </div>
            <span class="cart-link">内訳</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'LayoutFooter',
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
