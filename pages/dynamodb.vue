<template>
  <ServiceArticle service-name="dynamodb">
    <template v-slot:zakuri>
      <p class="text">スケーラブルなNoSQLデータベース。</p>
      <p class="text">
        リレーショナルじゃないデータは、DynamoDBに置いておけば、スケーラビリティに頭を抱えずに済みます。事前のキャパシティ指定が不要なオンデマンドモードがサポートされたおかげで、だいぶ使いやすくなりました。仕様にクセがあるので、DynamoDBで本当に要件を満たせるか？と、使う前に自問した方が良いです。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>ストレージ</span></h3>
        <p class="text">DynamoDBで使用するストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>読み込み単位</span></h3>
        <p class="text">
          4KBまでの強い整合性のある読み込み1回につき1単位、トランザクション読み込み1回につき2単位、結果整合性のある読み込み1回につき
          0.5単位の読み込みになります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>書き込み単位</span></h3>
        <p class="text">
          1KBまでの書き込み1回につき1単位、トランザクション書き込み1回につき2単位になります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>RCU</span></h3>
        <p class="text">読み込みキャパシティユニット(RCU)を入力してください。</p>
        <p class="text">
          キャパシティユニットという言葉に馴染みがありませんが、最大4KBの項目に対して強い整合性のある読み込みを1秒あたり1回(結果的に整合性のある読み込みについては2回)行うことで1RCUを消費します。例えば、2KBの項目に対して1秒あたり100回の強い整合性のある読み込みを行う場合は、100RCUが必要になります。
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
        <h3 class="small-heading"><span>WCU</span></h3>
        <p class="text">書き込みキャパシティユニット(WCU)を入力してください。</p>
        <p class="text">
          最大1KBの項目に対して、1秒あたり1回の書き込みを行うことで1WCUを消費します。例えば、2KBの項目に対して1秒あたり100回の書き込みを行う場合は、200WCUが必要になります。
        </p>
        <p class="text">
          詳しくは、<ExternalLink
            href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html#ItemSizeCalculations.Writes"
            >書き込みでのキャパシティーユニットの消費</ExternalLink
          >をご確認ください。
        </p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>リザーブドキャパシティー</span></h3>
        <p class="text">
          RCUとWCUがある程度予測できる場合、最小使用量に対して割引を適用することができます。リザーブドキャパシティーを越えた分は、通常の料金が加算されます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>ストレージのオーバーヘッド</span></h3>
        <p class="text">
          ストレージコストには1アイテム当たり100bytesのオーバーヘッドが加算されます。アイテム数が億を超えるぐらいになると効いてきますが、その頃にはオーバーヘッドが気にならないぐらい高額になっていると思います。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>別リージョンへのデータ転送</span></h3>
        <p class="text">同一リージョンのデータ転送は無料ですが、別リージョンへのデータ転送には料金がかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>Global TablesやDynamoDBストリームなど</span></h3>
        <p class="text">
          Global Tablesやオンデマンドバックアップ、DynamoDBストリームなどを利用する場合は料金がかかります。<ExternalLink
            href="https://aws.amazon.com/jp/dynamodb/pricing/"
            >公式の料金表</ExternalLink
          >をご確認ください。
        </p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Accordion from '@/components/Accordion'
import Condition from '@/components/Condition'
import ExternalLink from '@/components/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceDynamoDB',
  components: { ServiceArticle, Accordion, Condition, ExternalLink },
  head() {
    return meta.dynamodb
  }
}
</script>
