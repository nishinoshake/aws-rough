<template>
  <div class="about">
    <section class="section">
      <h2 class="title-section" id="introduction"><a href="#introduction">AWSの料金を、日本円でざっくり</a></h2>
      <div class="service-content">
        <div class="section-child">
          <p class="text">AWSの料金、ややこしいですよね。</p>

          <p class="text">
            従量課金と多様なオプションがあいまって、料金を計算するときに考慮すべき点が多いのが悩みどころですが、重要なパラメータは意外と限られています。そこに絞って、ざっくり料金を計算できるサイトを作りました。
          </p>
          <p class="text">
            このサイトを作った当初は、公式のツールが<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
              >SIMPLE MONTHLY CALCULATOR</ExternalLink
            >という敷居が高いやつしかありませんでしたが、今は<ExternalLink href="https://calculator.aws"
              >AWS Pricing Calculator</ExternalLink
            >という良い感じのやつがあるので、使ったことがない方は試してみてください。
          </p>

          <p class="text">
            「ざっくりAWS」と言いつつ、計算ツールを公開する以上は、料金の目安として役に立つ金額を算出できるように努めていますが、実際に運用してみたら案外高かった・・・といった場合の責任は負いかねます。あくまでざっくり知りたいときに使ってください。
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title-section" id="condition"><a href="#condition">計算の前提</a></h2>
      <div class="service-content">
        <div class="section-child">
          <ul class="list">
            <li class="list-item">通貨 → 日本円</li>
            <li class="list-item">税金 → 税抜き</li>
            <li class="list-item">期間 → 30.5日（月額）</li>
            <li class="list-item">
              ドル円 → <span v-if="usdjpy" data-test="yen">{{ usdjpy }}</span
              >円
            </li>
            <li class="list-item">リージョン → 東京/バージニア北部（SESのみ）</li>
            <li class="list-item">
              AWSの料金 →
              <ExternalLink href="https→//docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/price-changes.html"
                >Price List API</ExternalLink
              >
            </li>
            <li class="list-item">
              為替レート →
              <ExternalLink href="https://github.com/exchangeratesapi/exchangeratesapi">exchangeratesapi</ExternalLink>
            </li>
          </ul>
          <p class="text text-notice">※ 為替とAWSの料金は毎朝10時に更新しています</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title-section" id="analytics"><a href="#analytics">Google Analytics</a></h2>
      <div class="service-content">
        <div class="section-child">
          <p class="text">
            サイトの利用状況を把握するために、Google
            Analyticsを使用しています。GoogleによるCookieの利用方法やオプトアウトの方法は、下記のリンクから確認できます。
          </p>

          <ul class="list">
            <li class="list-item">
              <ExternalLink href="https://policies.google.com/technologies/cookies?hl=ja"
                >GoogleによるCookieの利用方法</ExternalLink
              >
            </li>
            <li class="list-item">
              <ExternalLink href="https://support.google.com/analytics/answer/181881?hl=ja"
                >Google Analyticsのオプトアウト</ExternalLink
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title-section" id="adsense"><a href="#adsense">Google AdSense</a></h2>
      <div class="service-content">
        <div class="section-child">
          <p class="text">
            広告の配信に、Google
            AdSenseというサービスを使用しており、こちらもCookieを使用します。パーソナライズ広告に抵抗がある方は、<ExternalLink
              href="https://www.google.com/settings/ads"
              >広告設定のページ</ExternalLink
            >から無効にできます。
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title-section" id="contact"><a href="#contact">お問い合わせ</a></h2>
      <div class="service-content">
        <div class="section-child">
          <p class="text">
            不具合などのご連絡は、<ExternalLink href="https://github.com/nishinoshake/aws-rough/issues"
              >GitHubのIssue</ExternalLink
            >か<a href="mailto:lawson.and.7.11@gmail.com" class="text-link">メール</a>までお願いいたします。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServicePartsUnkown from '@/components/service/parts/ServicePartsUnkown'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ServicePartsUnkown, ExternalLink },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  head() {
    return meta.about
  },
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    },
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
