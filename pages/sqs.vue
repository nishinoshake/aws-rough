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
          メッセージの送信側と受信側の間にキューを挟むことで、受信側は自分のペースでメッセージを処理できます。
        </p>

        <p class="text">
          SNSと名前が似ていて紛らわしいですが、違いをまとめるとこんな感じです。
          <br class="pc" />
          それぞれ異なる特徴を持ったサービスですが、組み合わせて使ったほうが有効なケースもあります。
        </p>

        <table class="spec mod-center">
          <tbody>
            <tr>
              <th></th>
              <th>SNS</th>
              <td>SQS</td>
            </tr>
            <tr>
              <th>仕組み</th>
              <td><ExternalLink href="https://aws.amazon.com/jp/pub-sub-messaging/">Pub/Sub</ExternalLink></td>
              <td><ExternalLink href="https://aws.amazon.com/jp/message-queue/">メッセージキュー</ExternalLink></td>
            </tr>
            <tr>
              <th>やりとり</th>
              <td>プッシュ<br />(投げつける)</td>
              <td>ポーリング<br />(取りに行く)</td>
            </tr>
            <tr>
              <th>出力</th>
              <td>複数可</td>
              <td>単一のみ</td>
            </tr>
          </tbody>
        </table>

        <p class="text">
          ひとつ注意が必要なのが、標準キューの場合は、まれに複数のメッセージが配信される可能性があり、
          <br class="pc" />
          順序も保証されないので、アプリケーション側で重複や順序についても考慮しておく必要があります。
          <br class="pc" />
          順序を厳密に保持したいときのために、FIFOキューも用意されています。
        </p>

        <p class="text">
          <span class="text-bold">SNSとSQSを組み合わせた使用例</span>
          <br />
          ユーザーがアップロードした画像に対して、サムネイルの作成と画像認識の処理を同時に走らせたい場合、
          <br class="pc" />
          メッセージを一旦SNSのトピックに投げて、それを複数のSQSのキューでサブスクライブする設計しておけば、
          <br class="pc" />
          処理が増えた場合のスケールが簡単になります。（<ExternalLink
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
