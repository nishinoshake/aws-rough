<template>
  <h1 class="title-page">
    <ServicePartsIcon :name="service.key" class="title-page-icon" />
    <span class="title-page-name">{{ service.name }}</span>
    <span v-if="service.fullname" class="title-page-separator"></span>
    <span v-if="service.fullname" class="title-page-fullname">{{ service.fullname }}</span>
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
