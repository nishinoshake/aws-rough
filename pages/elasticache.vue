<template>
  <ServiceTemplate service-name="elasticache">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">
        RedisおよびMemcachedを利用できるマネージドなサービスです。<br />インメモリデータストアやキャッシュとして機能し、ミリ秒未満の応答時間が必要とされるような、要求の厳しいアプリケーションにも対応しています。
      </p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">ノードタイプ</h3>
        <p class="text">
          利用する<ExternalLink href="https://aws.amazon.com/jp/elasticache/pricing/">ノードタイプ</ExternalLink
          >を選択してください。
        </p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">リザーブドノード</h3>
        <p class="text">オンデマンドノードの利用を前提にしています。</p>
        <p class="text">
          あらかじめノードを予約する<ExternalLink href="https://aws.amazon.com/jp/elasticache/reserved-cache-nodes/"
            >リザーブドノード</ExternalLink
          >を利用すれば、大幅な割引が適用されます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small">選択肢にないノードタイプ</h3>
        <p class="text">
          ノードタイプは、よく使いそうなものに絞っています。<br />その他のノードタイプについては、<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/pricing/"
            >公式サイト</ExternalLink
          >でご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small">追加のバックアップストレージ</h3>
        <p class="text">
          1つのスナップショットのストレージ領域は無料で提供していますが、<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/pricing/#%E3%83%90%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8"
            >追加のバックアップストレージ</ExternalLink
          >には別途料金がかかります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small">異なるAZ間のデータ転送</h3>
        <p class="text">
          同一リージョンの異なるAZにあるEC2の間でデータを転送する場合には、<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/pricing/#%E3%83%87%E3%83%BC%E3%82%BF%E8%BB%A2%E9%80%81"
            >データ転送料</ExternalLink
          >がかかります。同一AZでのデータ転送は無料です。
        </p>
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
  name: 'ServiceElastiCache',
  components: {
    ServiceTemplate,
    ServicePartsExclude,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.elasticache
  }
}
</script>
