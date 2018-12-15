<template>
  <ServiceTemplate service-name="dynamodb">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">高速で柔軟性の高い、フルマネージドなNoSQLデータベースのサービスです。<br>主に、ストレージと読み込み/書き込みキャパシティユニットによって料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">ストレージ</h3>
        <p class="text">DynamoDBで使用するストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">RCU</h3>
        <p class="text">読み込みキャパシティユニット(RCU)を入力してください。</p>
        <p class="text">キャパシティユニットという言葉に馴染みがありませんが、最大4KBの項目に対して強い整合性のある読み込みを1秒あたり1回(結果的に整合性のある読み込みについては2回)行うことで1RCUを消費します。<br>例えば、2KBの項目に対して1秒あたり100回の強い整合性のある読み込みを行う場合は、100RCUが必要になります。</p>
        <p class="text">キャパシティユニットや整合性についての詳しい話は、<ExternalLink href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html#ItemSizeCalculations.Reads">読み込みでのキャパシティーユニットの消費</ExternalLink>や<ExternalLink href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html">読み込み整合性</ExternalLink>をご確認ください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">WCU</h3>
        <p class="text">書き込みキャパシティユニット(WCU)を入力してください。</p>
        <p class="text">最大1KBの項目に対して、1秒あたり1回の書き込みを行うことで1WCUを消費します。<br>例えば、2KBの項目に対して1秒あたり100回の書き込みを行う場合は、200WCUが必要になります。</p>
        <p class="text">詳しくは、<ExternalLink href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html#ItemSizeCalculations.Writes">書き込みでのキャパシティーユニットの消費</ExternalLink>をご確認ください。</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">リザーブドキャパシティー</h3>
        <p class="text">RCUとWCUがある程度予測できる場合、最小使用量に対して割引を適用することができます。リザーブドキャパシティーを越えた分は、通常の料金が加算されます。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">ストレージのオーバーヘッド</h3>
        <p class="text">ストレージコストには1アイテム当たり100bytesのオーバーヘッドが加算されます。アイテム数が億を超えるぐらいになると効いてきますが、その頃にはオーバーヘッドが気にならないぐらい高額になっていると思います。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">別リージョンへのデータ転送</h3>
        <p class="text">同一リージョンのデータ転送は無料ですが、別リージョンへのデータ転送には料金がかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">Global TablesやDynamoDBストリームなど</h3>
        <p class="text">Global Tablesやオンデマンドバックアップ、DynamoDBストリームなどを利用する場合は料金がかかります。<ExternalLink href="https://aws.amazon.com/jp/dynamodb/pricing/">公式の料金表</ExternalLink>をご確認ください。</p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceDynamoDB',
  components: { ServiceTemplate, ServicePartsExclude, ExternalLink },
  head() {
    return meta.dynamodb
  }
}
</script>
