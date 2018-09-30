<template>
  <ServiceTemplate service-name="aurora">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">AWSがクラウド向けに最適化したリレーショナルデータベースのサービスです。<br>立ち位置的には、RDSの選択肢のひとつですが、別にした方がわかりやすかったので、ページを分けています。</p>
      <p class="text">主に、インスタンスのスペックや、レプリカの数、ストレージの容量などによって料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">互換DB</h3>
        <p class="text">MySQL/PostgreSQLから選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">インスタンス</h3>
        <p class="text">利用する<ExternalLink href="https://aws.amazon.com/jp/rds/aurora/pricing/">インスタンスタイプ</ExternalLink>を選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">レプリカ</h3>
        <p class="text"><ExternalLink href="https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/Aurora.Replication.html">レプリケーション</ExternalLink>が必要な場合は、台数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">ストレージ</h3>
        <p class="text">利用する予定のストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">I/O</h3>
        <p class="text">データベースに対するリクエストの件数を入力してください。</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">リザーブドインスタンスなど</h3>
        <p class="text">インスタンスの支払い方法は、オンデマンドインスタンスを前提にしています。</p>
        <p class="text">オンデマンドインスタンス以外にも、あらかじめ予約することで安く利用できるリザーブドインスタンスが用意されています。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">選択肢にないインスタンスタイプ</h3>
        <p class="text">選択肢にないインスタンスタイプは、<ExternalLink href="https://aws.amazon.com/jp/rds/aurora/pricing/">公式の料金表</ExternalLink>でご確認ください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">バックアップストレージ</h3>
        <p class="text">バックアップストレージを利用する場合は追加料金がかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送</h3>
        <p class="text">RDSからインターネットや別リージョンへデータを転送する場合は転送料がかかります。同一AZ内のRDSとEC2のインスタンス間のデータ転送や、Multi-AZのレプリケーションを目的とするデータ転送は無料です。</p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ServicePartsSpec from '@/components/service/parts/ServicePartsSpec'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceAurora',
  components: {
    ServiceTemplate,
    ServicePartsExclude,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.aurora
  }
}
</script>
