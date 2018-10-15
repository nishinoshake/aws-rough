<template>
<div class="detail-price">
  <ul class="detail-price-list">
    <li
      v-for="(service, i) in services"
      :key="service.name"
      :class="['detail-price-item', {'is-active': i === selectedIndex}]"
      @mouseenter="handleMouseEnter(i)"
      @mouseleave="handleMouseLeave(i)"
      @click="handleClick(i)"
    >
      <span class="detail-price-color" :style="{backgroundColor: colors[i]}" />
      <p class="detail-price-name">{{ service.name }}</p>
      <ServicePartsPrice :price="service.total" mod="large" />
    </li>
  </ul>
</div>
</template>

<script>
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'

export default {
  name: 'DetailPrice',
  components: { ServicePartsPrice },
  props: {
    services: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    selectedIndex: Number,
    mouseEnterHandler: Function,
    mouseLeaveHandler: Function,
    clickHandler: Function
  },
  computed: {},
  methods: {
    handleMouseEnter(index) {
      if (this.mouseEnterHandler) {
        this.mouseEnterHandler(index)
      }
    },
    handleMouseLeave(index) {
      if (this.mouseEnterHandler) {
        this.mouseLeaveHandler(index)
      }
    },
    handleClick(index) {
      if (this.clickHandler) {
        this.clickHandler(index)
      }
    }
  }
}
</script>
