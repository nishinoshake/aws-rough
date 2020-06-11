<template>
  <h1 class="title-page">
    <span class="title-page-service">
      <span class="title-page-name">{{ service.name }}</span
      ><span class="title-page-fullname">{{ service.fullname }}</span>
    </span>
  </h1>
</template>

<script>
export default {
  name: 'ServiceTemplateTitle',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>
