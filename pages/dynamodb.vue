<template>
  <ServiceTemplate service-name="dynamodb">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>ストレージ</span></h3>
            <p class="text">DynamoDBで使用するストレージの容量をGB単位で入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>読み込み単位</span></h3>
            <p class="text">
              4KBまでの強い整合性のある読み込み1回につき1単位、トランザクション読み込み1回につき2単位、結果整合性のある読み込み1回につき
              0.5単位の読み込みになります。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>書き込み単位</span></h3>
            <p class="text">
              1KBまでの書き込み1回につき1単位、トランザクション書き込み1回につき2単位になります。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>RCU</span></h3>
            <p class="text">読み込みキャパシティユニット(RCU)を入力してください。</p>
            <p class="text">
              キャパシティユニットという言葉に馴染みがありませんが、最大4KBの項目に対して強い整合性のある読み込みを1秒あたり1回(結果的に整合性のある読み込みについては2回)行うことで1RCUを消費します。<br />例えば、2KBの項目に対して1秒あたり100回の強い整合性のある読み込みを行う場合は、100RCUが必要になります。
            </p>
            <p class="text">
              キャパシティユニットや整合性についての詳しい話は、<ExternalLink
                href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html#ItemSizeCalculations.Reads"
                >読み込みでのキャパシティーユニットの消費</ExternalLink
              >や<ExternalLink
                href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"
                >読み込み整合性</ExternalLink
              >をご確認ください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>WCU</span></h3>
            <p class="text">書き込みキャパシティユニット(WCU)を入力してください。</p>
            <p class="text">
              最大1KBの項目に対して、1秒あたり1回の書き込みを行うことで1WCUを消費します。<br />例えば、2KBの項目に対して1秒あたり100回の書き込みを行う場合は、200WCUが必要になります。
            </p>
            <p class="text">
              詳しくは、<ExternalLink
                href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html#ItemSizeCalculations.Writes"
                >書き込みでのキャパシティーユニットの消費</ExternalLink
              >をご確認ください。
            </p>
          </section>
        </ServicePartsAccordion>

        <ServicePartsCondition></ServicePartsCondition>

        <ServicePartsAccordion title="対象外のもの">
          <section class="section-child">
            <h3 class="title-small"><span>リザーブドキャパシティー</span></h3>
            <p class="text">
              RCUとWCUがある程度予測できる場合、最小使用量に対して割引を適用することができます。リザーブドキャパシティーを越えた分は、通常の料金が加算されます。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>ストレージのオーバーヘッド</span></h3>
            <p class="text">
              ストレージコストには1アイテム当たり100bytesのオーバーヘッドが加算されます。アイテム数が億を超えるぐらいになると効いてきますが、その頃にはオーバーヘッドが気にならないぐらい高額になっていると思います。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>別リージョンへのデータ転送</span></h3>
            <p class="text">同一リージョンのデータ転送は無料ですが、別リージョンへのデータ転送には料金がかかります。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>Global TablesやDynamoDBストリームなど</span></h3>
            <p class="text">
              Global
              Tablesやオンデマンドバックアップ、DynamoDBストリームなどを利用する場合は料金がかかります。<ExternalLink
                href="https://aws.amazon.com/jp/dynamodb/pricing/"
                >公式の料金表</ExternalLink
              >をご確認ください。
            </p>
          </section>
        </ServicePartsAccordion>
      </div>
    </template>

    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">スケーラブルなNoSQLデータベース。</p>
        <p class="text">
          リレーショナルじゃないデータは、DynamoDBに置いておけば、スケーラビリティに頭を抱えずに済みます。
          <br class="pc" />
          パフォーマンスやコストを最適化するためには慣れが必要なので、軽い気持ちで使うと後悔するかもしれません。
          <br class="pc" />
          事前のキャパシティ指定が不要なオンデマンドモードがサポートされたおかげで、だいぶ使いやすくなりました。
        </p>
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
  name: 'ServiceDynamoDB',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition, ExternalLink },
  head() {
    return meta.dynamodb
  }
}
</script>
