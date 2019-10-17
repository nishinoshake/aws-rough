<template>
  <ServiceTemplate service-name="cloudfront">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>プロトコル</span></h3>
            <p class="text">HTTPかHTTPSを選択してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>データ転送量</span></h3>
            <p class="text">CloudFrontからインターネットへ送信されるデータ量をGB単位で入力してください。</p>
            <p class="text">
              Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
            </p>
            <pre>2 * 100000 / 1024 ≒ 195GB</pre>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>リクエスト数</span></h3>
            <p class="text">CloudFrontへ送信されるリクエストの数を入力してください。</p>
          </section>
        </ServicePartsAccordion>

        <ServicePartsCondition></ServicePartsCondition>

        <ServicePartsAccordion title="対象外のもの">
          <section class="section-child">
            <h3 class="title-small"><span>日本以外のエッジロケーション</span></h3>
            <p class="text">日本のエッジロケーションを前提に料金を算出しています。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>オリジンへのPOSTやPUT</span></h3>
            <p class="text">
              CloudFrontでは、オリジン(S3/ELB/EC2など)に対するデータのフェッチは無料ですが、POSTやPUTのリクエストに対しては別料金がかかります。詳しくは<ExternalLink
                href="https://aws.amazon.com/jp/cloudfront/pricing/"
                >公式の料金表</ExternalLink
              >をご確認ください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>大量の無効リクエスト</span></h3>
            <p class="text">
              キャッシュの無効リクエストは、月に1,000パスまでは追加料金なしで利用できますが、それ以降は課金されます。詳しくは<ExternalLink
                href="https://aws.amazon.com/jp/cloudfront/pricing/"
                >公式の料金表</ExternalLink
              >をご確認ください。
            </p>
          </section>
        </ServicePartsAccordion>
      </div>
    </template>

    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">コンテンツを効率的に配信できるやつ（CDN）。</p>
        <p class="text">
          CloudFrontの後ろには、S3やELBなどのAWSのサービスを置くことが多いですが、オンプレミスのサーバーも設定できます。たとえば、静的アセットをユーザーに近いところにキャッシュしておくと、レスポンス速度の向上と、サーバー負荷の軽減が期待できるので、導入のメリットは大きいです。
        </p>
        <p class="text">
          Basic認証などのちょっとした処理であれば、<ExternalLink href="https://aws.amazon.com/jp/lambda/edge/"
            >Lambda@Edge</ExternalLink
          >を使って実装できます。
        </p>
      </div>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceCloudfront',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition, ExternalLink },
  head() {
    return meta.cloudfront
  }
}
</script>
