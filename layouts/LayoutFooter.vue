<template>
  <footer class="footer" id="footer">
    <ul class="footer-list">
      <li class="footer-item">
        <nuxt-link to="/" class="footer-link">HOME</nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link to="/about/" class="footer-link">ABOUT</nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link to="/what-a-day/" class="footer-link">WHAT-A-DAY</nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutFooter',
  components: { ExternalLink },
  data() {
    return {
      services: serviceConfig
    }
  }
}
</script>
