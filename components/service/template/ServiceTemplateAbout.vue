<template>
  <section class="section">
    <h2 class="title-section" id="about"><a href="#about"># このサイトについて</a></h2>
    <div class="service-zakuri">
      <p class="text">
        ざっくりAWSは、AWSの料金を日本円でざっくり計算できるサイトです。<br class="pc" />
        公式のツールよりも少ない入力で手軽に概算を見積もれます。
      </p>
      <p class="text">
        このサイトを作った当初は、公式のツールが<ExternalLink
          href="https://calculator.s3.amazonaws.com/index.html?lng=ja_JP#"
          >SIMPLE MONTHLY CALCULATOR</ExternalLink
        >しかありませんでしたが、<br class="pc" />
        今は<ExternalLink href="https://calculator.aws/#/">AWS Pricing Calculator</ExternalLink
        >というやつもあるので、使ったことがない方は、ぜひ試してみてください。
      </p>
      <p class="text">
        このサイトのもう少し詳しい説明は、<nuxt-link to="/about" class="text-link">サイト説明のページ</nuxt-link
        >に書いてます。
      </p>
    </div>
  </section>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServiceTemplateAbout',
  components: {
    ExternalLink
  }
}
</script>
