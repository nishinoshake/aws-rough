<template>
  <section class="error-notfound">
    <h1 class="error-title title-page">Not Found</h1>
    <div class="detail-body">
      <p class="detail-empty is-visible">
        <span>With Great Power</span>
        <span>Comes Great Responsibility</span>
      </p>
    </div>
  </section>
</template>

<script>
import meta from '@/config/meta'
import ExternalLink from '@/components/text/ExternalLink'

export default {
  components: { ExternalLink },
  head() {
    return meta.error_404
  }
}
</script>
