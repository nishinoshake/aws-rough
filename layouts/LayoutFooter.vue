<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-item">
        <ExternalLink href="https://calculator.s3.amazonaws.com/index.html?lng=ja_JP">公式ツール</ExternalLink>
      </li>
      <li class="footer-item">
        <ExternalLink href="https://hatebu.noplan.cc">先週のはてブ</ExternalLink>
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
