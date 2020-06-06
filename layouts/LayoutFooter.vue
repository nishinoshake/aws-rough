<template>
  <footer class="footer" id="footer">
    <div class="footer-body">
      <div class="footer-ticker">
        <ul class="footer-list">
          <li v-for="service in services" :key="service.key" class="footer-item">
            <nuxt-link class="footer-link" :to="service.href">{{ service.name }}</nuxt-link>
          </li>
        </ul>
      </div>
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
