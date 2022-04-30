<template>
  <img :src="`/img/icons/${name}.svg`" width="80" height="80" :alt="name" />
</template>

<script>
export default {
  name: 'AwsIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
