<template>
  <ServiceTemplate service-name="sqs">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsCondition></ServicePartsCondition>
      </div>
    </template>

    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">フルマネージド型のメッセージキューサービス。</p>
        <p class="text">
          メッセージキューは、複数の処理を<ExternalLink
            href="https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A5%E3%83%BC_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF)"
            >キュー</ExternalLink
          >を介して非同期に実行する仕組みです。
          <br class="pc" />
          送信側が、キューに対してポコポコとメッセージを投げておくだけで、
          <br class="pc" />
          受信側は、自分のペースでメッセージを取ってきて処理を行えます。
        </p>

        <p class="text">
          ひとつ注意が必要なのが、標準キューの場合は、まれに複数のメッセージが配信される可能性があり、
          <br class="pc" />
          順序も保証されないので、アプリケーション側で重複や順序についても考慮しておく必要があります。
          <br class="pc" />
          順序を厳密に保持したいときのために、FIFOキューも用意されています。
        </p>
      </div>
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
  name: 'ServiceSQS',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.sqs
  }
}
</script>
