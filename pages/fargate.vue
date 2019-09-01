<template>
  <ServiceTemplate service-name="fargate">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>タスク数</span></h3>
            <p class="text">稼働させるタスク数を入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>稼働時間(時)</span></h3>
            <p class="text">
              ひと月に稼働する時間を入力してください。<br />デフォルトでは 24時間 × 30.5日 = 732時間 を入力しています。
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
        </ServicePartsAccordion>

        <ServicePartsCondition></ServicePartsCondition>
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
