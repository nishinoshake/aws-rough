<template>
  <p :class="['price', { [`mod-${mod}`]: mod }]">
    <span :class="['price-number', { 'mod-expensive': isExpensive }]" data-test="price">{{ yen }}</span>
    <span class="price-unit">円/月</span>
  </p>
</template>

<script>
import anime from 'animejs'
import { formatPrice } from '@/lib/price'

export default {
  name: 'ServicePartsPrice',
  props: {
    price: {
      type: Number,
      required: true
    },
    mod: {
      type: String
    }
  },
  data() {
    return {
      tweenPrice: 0
    }
  },
  computed: {
    yen() {
      return formatPrice(this.tweenPrice)
    },
    isExpensive() {
      return this.price >= Math.pow(10, 7)
    }
  },
  watch: {
    price: {
      handler(newPrice, oldPrice) {
        if (this.disableTween(oldPrice)) {
          this.tweenPrice = newPrice
          return
        }

        let obj = { price: oldPrice }

        anime({
          targets: obj,
          price: newPrice,
          duration: 200,
          easing: 'linear',
          update: () => {
            this.tweenPrice = obj.price
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    disableTween(oldPrice) {
      if (
        !process.browser ||
        oldPrice === undefined ||
        navigator.userAgent.toLowerCase().indexOf('headlesschrome') > -1
      ) {
        return true
      }

      return false
    }
  }
}
</script>
