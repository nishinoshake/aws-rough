<template>
  <h2 class="calc-label">{{ label }}</h2>
</template>

<script>
export default {
  name: 'ServiceTemplateLabel',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
