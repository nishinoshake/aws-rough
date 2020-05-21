<template>
  <h1 class="title-page">
    <span>
      <span class="title-page-name">{{ service.name }}</span>
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
