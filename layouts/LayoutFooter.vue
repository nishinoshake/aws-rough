<template>
  <footer class="footer" id="footer">
    <div class="footer-container">
      <ul class="footer-list">
        <li class="footer-item">
          <nuxt-link to="/about/">ABOUT</nuxt-link>
        </li>
        <li class="footer-item">
          <a href="https://github.com/nishinoshake/aws-rough" target="_blank" rel="noopener">GitHub</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'LayoutFooter',
  components: { ExternalLink }
}
</script>
