<template>
  <ServiceTemplate service-name="s3">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>容量</span></h3>
            <p class="text">S3で使用するストレージの容量をGB単位で入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>データ転送量</span></h3>
            <p class="text">S3からインターネットへ送信されるデータ量を入力してください</p>
            <p class="text">
              Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
            </p>
            <pre>2 * 100000 / 1024 ≒ 195GB</pre>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>読み込み回数</span></h3>
            <p class="text">GET/SELECTおよび他のすべてのリクエスト数を入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>書き込み回数</span></h3>
            <p class="text">PUT/COPY/POSTのリクエスト数を入力してください。<br />DELETEリクエストは無料です</p>
          </section>
        </ServicePartsAccordion>

        <ServicePartsCondition>
          <li class="list-item">標準のストレージクラス</li>
        </ServicePartsCondition>

        <ServicePartsAccordion title="対象外のもの">
          <section class="section-child">
            <h3 class="title-small"><span>標準以外のストレージクラス</span></h3>
            <p class="text">
              S3では標準のストレージ以外にも、ストレージのコストが安い代わりに取り出しのコストが高い<ExternalLink
                href="http://aws.typepad.com/aws_japan/2015/09/aws-storage-update-new-lower-cost-s3-storage-option-glacier-price-reduction.html"
                >Standard-IA</ExternalLink
              >や、長期保存向きのサービス<ExternalLink href="https://aws.amazon.com/jp/glacier/"
                >Amazon Glacier</ExternalLink
              >が用意されています。最近、<ExternalLink
                href="https://aws.amazon.com/jp/blogs/news/amazon-s3-update-new-storage-class-general-availability-of-s3-select/"
                >One Zone-IA</ExternalLink
              >というストレージクラスも発表されました。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>別リージョンへのデータ転送</span></h3>
            <p class="text">
              別リージョンへデータを転送する場合は追加料金がかかります。<br />詳しくは<ExternalLink
                href="https://aws.amazon.com/jp/s3/pricing/"
                >公式の料金表</ExternalLink
              >をご確認ください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>Amazon S3 Transfer Acceleration</span></h3>
            <p class="text">
              S3のデータ転送を高速化する<ExternalLink
                href="https://aws.amazon.com/jp/blogs/news/aws-storage-update-amazon-s3-transfer-acceleration-larger-snowballs-in-more-regions/"
                >Transfer Acceleration</ExternalLink
              >なるものがあるらしいです。海外のリージョンへのデータ転送では高速化が望めるかもしれません。
            </p>
          </section>
        </ServicePartsAccordion>
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
  name: 'ServiceS3',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition, ExternalLink },
  head() {
    return meta.s3
  }
}
</script>
