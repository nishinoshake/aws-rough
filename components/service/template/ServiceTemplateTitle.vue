<template>
  <h1 class="title-page">
    <span>
      &gt;&nbsp;<span class="title-page-name">{{ service.name }}</span
      ><span class="title-page-small">の料金をざっくり見積もり</span>
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
