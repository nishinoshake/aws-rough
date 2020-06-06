<template>
  <ServiceTemplate service-name="apigateway">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">APIのエンドポイントを作成できるやつ。</p>
        <p class="text">
          バックエンドにはEC2やLambdaなどを設定できるほか、マッピングテンプレートを使用してモックもできます。最近、WebSocketもサポートされました。
        </p>
      </div>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="title-small"><span>リクエスト数</span></h3>
        <p class="text">API Gatewayへ送信されるリクエストの数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>データ転送量</span></h3>
        <p class="text">API Gatewayから送信されるデータ転送量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>キャッシュ</span></h3>
        <p class="text">キャッシュを使用する場合は、サイズを選択してください。</p>
      </section>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import meta from '@/config/meta'

export default {
  name: 'ServiceApiGateway',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition },
  head() {
    return meta.apigateway
  }
}
</script>
