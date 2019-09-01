<template>
  <footer class="footer">
    <div class="footer-bar">
      <ul class="footer-nav-list">
        <li class="footer-nav-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="footer-nav-item">
          <nuxt-link to="/about/">About</nuxt-link>
        </li>
        <li class="footer-nav-item">
          <a href="https://github.com/nishinoshake/aws-rough">GitHub</a>
        </li>
      </ul>
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
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'

export default {
  name: 'LayoutFooter',
  components: { ServicePartsPrice },
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
