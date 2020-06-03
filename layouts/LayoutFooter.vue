<template>
  <footer class="footer">
    <p class="footer-title"><nuxt-link to="/" class="footer-about-link">善き人のためのAWS</nuxt-link></p>
    <p class="footer-about">
      <nuxt-link to="/about" class="footer-about-link">このサイトについて</nuxt-link>
    </p>
    <div class="footer-bg"></div>
  </footer>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServicePartsExclude',
  components: { ExternalLink }
}
</script>
