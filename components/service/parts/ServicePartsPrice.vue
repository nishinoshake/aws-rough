<template>
  <p :class="['price', {[`mod-${mod}`]: mod}]">
    <span class="price-number">{{ yen }}</span>
    <span class="price-unit">円</span>
  </p>
</template>

<script>
import store from '@/stores'
import { formatPrice } from '@/stores/price'

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
  computed: {
    yen() {
      return formatPrice(this.price)
    }
  }
}
</script>
