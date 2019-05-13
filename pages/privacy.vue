<template>
  <article class="terms">
    <h1 class="title-page">プライバシーポリシー</h1>
    <section class="section">
      <section>
        <h2 class="title-small">Googleアナリティクスの利用</h2>
        <p class="text">
          本サービスでは、ユーザーの皆さまの利用状況を把握するため、Googleアナリティクスを利用しています。
        </p>
        <p class="text">
          データの収集にあたって、ウェブサイトにアクセスしたときにブラウザに送られてくる小さなテキストデータである、Cookieを使用しています。Googleアナリティクスでデータを収集する仕組みについては下記のリンクからご確認いただけます。<br />
          <ExternalLink href="https://www.google.com/intl/ja/policies/privacy/partners/"
            >https://www.google.com/intl/ja/policies/privacy/partners/</ExternalLink
          >
        </p>
      </section>
    </section>
  </article>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'PrivacyIndex',
  components: { ExternalLink },
  head() {
    return meta.privacy
  }
}
</script>
