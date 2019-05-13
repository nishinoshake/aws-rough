<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-item">
        <nuxt-link to="/about/" class="text-link-hover">
          このサイトについて
        </nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link to="/terms/" class="text-link-hover">
          利用規約
        </nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link to="/privacy/" class="text-link-hover">
          プライバシーポリシー
        </nuxt-link>
      </li>
      <li class="footer-item">
        <a href="https://github.com/noplan1989/aws-rough" target="_blank" rel="noopener" class="text-link-hover">
          GitHub
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import ArrorRight from '@/assets/svg/fa/angle-right.svg'

export default {
  name: 'LayoutFooter',
  components: { ArrorRight }
}
</script>
