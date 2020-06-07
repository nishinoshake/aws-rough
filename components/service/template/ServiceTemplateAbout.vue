<template>
  <section class="section">
    <h2 class="title-section" id="about"><a href="#about">このサイトについて</a></h2>
    <div class="service-content">
      <p class="text">AWSの料金を、日本円でざっくり計算できるサイトです。</p>
      <p class="text">
        公式の計算ツールよりも少ない入力で、ざっくり料金の概算がわかります。このサイトを作った当初は、公式のものは<ExternalLink
          href="https://calculator.s3.amazonaws.com/index.html"
          >Simple Monthly Calculator</ExternalLink
        >しかありませんでしたが、これはもう非推奨になっており、より新しくて親しみやすい<ExternalLink
          href="https://calculator.aws"
          >AWS Pricing Calculator</ExternalLink
        >を利用できます。まだ使ったことがない方は、ぜひ試してみてください。
      </p>
      <p class="text">
        不具合の連絡などのお問い合わせは、<nuxt-link to="/about/" class="text-link">ABOUTページ</nuxt-link
        >に記載しています。
      </p>
    </div>
  </section>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServiceTemplateAbout',
  components: { ExternalLink }
}
</script>
