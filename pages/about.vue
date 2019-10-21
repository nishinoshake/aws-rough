<template>
  <article class="about">
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
      ざっくりと言いつつ、計算ツールを公開する以上は、料金の目安として役に立つ金額を算出できるように努めていますが、「実際に運用してみたら案外高かった」とか「このサイトで考慮されていないパラメータの影響が大きかった」といった場合の責任までは負いかねます。
    </p>

    <blockquote class="text-quote">"With Great Power<br />Comes Great Responsibility"</blockquote>

    <p class="text-zakuri">
      映画のセリフを引用するのは野暮かもしれませんが、AWSは柔軟にシステムを構築できる便利さがある反面、費用が想定以上にかかってしまうリスクもあります。大きめのシステムの見積もりなどで正確さが要求される場合は、<ExternalLink
        href="https://calculator.s3.amazonaws.com/index.html"
        >公式のツール</ExternalLink
      >をお使いください。
    </p>

    <p class="text-zakuri">
      各サービスの価格は、AWSが提供している<ExternalLink
        href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/price-changes.html"
        >Price List API</ExternalLink
      >から取得し、為替レートの取得には、<ExternalLink href="https://twitter.com/kujirahand">クジラ飛行机</ExternalLink
      >さんが公開されている、<ExternalLink href="http://api.aoikujira.com/kawase/">クジラ外国為替確認API</ExternalLink
      >を使わせてもらっています。現在、計算に適用しているドル円のレートは<em
        ><span v-if="usdjpy" data-test="yen">{{ usdjpy }}</span
        >円</em
      >で、データは毎朝10時に更新しています。
    </p>

    <p class="text-zakuri">
      また、ユーザーのみなさまの利用状況を把握するため、GoogleアナリティクスおよびCookieを使用しています。Googleアナリティクスでデータを収集する仕組みについては<ExternalLink
        href="https://policies.google.com/technologies/partner-sites?hl=ja"
        >こちらのリンク</ExternalLink
      >からご確認いただけます。
    </p>

    <p class="text-zakuri">
      不具合などのご連絡は、GitHubへ<ExternalLink href="https://github.com/nishinoshake/aws-rough/issues"
        >Issue</ExternalLink
      >をあげていただくか、<a href="mailto:lawson.and.7.11@gmail.com" class="text-link">メール</a
      >でお願いいたします。<br />
    </p>
  </article>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'

export default {
  name: 'AboutIndex',
  components: { ExternalLink, ServicePartsIcon, ServicePartsAccordion },
  head() {
    return meta.about
  },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    }
  }
}
</script>
