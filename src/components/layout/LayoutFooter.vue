<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-item">
        <router-link to="about" class="text-link-hover">
          <i class="footer-item-icon"><ArrorRight /></i>このサイトについて
        </router-link>
      </li>
      <li class="footer-item">
        <a href="https://github.com/noplan1989/aws-rough" target="_blank" class="text-link-hover">
          <i class="footer-item-icon"><ArrorRight /></i>GitHub
        </a>
      </li>
      <li class="footer-item">
        <a href="http://calculator.s3.amazonaws.com/index.html" target="_blank" class="text-link-hover">
          <i class="footer-item-icon"><ArrorRight /></i>公式ツール
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
