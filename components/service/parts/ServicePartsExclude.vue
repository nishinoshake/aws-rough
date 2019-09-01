<template>
  <section class="section">
    <h2 class="title">対象外のもの</h2>
    <slot />
  </section>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServicePartsExclude',
  components: { ExternalLink }
}
</script>
