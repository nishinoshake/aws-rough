<template>
  <div class="landing">
    <h1 class="landing-copy"><span>AWS</span>の料金を、<br class="sp" />日本円でざっくり</h1>
    <div class="section">
      <h2 class="title-section"><span>料金が気になるサービスは？</span></h2>
      <div class="service-zakuri">
        <ul class="landing-service-list">
          <li :class="`landing-service-item mod-${service.color}`" v-for="service in services" :key="service.key">
            <nuxt-link :to="`/${service.key}/`">
              <span class="landing-service-name">{{ service.name }}</span>
              <span class="landing-service-description">{{ service.description }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2 class="title-section"><span>このサイトについて</span></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">AWSの料金、<br class="sp" />ややこしいですよね。</p>
          <p class="text">
            サービスの選択肢が多く、構成が柔軟なおかけで、さまざまな要件をカバーできるのは嬉しいのですが、そのぶん料金体系がややこしいので、やるせない気持ちになります。そんな気持ちをもとに作られたのが、料金を日本円でざっくり計算できる、このサイトです。
          </p>

          <p class="text">
            ざっくりと言いつつ、計算ツールを公開する以上は、料金の目安として役に立つ金額を算出できるように努めていますが、「実際に運用してみたら案外高かった」とか「このサイトで考慮されていないパラメータの影響が大きかった」といった場合の責任までは負いかねます。大きめのシステムの見積もりなどで正確さが要求される場合は、<ExternalLink
              href="https://calculator.s3.amazonaws.com/index.html"
              >公式のツール</ExternalLink
            >をお使いください。
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="title-section"><span>計算の前提</span></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <table class="spec">
            <caption>
              ※ データは毎朝10時に更新しています。
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
                <td>ひと月（30.5日）</td>
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
                <td>東京リージョン<br />（SESのみバージニア北部）</td>
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
      </div>
    </div>

    <div class="section">
      <h2 class="title-section"><span>Googleアナリティクス</span></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">
            サイトの利用状況を把握するために、Googleアナリティクスを使用しています。GoogleによるCookieの利用方法やオプトアウトの方法は、下記のリンクから確認できます。
          </p>

          <ul class="list">
            <li class="list-item">
              <ExternalLink href="https://policies.google.com/technologies/cookies?hl=ja"
                >GoogleによるCookieの利用方法</ExternalLink
              >
            </li>
            <li class="list-item">
              <ExternalLink href="https://support.google.com/analytics/answer/181881?hl=ja"
                >Googleアナリティクスのオプトアウト</ExternalLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="title-section"><span>Googleアドセンス</span></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">
            上記のGoogleアナリティクスとは別で、Googleアドセンスというサービスを利用して、広告の配信も行っています（こちらもCookie）。パーソナライズ広告に抵抗がある方は、<ExternalLink
              href="https://www.google.com/settings/ads"
              >広告設定のページ</ExternalLink
            >から無効にできます。
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="title-section"><span>お問い合わせ</span></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">
            不具合などのご連絡は、<ExternalLink href="https://github.com/nishinoshake/aws-rough">GitHub</ExternalLink
            >のIssueか<a href="mailto:lawson.and.7.11@gmail.com" class="text-link">メール</a>までお願いいたします。
          </p>
        </div>
      </div>
    </div>

    <ServiceTemplateAds />
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServiceTemplateAds },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  head() {
    return meta.index
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
