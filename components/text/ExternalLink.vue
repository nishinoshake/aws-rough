<template>
  <a :href="href" target="_blank" class="text-link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
