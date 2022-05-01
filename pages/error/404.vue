<template>
  <article class="error">
    <h1 class="large-heading large-heading-ja">ページが見つかりませんでした</h1>
    <div class="section-list">
      <section class="section">
        <div class="section-content">
          <p class="error-text">あなたが入力したURLが正しくないか、<br />私が間違っているのか。答えは闇の中。</p>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import meta from '@/config/meta'
import ExternalLink from '@/components/ExternalLink'

export default {
  components: { ExternalLink },
  head() {
    return meta.error_404
  }
}
</script>
