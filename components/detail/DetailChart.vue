<template>
  <p>まずは削除</p>
</template>

<script>
export default {
  name: 'DetailChart',
  props: {
    services: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    hoverColors: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>
