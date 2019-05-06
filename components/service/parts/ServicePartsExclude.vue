<template>
  <section class="section">
    <h2 class="title">対象外のもの</h2>
    <p class="text">
      下記のいずれかに該当する場合は、<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
        >公式のツール</ExternalLink
      >を使用してください。
    </p>
    <slot />
  </section>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServicePartsExclude',
  components: { ExternalLink }
}
</script>
