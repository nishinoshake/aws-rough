<template>
  <footer class="footer" id="footer">
    <div class="footer-container">
      <p class="footer-label">
        <ExternalLink href="https://noplan.cc">noplan.cc</ExternalLink>
      </p>
    </div>
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
