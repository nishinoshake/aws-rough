<template>
  <div :class="['detail-skelton', { 'is-visible': isVisible }]" aria-hidden="true">
    <div class="detail-price">
      <ul class="detail-price-list">
        <li class="detail-price-item">
          <span class="detail-price-link">
            <span class="detail-price-color" />
            <p class="detail-price-name">AWS</p>
            <Price :price="0" mod="large" />
          </span>
        </li>
      </ul>
    </div>
    <div class="detail-chart"></div>
  </div>
</template>

<script>
import Price from '@/components/Price'

export default {
  name: 'DetailSkelton',
  components: { Price },
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  }
}
</script>
