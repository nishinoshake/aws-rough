<template>
  <ServiceTemplate service-name="s3">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">
        様々なサービスと連携できるオブジェクトストレージのサービスです。<br />主に、ストレージの容量とデータ転送量、読み書きの回数で料金が決まります。
      </p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">容量</h3>
        <p class="text">S3で使用するストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">S3からインターネットへ送信されるデータ量を入力してください</p>
        <p class="text">Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。</p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
      <section class="section-child">
        <h3 class="title-small">読み込み回数</h3>
        <p class="text">GET/SELECTおよび他のすべてのリクエスト数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">書き込み回数</h3>
        <p class="text">PUT/COPY/POSTのリクエスト数を入力してください。<br />DELETEリクエストは無料です</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">標準以外のストレージクラス</h3>
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
        <h3 class="title-small">別リージョンへのデータ転送</h3>
        <p class="text">
          別リージョンへデータを転送する場合は追加料金がかかります。<br />詳しくは<ExternalLink
            href="https://aws.amazon.com/jp/s3/pricing/"
            >公式の料金表</ExternalLink
          >をご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small">Amazon S3 Transfer Acceleration</h3>
        <p class="text">
          S3のデータ転送を高速化する<ExternalLink
            href="https://aws.amazon.com/jp/blogs/news/aws-storage-update-amazon-s3-transfer-acceleration-larger-snowballs-in-more-regions/"
            >Transfer Acceleration</ExternalLink
          >なるものがあるらしいです。海外のリージョンへのデータ転送では高速化が望めるかもしれません。
        </p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceS3',
  components: { ServiceTemplate, ServicePartsExclude, ExternalLink },
  head() {
    return meta.s3
  }
}
</script>
