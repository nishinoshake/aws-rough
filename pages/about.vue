<template>
  <article class="about">
    <h1 class="large-heading large-heading-ja">このサイトについて</h1>
    <div class="section-list">
      <section class="section">
        <div class="section-content">
          <p class="text">AWSの料金、ややこしいですよね。</p>
          <p class="text">
            従量課金と多様なオプションがあいまって、料金を計算するときに考慮すべき点が多いのが悩みどころですが、重要なパラメータは意外と限られています。そこで、パラメータを絞ってざっくり計算できるサイトを作りました。このサイトを作った当初は、公式のツールが<ExternalLink
              href="https://calculator.s3.amazonaws.com/index.html"
              >SIMPLE MONTHLY CALCULATOR</ExternalLink
            >という敷居が高いやつしかありませんでしたが、今は<ExternalLink href="https://calculator.aws"
              >AWS Pricing Calculator</ExternalLink
            >という良い感じのやつがあるので、使ったことがない方は試してみてください。
          </p>

          <p class="text">
            「ざっくりAWS」と言いつつ、計算ツールを公開する以上は、料金の目安として役に立つ金額を算出できるように努めていますが、実際に運用してみたら案外高かった・・・といった場合の責任は負いかねます。あくまでざっくり知りたいときに使ってください。
          </p>
        </div>
      </section>
      <ServiceAds />
      <section class="section">
        <h2 class="heading">計算の前提</h2>
        <div class="section-content">
          <table class="spec">
            <caption>
              ※ 為替とAWSの料金は毎朝10時に更新しています
            </caption>
            <tbody>
              <tr>
                <th>通貨</th>
                <td>日本円</td>
              </tr>
              <tr>
                <th>税金</th>
                <td>税抜き</td>
              </tr>
              <tr>
                <th>期間</th>
                <td>30.5日（月額）</td>
              </tr>
              <tr>
                <th>ドル円</th>
                <td>
                  <span v-if="usdjpy" data-test="yen">{{ usdjpy }}</span
                  >円
                </td>
              </tr>
              <tr>
                <th>リージョン</th>
                <td>東京<br />バージニア北部（SESのみ）</td>
              </tr>
              <tr>
                <th>AWSの料金</th>
                <td>
                  <ExternalLink
                    href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/price-changes.html"
                    >Price List API</ExternalLink
                  >
                </td>
              </tr>
              <tr>
                <th>為替レート</th>
                <td>
                  <ExternalLink href="https://github.com/exchangeratesapi/exchangeratesapi"
                    >exchangeratesapi</ExternalLink
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="section">
        <h2 class="heading">Google AdSense</h2>
        <div class="section-content">
          <p class="text">
            広告の配信に、Google
            AdSenseというサービスを使用しており、こちらもCookieを使用します。パーソナライズ広告に抵抗がある方は、<ExternalLink
              href="https://www.google.com/settings/ads"
              >広告設定のページ</ExternalLink
            >から無効にできます。
          </p>
        </div>
      </section>
      <section class="section">
        <h2 class="heading">GitHub</h2>
        <div class="section-content">
          <p class="text">ソースコードはGitHubにあります。</p>
          <ul class="list">
            <li class="list-item">
              <ExternalLink href="https://github.com/nishinoshake/aws-rough">nishinoshake/aws-rough</ExternalLink>
            </li>
            <li class="list-item">
              <ExternalLink href="https://github.com/nishinoshake/aws-rough-functions"
                >nishinoshake/aws-rough-functions</ExternalLink
              >
            </li>
          </ul>
        </div>
      </section>
      <section class="section">
        <h2 class="heading">販売</h2>
        <div class="section-content">
          <p class="text">このサイトを 100万円 で販売しています。</p>
          <p class="text">
            今は Google Analytics
            を外してしまったため、1年ほど前のデータになりますが、5万PV/月ぐらいです。この数字を考えると妥当な価格とは思えませんが、100万円欲しいので。売却を検討している理由は、自身がAWSを触る機会が減り、サイトを維持する気力が低下しているためになります。興味がある方は、下記までメールをお願いいたします。買ってください！
          </p>
          <p>
            <a href="mailto:lawson.and.7.11@gmail.com" class="text-link">lawson.and.7.11@gmail.com</a>
          </p>
        </div>
      </section>
      <section class="section">
        <h2 class="heading">お問い合わせ</h2>
        <div class="section-content">
          <p class="text">
            サイトに対するご意見や不具合のご報告などがありましたら、GitHubの<ExternalLink
              href="https://github.com/nishinoshake/aws-rough/issues"
              >Issues</ExternalLink
            >に追加していただくか、下記までメールをお願いいたします。
          </p>
          <p>
            <a href="mailto:lawson.and.7.11@gmail.com" class="text-link">lawson.and.7.11@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import ServiceAds from '@/components/service/ServiceAds'
import ExternalLink from '@/components/ExternalLink'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ServiceAds, ExternalLink },
  data() {
    return {
      monthlyDate: MONTHLY_DATE,
      message: '',
      isSending: false
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
    },
    contactLabel() {
      return this.isSending ? '送信中...' : '送信'
    },
    trimmedMessage() {
      return this.message.trim()
    }
  }
}
</script>
