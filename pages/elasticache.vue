<template>
  <ServiceTemplate service-name="elasticache">
    <template v-slot:zakuri>
      <p class="text">フルマネージド型のインメモリデータストア。</p>
      <p class="text">
        データベースのクエリ結果のキャッシュや、セッション管理など、高いパフォーマンスが求められるところで使われるサービスです。データベースエンジンは、RedisかMemcachedから選べます。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>ノードタイプ</span></h3>
        <p class="text">
          利用する<ExternalLink href="https://aws.amazon.com/jp/elasticache/pricing/">ノードタイプ</ExternalLink
          >を選択してください。
        </p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>リザーブドノード</span></h3>
        <p class="text">
          オンデマンドノードの利用を前提にしています。あらかじめノードを予約する<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/reserved-cache-nodes/"
            >リザーブドノード</ExternalLink
          >を利用すれば、大幅な割引が適用されます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>選択肢にないノードタイプ</span></h3>
        <p class="text">
          ノードタイプは、よく使いそうなものに絞っています。その他のノードタイプについては、<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/pricing/"
            >公式サイト</ExternalLink
          >でご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>追加のバックアップストレージ</span></h3>
        <p class="text">
          1つのスナップショットのストレージ領域は無料で提供していますが、<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/pricing/#%E3%83%90%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8"
            >追加のバックアップストレージ</ExternalLink
          >には別途料金がかかります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>異なるAZ間のデータ転送</span></h3>
        <p class="text">
          同一リージョンの異なるAZにあるEC2の間でデータを転送する場合には、<ExternalLink
            href="https://aws.amazon.com/jp/elasticache/pricing/#%E3%83%87%E3%83%BC%E3%82%BF%E8%BB%A2%E9%80%81"
            >データ転送料</ExternalLink
          >がかかります。同一AZでのデータ転送は無料です。
        </p>
      </section>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ServicePartsSpec from '@/components/service/parts/ServicePartsSpec'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceElastiCache',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.elasticache
  }
}
</script>
