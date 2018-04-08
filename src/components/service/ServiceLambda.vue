<template>
  <ServiceTemplate service-name="lambda">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">サーバーを管理せずにコードを実行できるサービスです。<br>現在は、Node.js/Python/Java/C#/Goがサポートされています</p>
      <p class="text">リクエスト数とメモリ使用量で料金が決まりますが、かなり寛大な無料枠があるので、軽く使う分には無料枠に収まると思います。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">リクエスト数</h3>
        <p class="text">Lambdaへのリクエスト数を入力してください。</p>
        <p class="text">{{ freeRequest }}件のリクエストは無料です。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">メモリ</h3>
        <p class="text">Lambdaに割り当てたメモリと、実行された秒数をかけた値を入力してください。</p>
        <p class="text">{{ freeMemory }}GB秒までは無料です。<br>GB秒というのが直感的にわかりにくいですが、2048MB割り当てた関数を86,400秒実行した場合、下記のようになります</p>
        <pre>(2048 / 1024) * 86400 = 172,800GB秒</pre>
      </section>
    </section>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import store from '@/store'
import { addComma } from '@/store/price'

export default {
  name: 'ServiceLambda',
  components: { ServiceTemplate, ServicePartsExclude, ExternalLink },
  computed: {
    priceLambda() {
      return store.state.price.lambda
    },
    freeRequest() {
      return addComma(this.priceLambda.request.free)
    },
    freeMemory() {
      return addComma(this.priceLambda.memory.free)
    }
  }
}
</script>
