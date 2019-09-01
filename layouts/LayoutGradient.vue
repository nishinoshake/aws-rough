<template>
  <div class="container-bg">
    <div class="container-bg-body"></div>
  </div>
</template>

<script>
export default {
  name: 'LayoutGradient',
  computed: {
    colors() {
      return ['red', 'orange', 'beige', 'blue']
    }
  }
}
</script>
