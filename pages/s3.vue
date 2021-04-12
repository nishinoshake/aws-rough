<template>
  <ServiceTemplate service-name="s3">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">最強のファイル置き場。</p>
        <p class="text">
          EC2と双璧をなす、AWSの中心となるサービスです。可用性が高く、スケーラブルで、安い、頼りになるストレージ。さらに、静的サイトのホスティングもできる。強い。
        </p>
        <p class="text">
          分析のためのデータレイクとしても使えるので、ファイルはとりあえずS3に置いておけば間違いないです。ライフサイクルを設定して、より安価なGlacierへ移行できたりするので、さらにコストを抑えられます。
        </p>
      </div>
    </template>

    <template v-slot:condition>
      <li class="list-item">標準のストレージクラス</li>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="title-xsmall"><span>容量</span></h3>
        <p class="text">S3で使用するストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-xsmall"><span>データ転送量</span></h3>
        <p class="text">
          S3からインターネットへ送信されるデータ量を入力してください。Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
        </p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
      <section class="section-child">
        <h3 class="title-xsmall"><span>読み込み回数</span></h3>
        <p class="text">GET/SELECTおよび他のすべてのリクエスト数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-xsmall"><span>書き込み回数</span></h3>
        <p class="text">PUT/COPY/POSTのリクエスト数を入力してください。DELETEリクエストは無料です</p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="title-xsmall"><span>標準以外のストレージクラス</span></h3>
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
        <h3 class="title-xsmall"><span>別リージョンへのデータ転送</span></h3>
        <p class="text">
          別リージョンへデータを転送する場合は追加料金がかかります。詳しくは<ExternalLink
            href="https://aws.amazon.com/jp/s3/pricing/"
            >公式の料金表</ExternalLink
          >をご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-xsmall"><span>Amazon S3 Transfer Acceleration</span></h3>
        <p class="text">
          S3のデータ転送を高速化する<ExternalLink
            href="https://aws.amazon.com/jp/blogs/news/aws-storage-update-amazon-s3-transfer-acceleration-larger-snowballs-in-more-regions/"
            >Transfer Acceleration</ExternalLink
          >なるものがあるらしいです。海外のリージョンへのデータ転送では高速化が望めるかもしれません。
        </p>
      </section>
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
