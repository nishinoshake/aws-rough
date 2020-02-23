<template>
  <h1 class="title-page">
    <span class="title-page-name">{{ service.name }}</span>
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
