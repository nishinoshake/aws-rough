<template>
  <div class="cart">
    <section class="cart-total">
      <h2 class="cart-total-title">合計</h2>
      <ServicePartsPrice :price="total" mod="large" />
    </section>
    <router-link to="detail" class="cart-detail">内訳</router-link>
  </div>
</template>

<script>
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'

export default {
  name: 'CartIndex',
  components: { ServicePartsPrice },
  props: {
    total: {
      type: Number,
      required: true
    }
  }
}
</script>
