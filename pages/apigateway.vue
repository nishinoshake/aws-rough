<template>
  <ServiceArticle service-name="apigateway">
    <template v-slot:zakuri>
      <p class="text">APIのエンドポイントを作成できるやつ。</p>
      <p class="text">
        バックエンドにはEC2やLambdaなどを設定できるほか、マッピングテンプレートを使用してモックもできます。最近、WebSocketもサポートされました。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>リクエスト数</span></h3>
        <p class="text">API Gatewayへ送信されるリクエストの数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>データ転送量</span></h3>
        <p class="text">API Gatewayから送信されるデータ転送量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>キャッシュ</span></h3>
        <p class="text">キャッシュを使用する場合は、サイズを選択してください。</p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Accordion from '@/components/Accordion'
import Condition from '@/components/Condition'
import meta from '@/config/meta'

export default {
  name: 'ServiceApiGateway',
  components: { ServiceArticle, Accordion, Condition },
  head() {
    return meta.apigateway
  }
}
</script>
