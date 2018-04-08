<template>
  <section class="section">
    <h2 class="title">対象外のもの</h2>
    <p class="text">当サイトでは、入力を最小限にするため計算に含めていない項目があります。<br>下記のいずれかに該当する場合は、<ExternalLink href="https://calculator.s3.amazonaws.com/index.html">公式のツール</ExternalLink>をご利用ください。</p>
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
