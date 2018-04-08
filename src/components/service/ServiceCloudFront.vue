<template>
  <ServiceTemplate service-name="cloudfront">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">CDNのサービスです。</p>
      <p class="text">主に、インターネットへのデータ転送量とリクエスト数で料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">CloudFrontからインターネットへ送信されるデータ量をGB単位で入力してください。</p>
        <p class="text">Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。</p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
      <section class="section-child">
        <h3 class="title-small">リクエスト数</h3>
        <p class="text">CloudFrontへ送信されるリクエストの数を入力してください。</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">HTTPのリクエスト</h3>
        <p class="text">現状は、HTTPSでの利用を前提に料金を算出していますが、HTTPの場合は少し安くなります。HTTPの料金にも近いうちに対応予定です。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">日本以外のエッジロケーション</h3>
        <p class="text">現状は、日本のエッジロケーションを前提に料金を算出しています。他のエッジロケーションを使用する事も多いと思うので、近いうちに対応予定です。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">オリジンへのPOSTやPUT</h3>
        <p class="text">CloudFrontでは、オリジン(S3/ELB/EC2など)に対するデータのフェッチは無料ですが、POSTやPUTのリクエストに対しては別料金がかかります。詳しくは<ExternalLink href="https://aws.amazon.com/jp/cloudfront/pricing/">公式の料金表</ExternalLink>をご確認ください。</p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServiceCloudfront',
  components: { ServiceTemplate, ServicePartsExclude, ExternalLink }
}
</script>
