<template>
  <transition name="cart">
    <nuxt-link v-if="isVisible" to="/detail/" class="cart">
      <div class="cart-total">
        <span class="cart-label">合計</span>
        <ServicePartsPrice :price="total" mod="large" />
      </div>
      <span class="cart-link">内訳</span>
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
      isVisible: false,
      observer: null
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  watch: {
    routeName(val) {
      if (!this.isVisible) {
        this.isVisible = true

        if (this.observer) {
          this.observer.disconnect()
          this.observer = null
        }
      }
    }
  },
  mounted() {
    if (this.routeName === 'index') {
      this.observer = new IntersectionObserver(
        entries => {
          console.log('in!!!')
          if (entries[0].isIntersecting) {
            this.isVisible = true

            this.observer.disconnect()
            this.observer = null
          }
        },
        {
          threshold: 0
        }
      )

      this.observer.observe(document.getElementById('footer'))
    } else {
      this.isVisible = true
    }
  }
}
</script>
