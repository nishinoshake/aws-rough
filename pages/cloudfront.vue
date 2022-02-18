<template>
  <ServiceArticle service-name="cloudfront">
    <template v-slot:zakuri>
      <p class="text">コンテンツを効率的に配信できるやつ（CDN）。</p>
      <p class="text">
        ユーザーの近くにあるデータセンター（エッジ）にコンテンツをキャッシュして配信することで、レスポンスの速度を向上させると共に、サーバーの負荷を軽減できます。頻繁にアクセスされる画像やCSSなどの静的アセットの場合、Webサーバーへ毎回リクエストするのは効率が悪いので、CloudFrontを導入するメリットは大きいです。Basic認証などのちょっとした処理であれば、<ExternalLink
          href="https://aws.amazon.com/jp/lambda/edge/"
          >Lambda@Edge</ExternalLink
        >を使って実装できます。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>プロトコル</span></h3>
        <p class="text">HTTPかHTTPSを選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>データ転送量</span></h3>
        <p class="text">
          CloudFrontからインターネットへ送信されるデータ量をGB単位で入力してください。Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
        </p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>リクエスト数</span></h3>
        <p class="text">CloudFrontへ送信されるリクエストの数を入力してください。</p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>日本以外のエッジロケーション</span></h3>
        <p class="text">日本のエッジロケーションを前提に料金を算出しています。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>オリジンへのPOSTやPUT</span></h3>
        <p class="text">
          CloudFrontでは、オリジン(S3/ELB/EC2など)に対するデータのフェッチは無料ですが、POSTやPUTのリクエストに対しては別料金がかかります。詳しくは<ExternalLink
            href="https://aws.amazon.com/jp/cloudfront/pricing/"
            >公式の料金表</ExternalLink
          >をご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>大量の無効リクエスト</span></h3>
        <p class="text">
          キャッシュの無効リクエストは、月に1,000パスまでは追加料金なしで利用できますが、それ以降は課金されます。詳しくは<ExternalLink
            href="https://aws.amazon.com/jp/cloudfront/pricing/"
            >公式の料金表</ExternalLink
          >をご確認ください。
        </p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Accordion from '@/components/Accordion'
import Condition from '@/components/Condition'
import ExternalLink from '@/components/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceCloudfront',
  components: { ServiceArticle, Accordion, Condition, ExternalLink },
  head() {
    return meta.cloudfront
  }
}
</script>
