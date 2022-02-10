<template>
  <footer class="l-footer">
    <div class="l-footer-container">
      <ul class="l-footer-list">
        <li class="l-footer-item">
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
