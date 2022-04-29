<template>
  <img :src="`/img/icons/${name}.svg`" :alt="name" />
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
