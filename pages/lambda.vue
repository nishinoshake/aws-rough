<template>
  <ServiceTemplate service-name="lambda">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text"><a href="#サーバーレス" class="text-link">サーバーレス</a>でコードを実行できるサービスです。<br>現在は、Node.js/Python/Java/C#/Goがサポートされています</p>
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
    <section class="section">
      <h2 class="title">用語の説明</h2>
      <section class="section-child" id="サーバーレス">
        <h3 class="title-small">サーバーレス</h3>
        <p class="text">サーバーの管理が不要なアーキテクチャーやサービスのこと。</p>
        <p class="text">Lambdaを使用した場合、EC2のようにサーバーを構築する手間がなく、関数をアップして実行するだけなので、コードを書くことに集中できます。もちろん、サーバーが存在しない訳ではなく、雲の向こうの誰かが管理してくれているだけなので、感謝を忘れてはいけない。</p>
        <p class="text">サーバーレスと一言にいっても、<ExternalLink href="https://aws.amazon.com/jp/serverless/">アーキテクチャー</ExternalLink>や、<ExternalLink href="https://aws.amazon.com/jp/lambda/">Lambda</ExternalLink>や<ExternalLink href="https://aws.amazon.com/jp/dynamodb/">DynamoDB</ExternalLink>などのサービス、<ExternalLink href="https://serverless.com/">serverless</ExternalLink>という名前のフレームワークもあるので、少々ややこしいが慣れるしかない。</p>
        <p class="text">サーバーレスでシステムを構築すると、サーバーの事は意識しなくてよくなるが、サーバーレスであることを意識する必要が生じる。ここから先は哲学の領域。</p>
      </section>
    </section>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import store from '@/stores'
import { addComma } from '@/stores/price'

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
