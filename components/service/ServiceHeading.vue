<template>
  <h1 class="large-heading">{{ service.name }}</h1>
</template>

<script>
export default {
  name: 'ServiceHeading',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>
