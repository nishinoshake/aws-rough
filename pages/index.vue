<template>
  <div class="landing">
    <h1 class="landing-copy">AWSの料金を、<br />日本円でざっくり</h1>
    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>このサイトについて</span></p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text-zakuri">AWSの料金、<br class="sp" />ややこしいですよね。</p>
            <p class="text-zakuri">
              サービスの選択肢が多く、構成が柔軟なおかけで、さまざまな要件をカバーできるのは嬉しいのですが、そのぶん料金体系がややこしいので、やるせない気持ちになります。そんな気持ちをもとに作られたのが、料金を日本円でざっくり計算できる、このサイトです。
            </p>
            <p class="text-zakuri">
              入力と結果の表示をシンプルにするために、よく使われそうな条件に絞ったサイト設計にしています。
            </p>

            <table class="spec">
              <thead>
                <tr>
                  <th colspan="2">計算の前提</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>通貨</th>
                  <td>日本円</td>
                </tr>
                <tr>
                  <th>期間</th>
                  <td>月額（30.5日）</td>
                </tr>
                <tr>
                  <th>リージョン</th>
                  <td>東京リージョン<br />（SESのみバージニア北部）</td>
                </tr>
              </tbody>
            </table>

            <p class="text-zakuri">
              ざっくりと言いつつ、計算ツールを公開する以上は、料金の目安として役に立つ金額を算出できるように努めていますが、「実際に運用してみたら案外高かった」とか「このサイトで考慮されていないパラメータの影響が大きかった」といった場合の責任までは負いかねます。大きめのシステムの見積もりなどで正確さが要求される場合は、<ExternalLink
                href="https://calculator.s3.amazonaws.com/index.html"
                >公式のツール</ExternalLink
              >をお使いください。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>使用しているデータ</span></p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text-zakuri">
              各サービスの価格は、AWSが提供している<ExternalLink
                href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/price-changes.html"
                >Price List API</ExternalLink
              >から取得し、為替レートの取得には、<ExternalLink href="https://twitter.com/kujirahand"
                >クジラ飛行机</ExternalLink
              >さんが公開されている、<ExternalLink href="http://api.aoikujira.com/kawase/"
                >クジラ外国為替確認API</ExternalLink
              >を使わせてもらっています。現在、計算に適用しているドル円のレートは<em
                ><span v-if="usdjpy" data-test="yen">{{ usdjpy }}</span
                >円</em
              >で、データは毎朝10時に更新しています。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>Googleアナリティクスの使用</span></p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text-zakuri">
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
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>Googleアドセンスの使用</span></p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text-zakuri">
              上記のGoogleアナリティクスとは別で、Googleアドセンスというサービスを利用して、広告の配信も行っています（こちらもCookie）。パーソナライズ広告に抵抗がある方は、<ExternalLink
                href="https://www.google.com/settings/ads"
                >広告設定のページ</ExternalLink
              >から無効にできます。
            </p>
          </div>
        </div>
      </div>
    </div>

    <ServiceTemplateAds />

    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>お問い合わせ</span></p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text-zakuri">
              不具合などのご連絡は、<ExternalLink href="https://github.com/nishinoshake/aws-rough">GitHub</ExternalLink
              >へIssueか<a href="mailto:lawson.and.7.11@gmail.com" class="text-link">メール</a
              >までお願いいたします。息抜きに<ExternalLink
                href="https://www.youtube.com/results?search_query=BRiNG+iCiNG+SHiT+HORSE+TOUR+FiNAL"
                >BiSH</ExternalLink
              >。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServiceTemplateAds, ServicePartsIcon },
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
