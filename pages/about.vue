<template>
  <div class="landing">
    <section class="section">
      <h2 class="title-section" id="introduction"><a href="#introduction"># AWSの料金を、日本円でざっくり</a></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">AWSの料金、<br class="sp" />ややこしいですよね。</p>
          <p class="text">
            サービスの選択肢が多く、構成が柔軟なおかけで、<br
              class="pc"
            />さまざまな要件をカバーできるのは嬉しいのですが、<br
              class="pc"
            />そのぶん料金体系がややこしく、利用するハードルが高いのも事実です。
          </p>

          <p class="text">
            そのややこしさを少しでも解消するべく、<br class="pc" />日本円でざっくり計算できる、このサイトを作りました。
          </p>

          <p class="text">
            ざっくりと言いつつ、計算ツールを公開する以上は、<br
              class="pc"
            />料金の目安として役に立つ金額を算出できるように努めていますが、<br
              class="pc"
            />実際に運用してみたら案外高かった・・・といった場合の責任までは負いかねます。
          </p>

          <p class="text">
            仕事で使うシステムの見積もりなどで、正確さが要求される場合は、<ExternalLink
              href="https://calculator.s3.amazonaws.com/index.html"
              >公式のツール</ExternalLink
            >をお使いください。
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title-section" id="condition"><a href="#condition"># 計算の前提</a></h2>
      <div class="service-zakuri">
        <div class="section-child">
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
    </section>

    <section class="section">
      <h2 class="title-section" id="analytics"><a href="#analytics"># Google Analytics</a></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">
            サイトの利用状況を把握するために、Google Analyticsを使用しています。<br
              class="pc"
            />GoogleによるCookieの利用方法やオプトアウトの方法は、下記のリンクから確認できます。
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
      <h2 class="title-section" id="adsense"><a href="#adsense"># Google AdSense</a></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">
            広告の配信に、Google AdSenseというサービスを使用しています。（こちらもCookieを使用）<br
              class="pc"
            />パーソナライズ広告に抵抗がある方は、<ExternalLink href="https://www.google.com/settings/ads"
              >広告設定のページ</ExternalLink
            >から無効にできます。
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title-section" id="contact"><a href="#contact"># お問い合わせ</a></h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">
            不具合などのご連絡は、<ExternalLink href="https://github.com/nishinoshake/aws-rough/issues"
              >GitHubのIssue</ExternalLink
            >か<a href="mailto:lawson.and.7.11@gmail.com" class="text-link">メール</a>までお願いいたします。
          </p>
        </div>
      </div>
    </section>

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
