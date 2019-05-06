<template>
  <ServiceTemplate service-name="apigateway">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">
        APIのエンドポイントを手軽に作成できるサービスです。<br />主に、リクエスト数とデータ転送量で料金が決まります。
      </p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">リクエスト数</h3>
        <p class="text">API Gatewayへ送信されるリクエストの数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">API Gatewayから送信されるデータ転送量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">キャッシュ</h3>
        <p class="text">キャッシュを使用する場合は、サイズを選択してください。</p>
      </section>
    </section>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import meta from '@/config/meta'

export default {
  name: 'ServiceApiGateway',
  components: { ServiceTemplate },
  head() {
    return meta.apigateway
  }
}
</script>
