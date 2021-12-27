<template>
  <footer class="footer" id="footer">
    <div class="footer-container">
      <ul class="footer-list">
        <li class="footer-item">
          <nuxt-link to="/about/">このサイトについて</nuxt-link>
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
