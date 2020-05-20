<template>
  <h1 class="title-page">
    &gt;&nbsp;<span class="title-page-name">{{ service.name }}</span
    >&nbsp;<span class="title-page-ja">料金</span>
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
