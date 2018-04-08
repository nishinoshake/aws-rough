<template>
  <h1 class="service-title">
    <ServicePartsIcon :name="service.key" class="service-title-icon" />
    <span class="service-title-name">{{ service.name }}</span>
  </h1>
</template>

<script>
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'

export default {
  name: 'ServiceTemplateTitle',
  components: { ServicePartsIcon },
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>
