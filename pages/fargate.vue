<template>
  <ServiceTemplate service-name="fargate">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">
          サーバーの管理が不要なコンテナの実行環境。
        </p>
        <p class="text">
          ECSというコンテナオーケストレーションサービスを使うときに、FargateかEC2のどちらで環境を用意するかを選択する必要があります。Fargateの利点は、クラスター管理が不要で、CPUとメモリを指定するだけで済むところ。そのかわりに、GPUインスタンスが使えなかったり、割高だったりします。
        </p>
        <p class="text">
          大幅な値下げによって、EC2との価格差は縮まりつつありますが、リザーブドインスタンスやスポットインスタンスと比べてしまうと分が悪いので、運用が楽になるメリットと天秤にかけて、どちらにするかを選ぶと良いのでは。
        </p>
      </div>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="title-small"><span>タスク数</span></h3>
        <p class="text">稼働させるタスク数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>稼働時間(時)</span></h3>
        <p class="text">
          ひと月に稼働する時間を入力してください。デフォルトでは 24時間 × 30.5日 = 732時間 を入力しています。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>vCPU</span></h3>
        <p class="text">割り当てるvCPUを選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>メモリ</span></h3>
        <p class="text">割り当てるメモリサイズを選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>データ転送量</span></h3>
        <p class="text">ECSからインターネットへ送信されるデータ量をGB単位で入力してください。</p>
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
  name: 'ServiceFargate',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ExternalLink
  },
  head() {
    return meta.fargate
  }
}
</script>
