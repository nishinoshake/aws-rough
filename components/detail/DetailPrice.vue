<template>
<div class="detail-price">
  <ul class="detail-price-list">
    <li v-for="(service, index) in services" :key="service.name" class="detail-price-item">
      <nuxt-link :to="getServiceHref(service.key)" class="detail-price-link">
        <span class="detail-price-color" :style="{backgroundColor: colors[index]}" />
        <p class="detail-price-name">{{ service.name }}</p>
        <ServicePartsPrice :price="service.total" mod="large" />
      </nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

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
    }
  },
  methods: {
    getServiceHref(serviceKey) {
      return getService(serviceKey, serviceConfig).href
    }
  }
}
</script>
