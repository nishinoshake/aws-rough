<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-item">
        <nuxt-link to="/">ZAKURI AWS</nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="footer-item">
        <ExternalLink href="https://github.com/nishinoshake/aws-rough">GitHub</ExternalLink>
      </li>
    </ul>
  </footer>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServicePartsExclude',
  components: { ExternalLink }
}
</script>
