<template>
  <ServiceTemplate service-name="fargate">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">
        インフラの管理が不要なコンテナの実行環境です。<ExternalLink href="https://aws.amazon.com/jp/ecs/"
          >ECS</ExternalLink
        >の起動タイプとして選択できます。<br />タスク数と稼働時間、タスクに割り当てたリソースと外部へのデータ転送量で料金が決まります。
      </p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">タスク数</h3>
        <p class="text">稼働させるタスク数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">稼働時間(時)</h3>
        <p class="text">
          ひと月に稼働する時間を入力してください。<br />デフォルトでは 24時間 × 30.5日 = 732時間 を入力しています。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small">vCPU</h3>
        <p class="text">割り当てるvCPUを選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">メモリ</h3>
        <p class="text">割り当てるメモリサイズを選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">ECSからインターネットへ送信されるデータ量をGB単位で入力してください。</p>
      </section>
    </section>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ServicePartsSpec from '@/components/service/parts/ServicePartsSpec'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceFargate',
  components: {
    ServiceTemplate,
    ServicePartsExclude,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.fargate
  }
}
</script>
