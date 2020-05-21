<template>
  <div class="landing">
    <p class="landing-copy">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 70">
          <path
            d="M35.074 48.524l-.9 8.4h-9.36l1.02-8.4h-24l1.02-3.119 17.879-35.1h18.54l-3.839 35.1h8.58l-.96 3.119zm-4.98-35.158h-2.04L13 45.405h13.2zM47.494 56.924l6-46.618h34.8l-5.1 46.618zm31.619-43.558H61.894L57.214 53.8h16.979zM125.912 48.524l-.9 8.4h-9.36l1.02-8.4h-24l1.019-3.119 17.879-35.1h18.539l-3.84 35.1h8.581l-.96 3.119zm-4.979-35.158h-2.04l-15.06 32.039h13.2zM157.951 41.865l-1.619 15-3.96.059 1.619-15.059h-14.339l1.14-3.36h13.56l1.44-13.56h3.959l-1.439 13.56h14.279l-1.14 3.36zM212.431 48.524l-.9 8.4h-9.359l1.02-8.4h-24l1.021-3.119 17.879-35.1h18.54l-3.84 35.1h8.579l-.96 3.119zm-4.98-35.158h-2.04l-15.059 32.039h13.2zM224.851 56.924l6-46.618h34.8l-5.1 46.618zm31.619-43.558h-17.22L234.57 53.8h16.98zM303.269 48.524l-.9 8.4h-9.359l1.02-8.4h-24l1.021-3.119 17.879-35.1h18.54l-3.84 35.1h8.579l-.96 3.119zm-4.98-35.158h-2.04l-15.06 32.039h13.2zM316.108 49.364l1.141-3.419h31.559l-1.141 3.419zm1.621-13.559l1.139-3.42h31.56l-1.141 3.42zM357.208 56.924l2.46-25.8h2.76l2.34-20.879h30.838l-3.479 20.879h3.6l-3.36 25.8zm29.159-22.679h-18.059l-1.68 19.555h16.979zm-.12-20.879h-12.959l-1.98 17.759h12zM402.207 56.924l6-46.618h34.8l-5.1 46.618zm31.619-43.558h-17.22L411.927 53.8h16.979zM448.046 56.924l2.46-25.8h2.76l2.339-20.879h30.839l-3.479 20.879h3.6l-3.359 25.8zm29.159-22.679h-18.059l-1.68 19.555h16.979zm-.12-20.879h-12.959l-1.98 17.759h12z"
          />
        </svg>
      </span>
    </p>
    <section class="section">
      <h1 class="title-section"><span>料金が気になるサービスはありますか？</span></h1>
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
    </section>

    <section class="section">
      <h2 class="title-section"><span>AWSの料金を日本円でざっくり</span></h2>
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
      <h2 class="title-section"><span>計算の前提</span></h2>
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
      <h2 class="title-section"><span>Google Analytics</span></h2>
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
      <h2 class="title-section"><span>Google AdSense</span></h2>
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
      <h2 class="title-section"><span>お問い合わせ</span></h2>
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
