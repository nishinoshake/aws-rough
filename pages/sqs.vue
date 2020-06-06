<template>
  <ServiceTemplate service-name="sqs">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">フルマネージド型のメッセージキューサービス。</p>
        <p class="text">
          メッセージキューは、複数の処理を<ExternalLink
            href="https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A5%E3%83%BC_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF)"
            >キュー</ExternalLink
          >を介して非同期に実行する仕組みです。メッセージの送信側と受信側の間にキューを挟むことで、受信側は自分のペースでメッセージを処理できます。
        </p>

        <p class="text">
          ひとつ注意が必要なのが、標準キューの場合は、まれに複数のメッセージが配信される可能性があり、順序も保証されないので、アプリケーション側で重複や順序についても考慮しておく必要があります。順序を厳密に保持したいときのために、FIFOキューも用意されています。
        </p>
      </div>
      <div class="section-child">
        <h3 class="title-small"><span>SNSとSQSを組み合わせる例</span></h3>
        <p class="text">
          ユーザーがアップロードした画像に対して、サムネイルの作成と画像認識の処理を同時に走らせたい場合、メッセージを一旦SNSのトピックに投げて、それを複数のSQSのキューでサブスクライブする設計しておけば、処理が増えた場合のスケールが簡単になります。（<ExternalLink
            href="https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html"
            >参考：Fanout</ExternalLink
          >）
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
